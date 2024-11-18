import React from "react";

import { IoMdAddCircleOutline } from "react-icons/io";
import { GrList } from "react-icons/gr";
import { MdOutlineAddModerator } from "react-icons/md";

const How = () => {
  return (
    <section className="my-20 flex flex-col gap-10 relative">
      <div className="text-center flex flex-col gap-5">
        <div className="tag w-max m-auto p-1 px-3 text-gray-500 text-sm">
          HOW IT WORKS
        </div>
        <h1 className="text-5xl">Getting Started with Cerium is Simple</h1>
        <p className="text-lg text-gray-500">
          Follow these easy steps to empower your server
        </p>
      </div>
      <div className="flex flex-col gap-5 flex-1">
        <div className="flex-1 flex flex-col sm:flex-row gap-5 tag p-5 rounded-3xl cursor-pointer hover:scale-[1.03] transition-all duration-300">
          <div className="bg-gray-800 w-16 h-16 flex justify-center items-center rounded-3xl">
            <IoMdAddCircleOutline size={30} />
          </div>
          <div className="flex flex-col gap-2 w-11/12">
            <h1 className="text-xl font-bold">Add Cerium Bot to Your Server</h1>
            <p className="text-lg text-gray-500">
              Click the 'Add to Discord' button and authorize the bot.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-5 tag p-5 rounded-3xl cursor-pointer hover:scale-[1.03] transition-all duration-300">
          <div className="bg-gray-800 w-16 h-16 flex justify-center items-center rounded-3xl">
            <GrList size={30} />
          </div>
          <div className="flex flex-col gap-2 w-11/12">
            <h1 className="text-xl font-bold">Configure Permissions</h1>
            <p className="text-lg text-gray-500">
              Set up custom permissions for users and roles.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-5 tag p-5 rounded-3xl cursor-pointer hover:scale-[1.03] transition-all duration-300">
          <div className="bg-gray-800 w-16 h-16 flex justify-center items-center rounded-3xl">
            <MdOutlineAddModerator size={30} />
          </div>
          <div className="flex flex-col gap-2 w-11/12">
            <h1 className="text-xl font-bold">Start Using Core Features</h1>
            <p className="text-lg text-gray-500">
              Access moderation tools, rank management, and more through
              easy-to-use commands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
