import React from "react";

const Reviews = () => {
  return (
    <section className="my-20 flex flex-col gap-5">
      <div className="text-center flex flex-col gap-5">
        <div className="tag w-max m-auto p-1 px-3 text-gray-500 text-sm">
          USER REVIEWS
        </div>
        <h1 className="text-5xl">Hear from Our Users</h1>
        <p className="text-lg text-gray-500">
          See what other server owners are saying about Cerium
        </p>
      </div>
      <div className="w-max m-auto mt-5">
        We do not have any review yet :(
      </div>
    </section>
  );
};

export default Reviews;
