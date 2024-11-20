import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import config from "../config.json";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_CONTACT_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY,
  } = config;
  const form = useRef();

  const resetAllStates = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Message sent successfully! We'll get back to you shortly.");
        },
        (e) => {
          alert("Message sent failed!", e.message);
        }
      );

    resetAllStates();
  };

  return (
    <section className="my-20 flex flex-col gap-10">
      <div className="bg-header h-screen absolute top-0 left-0 right-0 -z-10"></div>
      <div className="text-center flex flex-col gap-10">
        <h1 className="text-5xl sm:text-7xl">Get in Touch with Us</h1>
        <p className="text-lg text-gray-500 w-[70vw] md:w-[50vw] m-auto">
          We’re here to help! Reach out with any questions, feedback, or support
          requests, and we’ll get back to you as soon as possible.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="tag p-5 flex flex-col gap-5 w-full md:w-max md:min-w-[450px] m-auto border border-blue-950"
      >
        <div className="flex flex-col items-start flex-1 gap-1">
          <label htmlFor="fname" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Name"
            className="bg-gray-800 rounded-xl w-full py-3 px-5"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="bg-gray-800 rounded-xl w-full py-3 px-5"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start gap-1 h-full">
          <label htmlFor="email" className="font-semibold">
            Message
          </label>
          <textarea
            type="message"
            id="message"
            name="message"
            placeholder="Message"
            className="bg-gray-800 rounded-xl w-full py-3 px-5 h-full"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <label className="flex flex-row items-center gap-2 container">
          <input type="checkbox" name="terms" required />
          <span class="checkmark"></span>
          <label className="text-gray-500">
            I agree to our friendly{" "}
            <a href="/privacy-policy" target="_blank" className="text-white">
              privacy policy
            </a>
          </label>
        </label>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
