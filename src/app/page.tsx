import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Process from "./components/Process";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process/>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};
export default page;
