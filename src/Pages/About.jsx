import React from "react";

const About = () => {
  return (
    <section className="my-20 md:mx-20">
      <div className="bg-header h-screen absolute top-0 left-0 right-0 -z-10"></div>
      <div className="text-6xl font-semibold text-gray-400">
        <span className="text-blue-900">Cerium</span>{" "}
        <span className="text-white">Bot</span> is the{" "}
        <span className="text-violet-600">
          ultimate solution for managing and enhancing Discord servers of any
          size.
        </span>{" "}
        Built to be highly configurable and incredibly user-friendly,{" "}
        <span className="text-blue-900">Cerium</span>{" "}
        <span className="text-white">Bot</span> provides a range of powerful
        tools designed to keep your community secure, organized, and thriving.
        Whether it’s{" "}
        <span className="text-violet-600">
          advanced moderation features to handle disruptive members, automated
          giveaways to boost engagement, or ticket support to streamline
          communication,
        </span>{" "}
        <span className="text-blue-900">Cerium</span> has everything you need to
        create a seamless server experience. With{" "}
        <span className="text-blue-900">Cerium</span>, you maintain full control
        over your server thanks to an intuitive permission system that ensures
        only authorized users can access specific features. Perfect for both
        small private groups and large public communities,{" "}
        <span className="text-blue-900">Cerium</span>{" "}
        <span className="text-white">Bot</span> adapts to the needs of your
        server, helping it run smoothly while keeping things fun and dynamic—all{" "}
        <span className="text-violet-600">completely free of charge.</span>
      </div>
    </section>
  );
};

export default About;
