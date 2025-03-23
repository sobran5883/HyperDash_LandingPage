import React, { useRef, useEffect } from "react";
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services";
import LexoZ from "../components/LexoZ/LexoZ";
import DemoVideo from "../components/DemoVideo/DemoVideo";
import OurStories from "../components/OurStories/OurStories";
import AirX from "../components/AirX/AirX";

const App = () => {
  const lexoZRef = useRef(null);
  const airXRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.detail === "lexoz") {
        lexoZRef.current?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.detail === "airx") {
        airXRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("scrollToSection", handleScroll);
    return () => window.removeEventListener("scrollToSection", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <DemoVideo />
      <div ref={lexoZRef}>
        <LexoZ />
      </div>
      <div ref={airXRef}>
        <AirX />
      </div>
      <Services />
      <OurStories />
    </main>
  );
};

export default App;
