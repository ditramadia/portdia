'use client';

import SolidButton from "@/components/atom/SolidButton";
import NavbarBack from "@/components/organism/NavbarBack";
import ProjectContent from "@/components/organism/ProjectContent";
import ProjectThumbnail from "@/components/organism/ProjectThumbnail";
import ProjectTitle from "@/components/organism/ProjectTitle";
import Image from "next/image";

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
    site: ''
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

        <div className="max-w-[1000px] w-11/12 mx-auto">
          
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

          <div className="w-full h-fit flex flex-col gap-5">

            <div className="w-full h-fit flex gap-5">
              <span className="w-[150px] mt-[2px] label text-tertiary">TIMELINE</span>
              <div className="w-full flex flex-col gap-2">
                <span className="body text-on-surface">Oct - Nov 2023</span>
              </div>
            </div>

            <div className="w-full h-fit flex gap-5">
              <span className="w-[150px] mt-[2px] label text-tertiary">TEAM</span>
              <div className="w-full flex flex-col gap-2">
                <span className="body text-on-surface">Ditra Amadia</span>
                <span className="body text-on-surface">Bernardus Willson</span>
                <span className="body text-on-surface">Raditya Abiyu</span>
              </div>
            </div>

            <div className="w-full h-fit flex gap-5">
              <span className="w-[150px] mt-[2px] label text-tertiary">TOOLS</span>
              <div className="w-full flex flex-col gap-2">
                <span className="body text-on-surface">Figma</span>
                <span className="body text-on-surface">Docker</span>
                <span className="body text-on-surface">PHP</span>
                <span className="body text-on-surface">React.js</span>
                <span className="body text-on-surface">Tailwind CSS</span>
                <span className="body text-on-surface">Express.js</span>
                <span className="body text-on-surface">Prisma</span>
                <span className="body text-on-surface">Java SOAP</span>
                <span className="body text-on-surface">MySQL</span>
                <span className="body text-on-surface">PostgreSQL</span>
              </div>
            </div>

            <div className="w-full h-fit flex gap-5">
              <span className="w-[150px] mt-[2px] label text-tertiary">MY ROLE</span>
              <div className="w-full flex flex-col gap-2">
                <span className="body text-on-surface">Project Manager</span>
                <span className="body text-on-surface">UI/UX Designer</span>
                <span className="body text-on-surface">Front-End Developer</span>
                <span className="body text-on-surface">Back-End Developer</span>
              </div>
            </div>

          </div>

        </div>

      </main>
    </>
  );
};

export default Toco;