import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import config from "../config.json";

const Navigation = () => {
  const { DISCORD_ADD_BOT_LINK, LOGO_IMAGE_URL } = config;
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width < 500) {
    console.log("Hamburger menu toggled");
  }

  return (
    <nav className="bg-gray-900 m-auto w-full flex flex-row justify-between items-center gap-5 py-1 px-3 rounded-full relative border border-blue-950">
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold">
        <img src={LOGO_IMAGE_URL} alt="cerium" className="rounded-3xl h-12" />
      </NavLink>

      {/* Hamburger Menu Toggle */}
      <button
        className="flex text-white md:hidden"
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

      {/* Links and Buttons */}
      <ul
        ref={menuRef}
        className={`
          gap-5
          transition-all duration-300
          ${width >= 1100 && "absolute left-1/2 -translate-x-1/2"}
          ${
            width <= 768
              ? `absolute left-0 right-0 pointer-events-none top-[100%] justify-center items-center flex flex-col border border-blue-950 ${
                  !menuOpen && "opacity-0"
                }`
              : "flex"
          }
         ${
           menuOpen &&
           width <= 768 &&
           "bg-gray-900 rounded-3xl p-5 opacity-1 pointer-events-auto top-[calc(100%+20px)]"
         }
        `}
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

        {/* Mobile Version: Add to Discord and Login Buttons */}
        <li className="md:hidden flex gap-3">
          <NavLink to="/login" className="btn block py-2 px-4">
            Login
          </NavLink>
          <a
            href={DISCORD_ADD_BOT_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn blue !bg-blue-900 !text-white block py-2 px-4 hover:!bg-blue-950 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <img
              src="https://i.imgur.com/wpTEYKd.png"
              alt="Discord logo"
              className="w-5 h-5 mt-0.5"
            />
            <span>Add to discord</span>
          </a>
        </li>
      </ul>

      {/* Desktop Version: Add to Discord and Login */}
      <div className="hidden md:flex gap-3">
        <NavLink to="/login" className="btn py-2 px-4 w-max">
          Login
        </NavLink>
        <a
          href={DISCORD_ADD_BOT_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn blue !bg-blue-900 !text-white py-2 px-4 w-max hover:!bg-blue-950 transition-colors duration-200 flex items-center justify-center gap-2">
          <img
            src="https://i.imgur.com/wpTEYKd.png"
            alt="Discord logo"
            className="w-5 h-5 mt-0.5"
          />
          <span>Add to discord</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
