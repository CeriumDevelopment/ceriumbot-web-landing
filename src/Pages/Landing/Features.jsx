import React from "react";

import { GrSecure, GrList } from "react-icons/gr";
import { PiConfettiBold } from "react-icons/pi";

const Tools = () => {
  return (
    <section id="features" className="my-20 flex flex-col gap-10">
      <div className="text-center flex flex-col gap-5">
        <div className="tag w-max m-auto p-1 px-3 text-gray-500 text-sm">
          FEATURES
        </div>
        <h1 className="text-5xl">Explore Cerium's Powerful Features</h1>
        <p className="text-lg text-gray-500">
          From moderation to community support, we've got you covered
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1 flex flex-col gap-5 tag p-5 rounded-3xl cursor-pointer hover:scale-[1.03] transition-all duration-300">
          <div className="bg-gray-800 w-16 h-16 flex justify-center items-center rounded-3xl">
            <GrSecure size={30} />
          </div>
          <h1 className="text-xl font-bold">
            Keep Your Server Safe and Organized
          </h1>
          <p className="text-lg text-gray-500">
            Advanced moderation commands to manage user behavior, mute, kick,
            ban, and auto-moderation settings for spam or offensive content.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 tag p-5 rounded-3xl cursor-pointer hover:scale-[1.03] transition-all duration-300">
          <div className="bg-gray-800 w-16 h-16 flex justify-center items-center rounded-3xl">
            <GrList size={30} />
          </div>
          <h1 className="text-xl font-bold">Streamline Role Management</h1>
          <p className="text-lg text-gray-500">
            Automated role assignment, custom role hierarchy management, and
            efficient role synchronization.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 tag p-5 rounded-3xl cursor-pointer hover:scale-[1.03] transition-all duration-300">
          <div className="bg-gray-800 w-16 h-16 flex justify-center items-center rounded-3xl">
            <PiConfettiBold size={30} />
          </div>
          <h1 className="text-xl font-bold">
            Boost Engagement with Easy Giveaways
          </h1>
          <p className="text-lg text-gray-500">
            Create and manage giveaways effortlessly to keep your community
            active and engaged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
