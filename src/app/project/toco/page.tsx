"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import NavbarBack from "@/components/navigation/NavbarBack";

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
      </main>
      <div className="-mt-16">
        <Footer />
      </div>
    </>
  );
};
