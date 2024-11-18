import React from "react";

const Security = () => {
  return (
    <section className="my-20 flex flex-col gap-10">
      <div className="text-center flex flex-col gap-5">
        <div className="tag w-max m-auto p-1 px-3 text-gray-500 text-sm">
          SECURITY AND CONTROL
        </div>
        <h1 className="text-5xl">Your Server, Your Rules</h1>
        <p className="text-lg text-gray-500">
          Advanced security and permission management for ultimate control
        </p>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-5">
        <div className="flex-1 flex flex-col gap-5 rounded-3xl tag p-5 col-span-2">
          <h1 className="text-xl font-bold">Custom Permission System</h1>
          <p className="text-lg text-gray-500">
            Cerium Bot offers a comprehensive and intuitive permission system
            that allows server admins to control who can access specific
            features. With detailed role-based access controls, you can ensure
            that only trusted members have the authority to perform certain
            actions, such as moderating chat or managing giveaways.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 rounded-3xl tag-blue p-5">
          <h1 className="text-xl font-bold">Ban and Mute Management</h1>
          <p className="text-lg text-gray-500">
            Effortlessly manage bans, mutes, and warnings with automated
            tracking. Set temporary or permanent bans, and track user
            infractions to maintain a safe and respectful environment.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 rounded-3xl tag-blue p-5">
          <h1 className="text-xl font-bold">Anti-Spam and Auto-Moderation</h1>
          <p className="text-lg text-gray-500">
            Protect your server from spam, bots, and inappropriate content using
            Cerium’s customizable auto-moderation tools. Detect and filter
            offensive language, excessive messages, and unwanted links
            automatically, allowing you to focus on more important aspects of
            server management.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 rounded-3xl tag p-5 col-span-2">
          <h1 className="text-xl font-bold">
            Two-Factor Authentication (2FA) Integration
          </h1>
          <p className="text-lg text-gray-500">
            For an extra layer of security, Cerium Bot supports 2FA for admins
            and moderators, ensuring that only verified individuals can make
            significant changes to server configurations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
