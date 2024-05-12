"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import Navbar from "@/components/navigation/Navbar";
import WorkHero from "@/components/section/WorkHero";
import ProjectSection from "@/components/section/ProjectSection";
import GithubReferrer from "@/components/section/GithubReferrer";
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
      <Navbar active="work"/>
      <main>
        <WorkHero />
        <ProjectSection />
        <GithubReferrer />
      </main>
      <div className="-mt-16">
        <Footer />
      </div>
    </>
  );
};
