"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import toco from "@/data/toco";

import NavbarBack from "@/components/navigation/NavbarBack";
import ProjectHero from "@/components/section/ProjectHero";
import Footer from "@/components/navigation/Footer";
import ProjectDetails from "@/components/section/ProjectDetails";
import ProjectHighlights from "@/components/section/ProjectHighlights";

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
        <ProjectDetails 
          timeline={toco.timeline}
          summary={toco.summary}
          description={toco.description}
          overview={toco.overview}
          code={toco.code}
          site={toco.site}
          team={toco.team}
          tools={toco.tools}
          roles={toco.roles}
        />
        <ProjectHighlights 
          description={toco.highlights.description}
          images={toco.highlights.images}  
        />
      </main>
      <div className="-mt-16">
        <Footer />
      </div>
    </>
  );
};
