import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.json";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [guilds, setGuilds] = useState([]);
  const [botGuilds, setBotGuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true); // Spinner state
  const { DISCORD_AUTH_INFO } = config;

  const BOT_ID = "1293591680808648775";

  const fetchGuilds = async () => {
    try {
      const response = await axios.get(`${DISCORD_AUTH_INFO}/auth/me/guilds`, {
        withCredentials: true,
      });
      if (!response.data.success) {
        throw new Error("Failed to fetch guilds");
      }
      setGuilds(response.data.guilds);
    } catch (error) {
      console.error("Failed to fetch guilds:", error);
    }
  };

  const fetchBotGuilds = async () => {
    try {
      const response = await axios.get(`${DISCORD_AUTH_INFO}/bot/guilds`, {
        withCredentials: true,
      });
      if (!response.data.success) {
        throw new Error("Failed to fetch bot guilds");
      }
      setBotGuilds(response.data.guilds);
    } catch (error) {
      console.error("Failed to fetch bot guilds:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 3000);

    axios
      .get(`${DISCORD_AUTH_INFO}/auth/me`, { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = "/redirect/discord";
      });

    fetchGuilds();
    fetchBotGuilds();

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const isBotInGuild = (guildId) => {
    return botGuilds.some((botGuild) => botGuild.id === guildId);
  };

  const addBotToGuild = (guildId) => {
    const DISCORD_ADD_BOT_LINK = `https://discord.com/oauth2/authorize?client_id=${BOT_ID}&permissions=8&scope=bot%20applications.commands&guild_id=${guildId}`;
    window.location.href = DISCORD_ADD_BOT_LINK;
  };

  if (showSpinner) {
    // Spinner with "Loading..." text
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-0 text-white">
        <p className="mb-4">Loading...</p>
        <div className="loader"></div>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Error: User data not found. Please log in again.</p>;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-10 bg-header text-white">
      <h1 className="text-4xl font-bold mb-5">Welcome, {user.username}!</h1>
      <p className="mb-10 text-gray-400">
        Select a server to manage your bot, or invite it to a new one!
      </p>

      {/* Render the list of guilds */}
      <div className="flex flex-wrap justify-center gap-5 px-5">
        {guilds.map((guild) => (
          <div
            key={guild.id}
            className="bg-gray-900 p-4 rounded-xl border border-blue-950 w-56 text-center flex flex-col justify-between"
            style={{ margin: "0 10px" }} // Adds side margin
          >
            <div>
              <div className="w-20 h-20 flex justify-center items-center rounded-full bg-gray-900 mx-auto">
                <img
                  src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                  alt={guild.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mt-3">{guild.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{guild.id}</p>
            </div>
            <div className="mt-auto">
              {isBotInGuild(guild.id) ? (
                <button
                  onClick={() => alert(`Managing server: ${guild.name}`)}
                  className="py-2 px-4 bg-blue-800 border border-blue-800 text-white font-bold rounded-lg w-full transition-200 transition-all hover:bg-blue-900 hover:border-blue-900"
                >
                  Manage
                </button>
              ) : (
                <button
                  onClick={() => addBotToGuild(guild.id)}
                  className="py-2 px-4 bg-transparent border border-gray-500 text-gray-400 font-bold rounded-lg w-full transition-200 hover:scale-[1.03] transition-all hover:border-gray-300"
                >
                  Invite Bot
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
