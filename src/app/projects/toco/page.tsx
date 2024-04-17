'use client';

import SolidButton from "@/components/atom/SolidButton";
import NavbarBack from "@/components/organism/NavbarBack";
import ProjectThumbnail from "@/components/organism/ProjectThumbnail";
import Image from "next/image";

function Toco() {
  const projectData = {
    thumbnail: {
      projectThumbnail: 'toco-page-thumbnail.webp',
      projectThumbnailAlt: 'Toco thumbnail'
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

        <div className="max-w-[1000px] w-11/12 mx-auto">
          <h1 className="mb-7 heading-3 text-on-surface text-left leading-tight tracking-wider">Toco Language Learning App</h1>
          <h2 className="mb-14 poppins text-[1.25rem] text-on-surface-variant text-left leading-tight tracking-wider">Language learning platform with four micro-services</h2>
          
          <div className="w-full h-[1px] bg-outline mb-7" />
          
          <p className="mb-7 body text-on-surface leading-relaxed">While taking web based application development course, we had an opportunity to create a multi-service web app. The mission was to make a web app that has a client-side application, admin application, and a secured transaction system.</p>
          <p className="mb-7 body text-on-surface leading-relaxed">We decided to create a language learning app where users can choose a variety of languages and then work through a series of video lessons and exercises to improve their vocabulary, phrases, grammar, and pronunciation. Users can track their progress over time. Admins are able to create courses, upload new video, create exercises, manage merchandise, and voucher codes. The transaction system uses gems as the currency and they are used to buy merchandises. We use a soap service to secure the transactions and communication between services.</p>
          <div className="mb-14 flex gap-4">
            <div className="w-28 h-12">
              <SolidButton text="Code" iconRight="ic-arrow-link.svg" />
            </div>
          </div>
          
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