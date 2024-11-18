import React from "react";

const Navigation = () => {
  return (
    <nav className="m-auto w-full justify-between flex flex-row gap-5 p-3 pl-5 rounded-full items-center relative">
      <a href="/" className="text-2xl font-bold">
        <span className="text-blue-900">Cerium</span> Bot
      </a>
      <ul>
        <li className="link">
          <a href="#features">Features</a>
        </li>
        <li className="link">
          <a href="/about">About Us</a>
        </li>
        <li className="link">
          <a href="#security">Security</a>
        </li>
        <li className="link">
          <a href="/contact">Contact</a>
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
