const express = require("express");
const session = require("express-session");
const axios = require("axios");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./src/config.json", "utf-8"));
const cors = require("cors");

const app = express();
const PORT = 4000;

// CORS Setup
app.use(
  cors({
    origin: config.MAIN_WEB, // Frontend URL
    credentials: true, // Allow cookies to be sent
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session Setup
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // Set to true in production if using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day session expiration
    },
  })
);

// Discord OAuth callback route
app.get("/auth/callback", async (req, res) => {
  if (req.session.user) {
    return res.redirect(`${config.MAIN_WEB}/dashboard`);
  }

  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ success: false, error: "No code received" });
  }

  try {
    const tokenResponse = await axios.post(
      "https://discord.com/api/oauth2/token",
      new URLSearchParams({
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: `${config.DISCORD_AUTH_INFO}/auth/callback`,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const { access_token } = tokenResponse.data;

    // Fetch user info
    const userInfoResponse = await axios.get(
      "https://discord.com/api/v10/users/@me",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    req.session.user = userInfoResponse.data;
    req.session.access_token = access_token;

    res.redirect(`${config.MAIN_WEB}/dashboard`);
  } catch (error) {
    console.error("OAuth Error:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Authentication failed" });
  }
});

// Get user information
app.get("/auth/me", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ success: false, error: "Not authenticated" });
  }
  res.json({ success: true, user: req.session.user });
});

// Fetch bot's guilds
app.get("/bot/guilds", async (req, res) => {
  try {
    const response = await axios.get(
      "https://discord.com/api/v10/users/@me/guilds",
      {
        headers: { Authorization: `Bot ${config.BOT_TOKEN}` },
      }
    );

    res.json({ success: true, guilds: response.data });
  } catch (error) {
    console.error("Bot Guild Fetch Error:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Failed to fetch bot guilds" });
  }
});

// Fetch user's guilds (Admin only, with bot presence flag)
app.get("/auth/me/guilds", async (req, res) => {
  if (!req.session.user || !req.session.access_token) {
    return res.status(401).json({ success: false, error: "Not authenticated" });
  }

  const fetchGuilds = async (url, headers) => {
    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      if (error.response?.data?.message === "You are being rate limited.") {
        const retryAfter = error.response.data.retry_after;
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        return fetchGuilds(url, headers);
      }
      throw error;
    }
  };

  try {
    // Fetch user's guilds
    const userGuilds = await fetchGuilds("https://discord.com/api/v10/users/@me/guilds", {
      Authorization: `Bearer ${req.session.access_token}`,
    });

    // Filter user's guilds for admin privileges
    const adminGuilds = userGuilds.filter((guild) => {
      const permissions = BigInt(guild.permissions);
      return (permissions & BigInt(0x8)) === BigInt(0x8); // Check for 'ADMINISTRATOR' permission
    });

    // Fetch bot's guilds
    const botGuilds = await fetchGuilds("https://discord.com/api/v10/users/@me/guilds", {
      Authorization: `Bot ${config.BOT_TOKEN}`,
    });

    const botGuildIds = botGuilds.map((guild) => guild.id);

    // Add bot presence flag to user's guilds
    const enrichedGuilds = adminGuilds.map((guild) => ({
      ...guild,
      botInGuild: botGuildIds.includes(guild.id),
    }));

    res.json({ success: true, guilds: enrichedGuilds });
  } catch (error) {
    console.error("Guild Fetch Error:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Failed to fetch guilds" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
