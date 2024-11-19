import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="m-auto w-full justify-between flex flex-row gap-5 p-3 pl-5 rounded-full items-center relative">
      <NavLink to="/" className="text-2xl font-bold">
        <span className="text-blue-900">Cerium</span> Bot
      </NavLink>
      <ul>
        <li className="link">
          <NavLink to="#features">Features</NavLink>
        </li>
        <li className="link">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="link">
          <NavLink to="#security">Security</NavLink>
        </li>
        <li className="link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="flex justify-end">
        <a href="/" className="btn">
          Add to discord
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
