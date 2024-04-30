"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import WorkHero from "@/components/section/WorkHero";
import GithubReferrer from "@/components/section/GithubReferrer";

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
        <GithubReferrer />
      </main>
      <div className="-mt-16">
        <Footer />
      </div>
    </>
  );
};
