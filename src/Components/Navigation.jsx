import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import config from "../config.json";

const Navigation = () => {
  const { DISCORD_ADD_BOT_LINK, LOGO_IMAGE_URL, DISCORD_AUTH_URL, DISCORD_AUTH_INFO } = config;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenProfile, setmenuOpenProfile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [user, setUser] = useState(null);
  const menuRef = useRef(null);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fetch user data
  useEffect(() => {
    axios
      .get(`${DISCORD_AUTH_INFO}/auth/me`, { withCredentials: true })
      .then((response) => {
        if (response.data.success) {
          setUser(response.data.user);
        }
      })
      .catch(() => {
        setUser(null); // Reset user on failure
      });
  }, []);

  const handleLogin = () => {
    window.location.href = DISCORD_AUTH_URL;
  };

  const addBot = () => {
    window.location.href = DISCORD_ADD_BOT_LINK;
  };

  return (
    <nav className="bg-gray-900 m-auto w-full flex flex-row justify-between items-center gap-5 py-1 px-3 rounded-full relative border border-blue-950">
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold">
        <img src={LOGO_IMAGE_URL} alt="cerium" className="rounded-3xl h-12" />
      </NavLink>

      {/* Mobile Buttons (Hamburger, Login, Add to Discord) */}
      <div className="flex items-center gap-3 md:hidden">
        {/* Hamburger Menu Toggle */}
        <button
          className="flex text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className={`w-8 h-8 transition-transform duration-300 ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={`absolute transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Login or Profile Avatar Dropdown */}
        {user ? (
          <div className="relative">
            <img
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-500 cursor-pointer transition-all hover:opacity-80"
              onClick={() => setmenuOpenProfile(!menuOpenProfile)} // Toggle dropdown
            />
            {menuOpenProfile && (
              <div className="absolute right-0 top-12 bg-gray-900 text-white rounded-lg shadow-lg w-48 py-3 px-4 border-2 border-blue-950">
              <p className="text-center text-lg font-semibold border-b-2 border-blue-950 pb-2">{user.username}</p>
              <NavLink
                to="/account/profile"
                className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-blue-950"
              >
                Profile
              </NavLink>
              <NavLink
                to="/account/settings"
                className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-blue-950 mb-0.5"
              >
                Settings
              </NavLink>
              <NavLink
                to="/dashboard"
                className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-blue-950 mb-0.5"
              >
                Your Servers
              </NavLink>
              <NavLink
                to="/status"
                className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-t-2 border-blue-950 mb-0.5"
              >
                Bot Status
              </NavLink>
              <NavLink
                to="/support"
                className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-blue-950 -mb-2-1.5"
              >
                Support Server
              </NavLink>
              <button
                onClick={() => {
                  setmenuOpenProfile(false);
                  window.location.href = "/logout"; // Implement your logout logic here
                }}
                className="w-full py-2 text-center text-red-400 hover:text-red-600 transition-colors duration-200 border-t-2 border-blue-950 mt-2"
              >
                Logout
              </button>
            </div>
            )}
          </div>
        ) : (
          <button onClick={handleLogin} className="btn py-2 px-4 w-max">
            Login
          </button>
        )}
      </div>

      {/* Links and Buttons */}
      <ul
        ref={menuRef}
        className={`gap-5 transition-all duration-300 items-center ${
          width >= 1100 && "absolute left-1/2 -translate-x-1/2"
        } ${
          width <= 768
            ? `absolute left-0 right-0 pointer-events-none top-[100%] justify-center items-center flex flex-col border border-blue-950 ${
                !menuOpen && "opacity-0"
              }`
            : "flex"
        } ${
          menuOpen &&
          width <= 768 &&
          "bg-gray-900 rounded-3xl p-5 opacity-1 pointer-events-auto top-[calc(100%+20px)]"
        }`}
      >
        <li className="link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="link">
          <NavLink to="/features">Features</NavLink>
        </li>
        <li className="link">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="link">
          <NavLink to="/security">Security</NavLink>
        </li>
        <li className="link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <button
          onClick={addBot}
          target="_blank"
          rel="noreferrer"
          className={`btn blue !bg-blue-900 !text-white py-2 px-4 w-max hover:!bg-blue-950 transition-colors duration-200 ${width <= 768 ? "flex" : "hidden"} items-center justify-center gap-2`}
        >
          <img
            src="https://i.imgur.com/wpTEYKd.png"
            alt="Discord logo"
            className="w-5 h-5 mt-0.5"
          />
          <span>Add to Discord</span>
        </button>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        {user ? (
          <div className="relative">
            <img
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-500 cursor-pointer transition-all hover:opacity-80"
              onClick={() => setmenuOpenProfile(!menuOpenProfile)} // Toggle dropdown
            />
            {menuOpenProfile && (
              <div className="absolute right-0 top-12 bg-gray-900 text-white rounded-lg shadow-lg w-48 py-3 px-4 border-2 border-blue-950">
                <p className="text-center text-lg font-semibold border-b-2 border-blue-950 pb-2">{user.username}</p>
                <NavLink
                  to="/account/profile"
                  className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-blue-950"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/account/settings"
                  className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-blue-950 mb-0.5"
                >
                  Settings
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-blue-950 mb-0.5"
                >
                  Your Servers
                </NavLink>
                <NavLink
                  to="/status"
                  className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-t-2 border-blue-950 mb-0.5"
                >
                  Bot Status
                </NavLink>
                <NavLink
                  to="/support"
                  className="block py-2 text-center text-blue-300 hover:text-blue-600 transition-colors duration-200 border-blue-950 -mb-2-1.5"
                >
                  Support Server
                </NavLink>
                <button
                  onClick={() => {
                    setmenuOpenProfile(false);
                    window.location.href = "/logout"; // Implement your logout logic here
                  }}
                  className="w-full py-2 text-center text-red-400 hover:text-red-600 transition-colors duration-200 border-t-2 border-blue-950 mt-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={handleLogin} className="btn py-2 px-4 w-max">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
