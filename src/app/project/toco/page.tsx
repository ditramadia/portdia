"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import toco from "@/data/toco";

import NavbarBack from "@/components/navigation/NavbarBack";
import ProjectHero from "@/components/section/ProjectHero";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <NavbarBack backDestination="/" />
      <main>
        <ProjectHero 
          name={toco.name}
          company={toco.company}
          releaseDate={toco.releaseDate}
          image={toco.thumbnail}
          imageAlt="Toco thumbnail"
        />
      </main>
      {/* 
        <div className="-mt-16">
          <Footer />
        </div>
      */}
    </>
  );
};
