import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reputation from "./components/Reputation";
import Stats from "./components/Stats";
import { Route } from "react-router-dom";

import "./app.css";
import Cooperations from "./components/Cooperations";
import Offer from "./components/Offer";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero id="Hero" />
        <Offer />
        <Registration />
        <About id="About" />
        <Reputation />
        <Stats />
        <Cooperations />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
