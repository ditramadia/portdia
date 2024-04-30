'use client';

import NavbarBack from "@/components/navigation/NavbarBack";
import ProjectThumbnail from "@/components/display/ProjectThumbnail";
import ProjectTitle from "@/components/display/ProjectTitle";
import ProjectContent from "@/components/display/ProjectContent";
import ProjectDetails from "@/components/display/ProjectDetails";
import ProjectOverview from "@/components/display/ProjectOverview";
import ProjectHighlights from "@/components/display/ProjectHighlights";
import Footer from "@/components/navigation/Footer";

function page() {
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
    },
    overview: {
      title: 'Overview',
      subtitle: 'Your Path to Multilingual Excellence',
      image: {
        url: 'toco-overview.webp',
        alt: 'Toco overview'
      }
    },
    highlights: [
      {
        title: 'Learn from videos and exercises',
        subtitle: 'Select a module and watch its videos to improve your language fluency. Videos are categorized by modules. At the end of each module, there is an exercise to test your understanding of the module.',
        images: [
          {
            url: 'toco-section1-1.webp',
            alt: 'Toco watch video'
          },
          {
            url: 'toco-section1-2.webp',
            alt: 'Toco exercise'
          },
        ]
      },
      {
        title: 'Earn points and get awesome merchs',
        subtitle: 'Points are earned by finishing a module or redeeming a voucher code. These points are then used buy merchandises available in our shop.',
        images: [
          {
            url: 'toco-section2-1.webp',
            alt: 'Toco merchandise shop'
          },
          {
            url: 'toco-section2-2.webp',
            alt: 'Toco transaction history'
          },
        ]
      },
      {
        title: 'Manage content as admin',
        subtitle: 'As an admin, you can manage available languages, modules, videos, exercises, merchandise, voucher code, and users',
        images: [
          {
            url: 'toco-section3-1.webp',
            alt: 'Toco Admin content management system'
          },
        ]
      },
    ]
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

        <div className="max-w-[1000px] w-11/12 mb-80 mx-auto">
          
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

        <div className="w-full h-fit flex flex-col items-center">

          <ProjectOverview 
            title={projectData.overview.title}
            subtitle={projectData.overview.subtitle}
            image={projectData.overview.image}
          />

          {
            projectData.highlights.map((highlight) => (
              <ProjectHighlights 
                title={highlight.title}
                subtitle={highlight.subtitle}
                images={highlight.images}
              />
            ))
          }

        </div>

      </main>

      <Footer />
    </>
  );
};

export default page;