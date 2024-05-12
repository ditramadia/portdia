"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import openGanteng from "@/data/openGanteng";
import tocoBrief from "@/data/tocoBrief";

import NavbarBack from "@/components/navigation/NavbarBack";
import ProjectHero from "@/components/section/ProjectHero";
import Footer from "@/components/navigation/Footer";
import ProjectDetails from "@/components/section/ProjectDetails";
import ProjectHighlights from "@/components/section/ProjectHighlights";
import NextProject from "@/components/section/NextProject";

export default function page() {
  const nextProject = tocoBrief;

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
          name={openGanteng.name}
          company={openGanteng.company}
          releaseDate={openGanteng.releaseDate}
          image={openGanteng.thumbnail}
          imageAlt="Open Ganteng thumbnail"
        />
        <ProjectDetails 
          timeline={openGanteng.timeline}
          summary={openGanteng.summary}
          description={openGanteng.description}
          overview={openGanteng.overview}
          code={openGanteng.code}
          site={openGanteng.site}
          team={openGanteng.team}
          tools={openGanteng.tools}
          roles={openGanteng.roles}
        />
        <NextProject 
          name={nextProject.name}
          company={nextProject.company}
          releaseDate={nextProject.releaseDate}
          type={nextProject.type}
          summary={nextProject.summary}
          url={nextProject.url}
          thumbnail={nextProject.thumbnail}
          thumbnail2={nextProject.thumbnail2}
        />
      </main>
      <div className="-mt-16">
        <Footer />
      </div>
    </>
  );
};
