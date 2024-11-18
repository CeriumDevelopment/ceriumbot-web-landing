import React from "react";

const Header = () => {
  return (
    <header className="m-20">
      <div className="text-center flex flex-col gap-10">
        <h1 className="text-7xl">
          The Ultimate, All-in-One Discord Management Tool
        </h1>
        <p className="text-lg text-gray-500 w-[60%] m-auto">
          Experience seamless server control with powerful features, advanced
          customization, and complete security—all in one easy-to-use, free
          Discord bot.
        </p>
        <div className="flex flex-row w-max m-auto gap-5">
          <a href="/" className="btn w-max m-auto">
            Add Cerium Bot to Your Server
          </a>
          <a href="/" className="btn outline w-max m-auto">
            View Docs
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
