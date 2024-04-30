'use client';

import NavbarBack from "@/components/navigation/NavbarBack";
import ProjectThumbnail from "@/components/display/ProjectThumbnail";
import ProjectTitle from "@/components/display/ProjectTitle";
import ProjectContent from "@/components/display/ProjectContent";
import ProjectDetails from "@/components/display/ProjectDetails";
import Footer from "@/components/navigation/Footer";

function page() {
  const projectData = {
    thumbnail: {
      projectThumbnail: 'impact-page-thumbnail.webp',
      projectThumbnailAlt: 'Open Ganteng thumbnail'
    },
    heading: {
      title: 'Open Ganteng Graphics Editor',
      subtitle: 'Web based graphic editor software'
    },
    content: [
      'One of the most exciting project I have ever taken in university so far must be Open Ganteng Graphics Editor. It is a project given to us by taking Computer Graphics course. The mission of the project was to make a 2D CAD-like application utilizing WebGL. We decided to make a web based graphics editor, taking a lot of inspiration from Figma.',
      'We learned a lot about graphics by exploring and developing the app, as it is a new territory for us. We had to learn shaders, rendering pipelines, and matrix operations before we even start the project. After we understood the basic of WebGL, the project turns out to be a lot of fun. We kept exploring and experimenting on utilizing WebGL to make the app as intuitive as possible.',
    ],
    code: 'https://github.com/ditramadia/opengntg-graphic-editor',
    site: 'https://opengntg-graphic-editor.vercel.app',
    details: {
      timeline: 'Mar - Apr 2024',
      team: [
        'Ditra Amadia',
        'Bernardus Willson',
        'Fahrian Afdholi',
      ],
      tools: [
        'HTML',
        'CSS',
        'JavaScript',
        'WebGL',
      ],
      roles: [
        'Project Manager',
        'UI/UX Designer',
        'Front-End Developer',
      ]
    },
  }

  return (
    <>
      <div className="hidden md:block">
        <NavbarBack url="/" />
      </div>

      <main>

        <ProjectThumbnail 
          image={projectData.thumbnail.projectThumbnail} 
          alt={projectData.thumbnail.projectThumbnailAlt} 
        />

        <div className="max-w-[1000px] w-11/12 mb-24 mx-auto">
          
          <ProjectTitle 
            title={projectData.heading.title} 
            subtitle={projectData.heading.subtitle} 
          />
          
          <div className="w-full h-[1px] bg-outline mb-7" />

          <ProjectContent 
            content={projectData.content}
            code={projectData.code}
            site={projectData.site}
          />
          
          <div className="w-full h-[1px] bg-outline mb-7" />

          <ProjectDetails 
            timeline={projectData.details.timeline}
            team={projectData.details.team}
            tools={projectData.details.tools}
            roles={projectData.details.roles}
          />

        </div>

      </main>

      <Footer />
    </>
  );
};

export default page;