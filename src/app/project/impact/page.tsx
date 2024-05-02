"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import impact from "@/data/impact";
import bondomanBrief from "@/data/bondomanBrief";

import NavbarBack from "@/components/navigation/NavbarBack";
import ProjectHero from "@/components/section/ProjectHero";
import Footer from "@/components/navigation/Footer";
import ProjectDetails from "@/components/section/ProjectDetails";
import ProjectHighlights from "@/components/section/ProjectHighlights";
import NextProject from "@/components/section/NextProject";

export default function page() {
  const nextProject = bondomanBrief;

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
          name={impact.name}
          company={impact.company}
          releaseDate={impact.releaseDate}
          image={impact.thumbnail}
          imageAlt="Toco thumbnail"
        />
        <ProjectDetails 
          timeline={impact.timeline}
          summary={impact.summary}
          description={impact.description}
          overview={impact.overview}
          code={impact.code}
          site={impact.site}
          team={impact.team}
          tools={impact.tools}
          roles={impact.roles}
        />
        <NextProject 
          name={nextProject.name}
          company={nextProject.company}
          releaseDate={nextProject.releaseDate}
          type={nextProject.type}
          summary={nextProject.summary}
          url={nextProject.url}
          thumbnail={nextProject.thumbnail}
        />
      </main>
      <div className="-mt-16">
        <Footer />
      </div>
    </>
  );
};
