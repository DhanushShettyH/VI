import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Planes from "./components/Planes";
import Prepaidplanes from "./components/Prepaidplanes";
import Mifi from "./components/Mifi";
import ContactUs from "./components/ContactUs";
import Download from "./Download";
import Footer from "./components/Footer";
import Sideheader from "./components/Sideheader";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
        const link = document.querySelectorAll(".links");
        link.forEach((link) => {
          if (activeSection === link.id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
    console.log(activeSection);
    const sections = document.querySelectorAll(".sections");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, [activeSection]);

  return (
    <div className="body relative bg-[#ffffff] text-black h-screen snap-y snap-mandatory overflow-y-auto">
      {/*Header  */}
      <div className=" w-full fixed z-50">
        <Header />
      </div>
      <div className=" fixed z-50 left-[4%] top-[25%]">
        <Sideheader />
      </div>
      <div className=" fixed z-50 left-[5%] bottom-[5%]">
        <img src="./recharge.svg" alt="1" />
      </div>
      <div className=" h-20 w-20 fixed z-50 right-[4%] bottom-[4%]">
        <img src="./vic.svg" alt="1" />
      </div>

      {/* Hero */}
      <section id="hero" className="z-50 sections mb-[800px]  snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className=" z-40 mb-[800px] sections snap-center">
        <About />
      </section>

      <section id="planes" className=" sections mb-[800px] snap-center">
        <Planes />
      </section>
      <section id="preplanes" className=" z-30 mb-[800px] sections snap-center">
        <Prepaidplanes />
      </section>

      <section id="mifi" className=" sections mb-[800px] snap-center">
        <Mifi />
      </section>

      <section id="contactus" className=" z-20 mb-[800px] sections snap-center">
        <ContactUs />
      </section>

      <section id="download" className=" z-10 mb-[800px] sections snap-center">
        <Download />
      </section>

      <section id="footer" className="  snap-end">
        <Footer />
      </section>
    </div>
  );
}

export default App;
