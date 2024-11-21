import React from "react";

import config from "../config.json";

const Footer = () => {
  const { LOGO_IMAGE_URL } = config;
  return (
    <footer className="flex flex-row justify-between items-center">
      <div className="text-gray-500">
        &copy; 2024 Cerium Bot.{" "}
        <a
          href="https://yolocode.pl"
          className="hover:underline transition-all duration-300 text-white hover:text-blue-900"
          target="_blank"
        >
          Yolo Solutions
        </a>{" "}
        All rights reserved.
      </div>
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
