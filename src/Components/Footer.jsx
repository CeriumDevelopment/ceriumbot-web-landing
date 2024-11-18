import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-blue-900">Cerium</span> Bot
      </h1>
      <ul className="flex gap-5">
        <li>
          <a
            href="/contact"
            className="text-gray-500 transition-all duration-300 hover:text-white"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/privacy-policy"
            className="text-gray-500 transition-all duration-300 hover:text-white"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
