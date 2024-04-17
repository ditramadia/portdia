'use client';

import NavbarBack from "@/components/organism/NavbarBack";
import ProjectThumbnail from "@/components/organism/ProjectThumbnail";
import ProjectTitle from "@/components/organism/ProjectTitle";
import ProjectContent from "@/components/organism/ProjectContent";
import ProjectDetails from "@/components/organism/ProjectDetails";

function Toco() {
  const projectData = {
    thumbnail: {
      projectThumbnail: 'toco-page-thumbnail.webp',
      projectThumbnailAlt: 'Toco thumbnail'
    },
    heading: {
      title: 'Toco Language Learning App',
      subtitle: 'Language learning platform with four micro-services'
    },
    content: [
      'While taking web based application development course, we had an opportunity to create a multi-service web app. The mission was to make a web app that has a client-side application, admin application, and a secured transaction system.',
      'We decided to create a language learning app where users can choose a variety of languages and then work through a series of video lessons and exercises to improve their vocabulary, phrases, grammar, and pronunciation. Users can track their progress over time. Admins are able to create courses, upload new video, create exercises, manage merchandise, and voucher codes. The transaction system uses gems as the currency and they are used to buy merchandises. We use a soap service to secure the transactions and communication between services.'
    ],
    code: 'https://github.com/ditramadia/toco',
    site: '',
    details: {
      timeline: 'Oct - Nov 2023',
      team: [
        'Ditra Amadia',
        'Bernardus Willson',
        'Raditya Abiyu'
      ],
      tools: [
        'Figma',
        'Docker',
        'PHP',
        'React.js',
        'Tailwind CSS',
        'Express.js',
        'Prisma',
        'Java',
        'MySQL',
        'PostgreSQL',
      ],
      roles: [
        'Project Manager',
        'UI/UX Designer',
        'Front-End Developer',
        'Back-End Developer',
      ]
    }
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

        <div className="max-w-[1000px] w-11/12 mb-14 mx-auto">
          
          <ProjectTitle 
            title={projectData.heading.title} 
            subtitle={projectData.heading.subtitle} 
          />
          
          <div className="w-full h-[1px] bg-outline mb-7" />

          <ProjectContent 
            content={projectData.content}
            code={projectData.code}
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
    </>
  );
};

export default Toco;