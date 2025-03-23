import React from "react";
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services";
import LexoZ from "../components/LexoZ/LexoZ";
import AirX from "../components/AirX/AirX";
import OurStories from "../components/OurStories/OurStories";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <AirX />
      <LexoZ/>
      <Services />
      <OurStories />
    </main>
  );
};

export default App;