import React from "react";

import config from "../../config.json";

const Hero = () => {
  const { DISCORD_ADD_BOT_LINK } = config;

  const addBot = () => {
    window.location.href = DISCORD_ADD_BOT_LINK;
  };


  return (
    <section className="my-20 p-10 sm:p-20 tag rounded-3xl border border-blue-950">
      <div className="flex flex-col gap-5 text-center">
        <div className="bg-gray-800 w-16 h-16 flex justify-center items-center m-auto text-white rounded-3xl text-2xl font-bold">
          Ce
        </div>
        <h1 className="text-5xl">Your All-in-One Discord Assistant!</h1>
        <p className="text-lg text-gray-500">
          Automate moderation, grow your community and have fun - all for free!
        </p>
        <button
          onClick={addBot}
          target="_blank"
          rel="noreferrer"
          className="btn blue !bg-blue-900 !text-white py-2 px-4 w-max m-auto hover:!bg-blue-950 hover:scale-[1.05] transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <img
            src="https://i.imgur.com/wpTEYKd.png"
            alt="Discord logo"
            className="w-5 h-5 mt-0.5"
          />
          <span>Add Cerium Bot to Your Server</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
