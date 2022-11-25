import React from "react";
import BgHome from "../components/body/BgHome";
import About from "../components/body/About";
import Services from "../components/body/Services";
import TechnologyUse from "../components/body/TechnologyUse";
import Team from "../components/body/Team";
import Portfolio from "../components/body/Portfolio";
import Testimonials from "../components/body/Testimonials";
import Contact from "../components/body/ContactUs";
const Body = () => {
  return (
    <main>
      <BgHome />
      <About />
      <Services />
      <TechnologyUse />
      <Team />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Body;
