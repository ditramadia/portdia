"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import literacyPower from "@/data/literacyPower";
import impactBrief from "@/data/impactBrief";

import NavbarBack from "@/components/navigation/NavbarBack";
import ProjectHero from "@/components/section/ProjectHero";
import Footer from "@/components/navigation/Footer";
import ProjectDetails from "@/components/section/ProjectDetails";
import ProjectHighlights from "@/components/section/ProjectHighlights";
import NextProject from "@/components/section/NextProject";

export default function page() {
  const nextProject = impactBrief;

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
          name={literacyPower.name}
          company={literacyPower.company}
          releaseDate={literacyPower.releaseDate}
          image={literacyPower.thumbnail}
          imageAlt="Literacy Power thumbnail"
        />
        <ProjectDetails 
          timeline={literacyPower.timeline}
          summary={literacyPower.summary}
          description={literacyPower.description}
          overview={literacyPower.overview}
          code={literacyPower.code}
          site={literacyPower.site}
          team={literacyPower.team}
          tools={literacyPower.tools}
          roles={literacyPower.roles}
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
