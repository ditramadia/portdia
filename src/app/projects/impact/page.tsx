'use client';

import NavbarBack from "@/components/organism/NavbarBack";
import ProjectThumbnail from "@/components/organism/ProjectThumbnail";
import ProjectTitle from "@/components/organism/ProjectTitle";
import ProjectContent from "@/components/organism/ProjectContent";
import ProjectDetails from "@/components/organism/ProjectDetails";
import Footer from "@/components/organism/Footer";

function page() {
  const projectData = {
    thumbnail: {
      projectThumbnail: 'impact-page-thumbnail.webp',
      projectThumbnailAlt: 'Impact thumbnail'
    },
    heading: {
      title: 'Impact Metanoia',
      subtitle: 'Website for IMPACT Metanoia, A national competition event for highschoolers'
    },
    content: [
      'Over summer of 2022, I volunteered as head of website development for IMPACT Metanoia. I worked with six other developers, pitching ideas regularly to the supervisor, Alisha Alistya.',
      'Some things I learned from this project were to manage software project development cycle with extra details and lots of planning. Assigning tasks should be carefully planned out to maximize the use of agile methodologies, creating a parallel working environment, thus speeding up the process. Communication is also a great factor, I learned to be understanding and motivating, so the work can be done more efficiently.',
      'The nature of the work is confidential, so I cannot share any details.',
    ],
    code: '',
    site: '',
    details: {
      timeline: 'Mar - Jun 2022',
      team: [
        'Impact website team',
      ],
      tools: [
        'ClickUp',
        'Figma',
        'Next.js',
        'Tailwind CSS',
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