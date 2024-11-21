import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import config from "../config.json";

const Navigation = () => {
  const { DISCORD_ADD_BOT_LINK, LOGO_IMAGE_URL } = config;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="m-auto w-full flex flex-row justify-between items-center gap-5 p-3 pl-5 rounded-full relative border border-[#030617]">
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold">
        <img src={LOGO_IMAGE_URL} alt="cerium" className="rounded-3xl h-12" />
      </NavLink>

      {/* Hamburger Menu Toggle */}
      <button
        className="block md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Links and Buttons */}
      <ul
        className={`absolute md:static top-16 right-5 bg-gray-900 md:bg-transparent md:flex md:items-center md:space-x-5 p-5 md:p-0 rounded-lg md:rounded-none space-y-4 md:space-y-0 ${
          menuOpen ? "block border border-white/50 w-full left-0" : "hidden"
        }`}
      >
        <li className="link">
          <NavLink to="/" className="block py-2 px-4 text-white hover:text-blue-400">
            Home
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="#features" className="block py-2 px-4 text-white hover:text-blue-400">
            Features
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/about" className="block py-2 px-4 text-white hover:text-blue-400">
            About Us
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/contact" className="block py-2 px-4 text-white hover:text-blue-400">
            Contact
          </NavLink>
        </li>

        {/* Mobile Version: Add to Discord and Login Buttons in flex layout */}
        <li className="md:hidden flex justify-between w-full items-center">
          <NavLink
            to="/login"
            className="loginBtn block py-2 px-4 text-white"
          >
            Login
          </NavLink>
          <a
            href={DISCORD_ADD_BOT_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn block py-2 px-4 text-white"
          >
            Add to discord
          </a>
        </li>
      </ul>

      {/* Desktop Version: Add to Discord and Login (adjusted gap) */}
      <div className="hidden md:flex gap-3">
        <NavLink to="/login" className="loginBtn py-2 px-4 text-white">
          Login
        </NavLink>
        <a
          href={DISCORD_ADD_BOT_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn py-2 px-4 text-white"
        >
          Add to discord
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
