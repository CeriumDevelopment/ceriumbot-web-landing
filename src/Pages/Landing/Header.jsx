import React from "react";

const Header = () => {
  return (
    <header className="my-20 md:mx-20">
      <div className="bg-header h-screen absolute top-0 left-0 right-0 -z-10"></div>
      <div className="text-center flex flex-col gap-10">
        <h1 className="text-5xl sm:text-7xl">
          The Ultimate, All-in-One Discord Management Tool
        </h1>
        <p className="text-lg text-gray-500 w-[70vw] md:w-[50vw] m-auto">
          Experience seamless server control with powerful features, advanced
          customization, and complete security—all in one easy-to-use, free
          Discord bot.
        </p>
        <div className="flex flex-col sm:flex-row w-max m-auto gap-5">
          <a href="/" className="btn w-max m-auto">
            Add Cerium Bot to Your Server
          </a>
          <a href="/" className="btn blue !bg-blue-900 !text-white w-max m-auto">
            Open Dashboard
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
