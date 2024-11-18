import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 p-5">
      <div className="flex pb-5">
        <h1 className="text-9xl font-bold">Cerium Bot</h1>
      </div>
      <div className="flex flex-row w-full justify-between pt-5 border-t text-gray-500 text-sm">
        &copy; Copyright Cerium Bot 2014
        <a href="/privacy-policy" className="underline">
          privacy policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
