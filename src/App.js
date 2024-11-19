import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

import "./Styles/Public.css";

const App = () => {
  return (
    <div className="app px-5 md:px-[10vw] !py-5 flex flex-col gap-5">
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
