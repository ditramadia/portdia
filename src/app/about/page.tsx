"use client";

import Navbar from "@/components/navigation/Navbar";
import AboutHero from "@/components/section/AboutHero";
import ProductSection from "@/components/section/ProductSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import LinkedInReferrer from "@/components/section/LinkedInReferrer";
import Footer from "@/components/navigation/Footer";

export default function About() {
  return (
    <>
      <Navbar active="about"/>
      
      <main>
        <AboutHero />
        <ProductSection />
        <ExperienceSection />
        <LinkedInReferrer />
      </main>

      <div className="-mt-16">
        <Footer />
      </div>
    </>
  );
};
