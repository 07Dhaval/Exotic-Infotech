import React from "react";
import Hero from "../components/Homepage/Hero";
// import Services from "../components/Homepage/ServiceSection";
import Counter from "../components/Homepage/CounterSection";
import ApproachSection from "../components/Homepage/ApproachSection";
import Leader from "../components/Homepage/OurLeaders";
import IndustriesSection from "../components/Homepage/IndustriesSection";
import TechnologiesSection from "../components/Technologies/TechnologiesSection";
import ContactSection from "../components/Letsconnect/ContactSection";
import { Contact } from "lucide-react";
import SectionProblem from "../components/Homepage/SectionProblem";
// import SectionWhatWeBuild from "../components/Homepage/SectionWhatWeBuild";
import WhatweBuild from "../components/Homepage/WhatWeBuild";
import ClientLogoSlider from "../components/Homepage/ClientLogoSlider";
import Testimonials from "../components/Homepage/Testimonials";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <SectionProblem />
      {/* <SectionWhatWeBuild /> */}
      <WhatweBuild />
      {/* <Services /> */}
      <Counter />
      <ApproachSection />
      <IndustriesSection />
      <TechnologiesSection />
      <Leader />
      <ClientLogoSlider />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
