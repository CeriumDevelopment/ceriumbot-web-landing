import React from "react";

import config from "../../config.json";

const Hero = () => {
  const { DISCORD_ADD_BOT_LINK } = config;
  return (
    <section className="my-20 p-10 sm:p-20 tag rounded-3xl border border-blue-950">
      <div className="flex flex-col gap-5 text-center">
        <div className="bg-gray-800 w-16 h-16 flex justify-center items-center m-auto text-white rounded-3xl text-2xl font-bold">
          Ce
        </div>
        <h1 className="text-5xl">Your All-in-One Discord Assistant!</h1>
        <p className="text-lg text-gray-500">
          Automate moderation, grow your community, and have more fun with
          premium features – all in one bot!
        </p>
        <a href={DISCORD_ADD_BOT_LINK} target="_blank" rel="noreferrer" className="btn w-max m-auto">
          Add Cerium Bot to Your Server
        </a>
      </div>
    </section>
  );
};

export default Hero;
