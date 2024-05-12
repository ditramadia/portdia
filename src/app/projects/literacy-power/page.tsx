'use client';

import NavbarBack from "@/components/organism/NavbarBack"
import ProjectThumbnail from "@/components/organism/ProjectThumbnail";
import ProjectTitle from "@/components/organism/ProjectTitle";
import ProjectContent from "@/components/organism/ProjectContent";
import ProjectDetails from "@/components/organism/ProjectDetails";
import Footer from "@/components/organism/Footer";

function page() {
  const projectData = {
    thumbnail: {
      projectThumbnail: 'lpi-page-thumbnail.webp',
      projectThumbnailAlt: 'Literacy Power thumbnail'
    },
    heading: {
      title: 'Literacy Power Indonesia',
      subtitle: 'Official website of Literacy Power Indonesia'
    },
    content: [
      'I interned at Literacy Power Indonesia as a UI/UX designer and front-end developer. I designed the interface and designed it as friendly, engaging, and intuitive as possible. As a front-end developer, I implemented the design and took into account the accessibility cooperating animations and transitions to make it fluid and even more engaging.',
    ],
    code: '',
    site: 'http://www.literacypowerid.com/',
    details: {
      timeline: 'May 2022 - Sep 2023',
      team: [
        'Literacy Power Indonesia web development team',
      ],
      tools: [
        'ClickUp',
        'Figma',
        'Next.js',
        'Tailwind CSS',
      ],
      roles: [
        'UI/UX Designer',
        'Front-End Developer',
      ]
    },
  };

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
  )
}

export default page;