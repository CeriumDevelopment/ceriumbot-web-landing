import React, { useEffect, useState } from "react";
import axios from "axios";

import config from "../config.json"

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const { DASHBOARD_AUTH } = config;

  useEffect(() => {
    axios
      .get(`${DASHBOARD_AUTH}/auth/me`, { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((err) => {
        window.location.href = "/redirect/discord";
      });
  },);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <img
        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
        alt="Avatar"
      />
    </div>
  );
};

export default Dashboard;