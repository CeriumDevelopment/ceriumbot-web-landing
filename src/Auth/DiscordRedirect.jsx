import React, { useEffect } from "react";

import config from "../config.json";

const DiscordLogin = () => {
  const { DISCORD_AUTH_URL } = config;


  useEffect(() => {
    
    // Redirecting the user to Discord's OAuth 2.0 authorization URL
    window.location.href = DISCORD_AUTH_URL;
  });

  return <div>Redirecting to Discord...</div>;
};

export default DiscordLogin;
