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
      projectThumbnailAlt: 'Bondoman thumbnail'
    },
    heading: {
      title: 'BondoMan Wallet App',
      subtitle: 'Wallet mobile app that helps users track their income and expenses'
    },
    content: [
      'While taking Platform-Based Application Development course, we learned to make an android app using kotlin. The project was to make a wallet app that tracks user income and expenses. It can also scan payment bills using a dummy OCR and generate transactions automatically. We also provided statistics view for the user to view their transactions overview.',
      'I worked on the design using Figma to create a modern and minimalistic design. I also worked on front-end development, mainly on layouts, implementing the design into a mobile app.'
    ],
    code: 'https://github.com/ditramadia/bondoman-app',
    site: '',
    details: {
      timeline: 'Mar - Apr 2024',
      team: [
        'Ditra Amadia',
        'Bernardus Willson',
        'Fahrian Afdholi',
        'Surya Azror'
      ],
      tools: [
        'Jira',
        'Figma',
        'Kotlin',
      ],
      roles: [
        'UI/UX Designer',
        'Front-End Mobile Developer',
      ]
    },
    overview: {
      title: 'Overview',
      subtitle: '...',
      image: {
        url: 'toco-overview.webp',
        alt: 'BondoMan overview'
      }
    },
    highlights: [
      {
        title: 'Track your income and expenses',
        subtitle: '...',
        images: [
          {
            url: 'toco-section1-1.webp',
            alt: 'Bondoman home page'
          },
          {
            url: 'toco-section1-2.webp',
            alt: 'Bondoman create new transaction'
          },
        ]
      },
      {
        title: 'Scan you payment bills',
        subtitle: '...',
        images: [
          {
            url: 'toco-section2-1.webp',
            alt: 'Bondoman scan payment bills'
          },
          {
            url: 'toco-section2-2.webp',
            alt: 'Bondoman scan result'
          },
        ]
      },
      {
        title: 'See the statistic of your transactions',
        subtitle: '...',
        images: [
          {
            url: 'toco-section3-1.webp',
            alt: 'Bondoman statistic page'
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