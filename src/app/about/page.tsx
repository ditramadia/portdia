"use client";

import Navbar from "@/components/navigation/Navbar";
import AboutHero from "@/components/section/AboutHero";
import Footer from "@/components/navigation/Footer";

export default function About() {
  return (
    <>
      <Navbar active="about"/>
      
      <main>
        <AboutHero />
      </main>

      <div className="">
        <Footer />
      </div>
    </>
  );
};
