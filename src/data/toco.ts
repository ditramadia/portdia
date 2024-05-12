const toco = {
  name: "Toco",
  company: "University project",
  type: "webapp",
  timeline: "Oct - Nov 2023",
  releaseDate: "November 2023",
  url: "/project/toco",
  thumbnail: "toco/toco-glass-browser.png",

  summary: "Toco Language Learning App",
  description: "Language learning platform with four microservices",
  overview: [
    "While taking web based application development course, we had an opportunity to create a multi-service web app. The mission was to make a web app that has a client-side application, admin application, and a secured transaction system. We decided to create a language learning app where users can choose a variety of languages and then work through a series of video lessons and exercises to improve their vocabulary, phrases, grammar, and pronunciation. Users can track their progress over time. Admins are able to create courses, upload new video, create exercises, manage merchandise, and voucher codes. The transaction system uses gems as the currency and they are used to buy merchandises. We use a soap service to secure the transactions and communication between services.",
  ],
  code: "https://github.com/ditramadia/toco",
  site: "",
  team: [
    'Ditra Amadia',
    'Bernardus Willson',
    'Raditya Abiyu',
  ],
  tools: [
    'Figma',
    'PHP',
    'React.js',
    'Tailwind CSS',
    'Express.js',
    'Java SOAP',
    'MySQL',
    'PostgreSQL',
  ],
  roles: [
    'Project Manager',
    'UI/UX Designer',
    'Front-End Developer',
    'Back-End Developer',
  ],

  highlights: {
    description: "A web based language learning app with video lessons and exercises. Transaction system that motivates user to improve their language skills",
    images: [
     'toco/toco-login-dark-browser.png',
     'toco/toco-learn-dark-browser.png',
     'toco/toco-module-dark-browser.png',
     'toco/toco-video-dark-browser.png',
     'toco/toco-exercise-dark-browser.png',
     'toco/toco-merchandise-dark-browser.png',
     'toco/toco-transactions-dark-browser.png',
     'toco/toco-admin-dark-browser.png',
     'toco/toco-admin-2-dark-browser.png',
   ]
  }
};

export default toco;