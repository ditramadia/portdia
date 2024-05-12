"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

import bondoman from "@/data/bondoman";
import openGantengBrief from "@/data/openGantengBrief";

import NavbarBack from "@/components/navigation/NavbarBack";
import ProjectHero from "@/components/section/ProjectHero";
import Footer from "@/components/navigation/Footer";
import ProjectDetails from "@/components/section/ProjectDetails";
import ProjectHighlights from "@/components/section/ProjectHighlights";
import NextProject from "@/components/section/NextProject";

export default function page() {
  const nextProject = openGantengBrief;

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
          name={bondoman.name}
          company={bondoman.company}
          releaseDate={bondoman.releaseDate}
          image={bondoman.thumbnail}
          imageAlt="Bondoman thumbnail"
        />
        <ProjectDetails 
          timeline={bondoman.timeline}
          summary={bondoman.summary}
          description={bondoman.description}
          overview={bondoman.overview}
          code={bondoman.code}
          site={bondoman.site}
          team={bondoman.team}
          tools={bondoman.tools}
          roles={bondoman.roles}
        />
        <ProjectHighlights 
          description={bondoman.highlights.description}
          images={bondoman.highlights.images}  
          type={bondoman.type}
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
