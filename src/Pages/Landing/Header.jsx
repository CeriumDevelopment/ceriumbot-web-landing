import React from "react";

import config from "../../config.json";

const Header = () => {
  const { DISCORD_ADD_BOT_LINK } = config;

  const addBot = () => {
    window.location.href = DISCORD_ADD_BOT_LINK;
  };

  return (
    <header className="my-20 md:mx-20">
      <div className="bg-header h-screen absolute top-0 left-0 right-0 -z-10"></div>
      <div className="text-center flex flex-col gap-10">
        <div className="tag w-max m-auto pr-1 px-3 text-[rgb(73,164,255)] font-bold text-sm p-2 border border-1.1 border-[rgba(230,230,230,0.3)]">
          NEW  
          <span className="w-max m-auto p-1 px-3 !font-normal text-gray-500 text-sm">
            Working dashboard
            <a href="/info/newest" className="ml-4 underline decoration-solid text-current hover:text-white transition-colors duration-200">
              Learn More
            </a>
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl">
          The Ultimate, All-in-One<br></br> Discord Management Tool
        </h1>
        <p className="text-lg text-gray-500 w-[70vw] md:w-[50vw] m-auto">
          Experience seamless server control with powerful features, advanced
          customization, and complete security—all in one easy-to-use, free
          Discord bot.
        </p>
        <div className="flex flex-col sm:flex-row w-max m-auto gap-5">
          <a
            href="/dashboard"
            className="btn !bg-[rgba(255,255,255,0)] !text-white border border-[rgba(230,230,230,0.5)] border-2 hover:border-[rgba(230,230,230,0.8)] hover:scale-[1.03] w-max m-auto"
          >
            Open Dashboard
          </a>

          <button
            onClick={addBot}
            target="_blank"
            rel="noreferrer"
            className="btn blue !bg-blue-900 !text-white border border-blue-900 border-2 hover:border-blue-850 py-2 px-4 w-max hover:!bg-blue-850 hover:scale-[1.03] transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <img
              src="https://i.imgur.com/wpTEYKd.png"
              alt="Discord logo"
              className="w-5 h-5 mt-0.5"
            />
            <span>Add Cerium Bot to Your Server</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
