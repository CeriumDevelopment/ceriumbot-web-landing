import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

import DiscordLogin from "./Auth/DiscordRedirect";

import AuthCallback from "./Auth/OAuthCallback";

import './Styles/Public.css';


const App = () => {
  return (
    <div className="app px-5 md:px-[10vw] !py-5 flex flex-col gap-5">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/redirect/discord" element={<DiscordLogin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
