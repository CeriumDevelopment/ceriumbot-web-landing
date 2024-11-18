import React from "react";

const Navigation = () => {
  return (
    <nav className="m-auto flex flex-row gap-5 p-3 pl-5 rounded-full items-center">
      <div className="w-48">
        <a href="/" className="text-2xl font-bold">
          <span className="text-blue-900">Cerium</span> Bot
        </a>
      </div>
      <ul className="flex gap-5">
        <li className="link">
          <a href="/">Features</a>
        </li>
        <li className="link">
          <a href="/">About Us</a>
        </li>
        <li className="link">
          <a href="/">Security</a>
        </li>
        <li className="link">
          <a href="/">Reviews</a>
        </li>
        <li className="link">
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="w-48 flex justify-end">
        <a href="/" className="btn">
          Add to discord
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
