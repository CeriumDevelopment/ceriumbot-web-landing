import React from "react";

import config from "../../config.json";

const Header = () => {
  const { DISCORD_ADD_BOT_LINK, DISCORD_DASHBOARD_LINK } = config;
  return (
    <header className="my-20 md:mx-20">
      <div className="bg-header h-screen absolute top-0 left-0 right-0 -z-10"></div>
      <div className="text-center flex flex-col gap-10">
        <h1 className="text-5xl sm:text-7xl">
          The Ultimate, All-in-One<br></br> Discord Management Tool
        </h1>
        <p className="text-lg text-gray-500 w-[70vw] md:w-[50vw] m-auto">
          Experience seamless server control with powerful features, advanced
          customization, and complete security-all in one easy-to-use, free
          Discord bot.
        </p>
        <div className="flex flex-col sm:flex-row w-max m-auto gap-5">
        <a
            href={DISCORD_DASHBOARD_LINK}
            className="btn w-max m-auto"
          >
            Open Dashboard
          </a>

        <a
          href={DISCORD_ADD_BOT_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn blue !bg-blue-900 !text-white py-2 px-4 w-max hover:!bg-blue-950 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <img
            src="https://i.imgur.com/wpTEYKd.png"
            alt="Discord logo"
            className="w-5 h-5 mt-0.5"
          />
          <span>Add Cerium Bot to Your Server</span>
        </a>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
