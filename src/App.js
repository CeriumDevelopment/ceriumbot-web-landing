import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

import "./Styles/Public.css";

const App = () => {
  return (
    <div className="app pt-5 flex flex-col gap-5">
      <BrowserRouter>
        <Navigation />
        <div className="!px-5 md:!px-[10vw]">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
