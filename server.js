const express = require("express");
const session = require("express-session");
const axios = require("axios");
const app = express();
const PORT = 4000;

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./src/config.json', 'utf-8'));

const cors = require("cors");

app.use(
  cors({
    origin: config.MAIN_WEB, // Frontend URL
    credentials: true, // Pozwól na przesyłanie ciasteczek
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
      secret: "xfendi-tu-byl",
      resave: false,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: false, // Ustaw na true w trybie produkcyjnym, jeśli używasz HTTPS
        maxAge: 1000 * 60 * 60 * 24, // Czas trwania sesji (np. 1 dzień)
      },
    })
);

// Discord OAuth callback route
app.get("/auth/callback", async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ success: false, error: "No code received" });
  }

  try {
    const response = await axios.post(
      "https://discord.com/api/oauth2/token",
      new URLSearchParams({
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: `${config.DASHBOARD_AUTH}/auth/callback`,
        scope: config.SCOPE,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token } = response.data;

    const userInfo = await axios.get("https://discord.com/api/v10/users/@me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    req.session.user = userInfo.data;

    res.redirect(`${config.MAIN_WEB}/dashboard`); // Przekierowanie na dashboard
  } catch (error) {
    console.error("OAuth Error: ", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Authentication failed" });
  }
});

// Endpoint to get user data
app.get("/auth/me", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ success: false, error: "Not authenticated" });
  }

  res.json({ success: true, user: req.session.user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});