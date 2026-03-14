import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reputation from "./components/Reputation";
import Stats from "./components/Stats";
import Cooperations from "./components/Cooperations";
import Offer from "./components/Offer";
import Registration from "./components/Registration";
import Articles from "./components/Articles";

import "./app.css";

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Offer />
        <Registration />
        <About />
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

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artykuly" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
