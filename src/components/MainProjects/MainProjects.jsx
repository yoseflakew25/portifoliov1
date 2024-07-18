import React from 'react';
import Projects from './Projects';
import Projects2 from './Projects2';
import hoobank from '../../assets/projects/agency.png';
import homefinder from '../../assets/projects/homefinder.png';
import creativa from '../../assets/projects/creativa.png';
import airbnb from '../../assets/projects/airbnb.png';
import tshirt from '../../assets/projects/gif.gif';
import notion from '../../assets/projects/notion.png';
import google from '../../assets/projects/google.png';
import phtotogram from '../../assets/projects/photogram.png';
import sumz from '../../assets/projects/ai article.gif';


const MainProjects = () => {
  const projects = [
    {
      projectUrlLink: "https://homefinder-awrp.onrender.com/",
      projectGithubRepo: "https://github.com/yoseflakew25/HomeFinder",
      projectImage: homefinder,
      projectTitle: "HomeFinder",
      projectDescription: "HomeFinder is a comprehensive website that allows you to list and find a variety of homes for rent and purchase. This project provides a seamless and user-friendly experience for both homebuyers and property owners.",
      projectTechStack: ["React", "Node.js", "Express","MongoDB",'Tailwind css'],
      odd: true,
    },
    {
      projectUrlLink: "https://creativa-eight.vercel.app/",
      projectGithubRepo: "https://github.com/yoseflakew25/Creativa",
      projectImage: creativa,
      projectTitle: "Creativa",
      projectDescription: "Creativa is a vibrant online community where designers, illustrators, artists, and creative professionals come together to showcase their exceptional work. It serves as a platform for browsing through a diverse collection of captivating design projects, ranging from stunning illustrations to cutting-edge user interfaces.",
      projectTechStack: ["React", "Typescript", "Appwrite","react-query","react-hooks" ,"Tailwind css"],
      odd: false,
    },
    {
      projectUrlLink: "#",
      projectGithubRepo: "https://github.com/yoseflakew25/airbnb-clone",
      projectImage: airbnb,
      projectTitle: "Full Stack Airbnb Clone",
      projectDescription: "This web application, inspired by Airbnb, features user authentication, property listings, reservations, user profiles, and a responsive design. It integrates MongoDB for data storage and uses Next.js for server-side rendering, demonstrating modern web development practices.",
      projectTechStack: ["Next.js 13", "React.js", "Tailwind CSS", "MongoDB", "Prisma ORM", "NextAuth.js"],
      odd: true,
    },
    {
      projectUrlLink: "https://hoobank-cyan.vercel.app/",
      projectGithubRepo: "https://github.com/yoseflakew25/hoobank",
      projectImage: hoobank,
      projectTitle: "HooBank - Modern UI/UX landing page",
      projectDescription: "Hoobank is a cutting-edge UI/UX landing page specifically designed for a digital payment platform. It leverages the power of React.js for dynamic and efficient front-end development, while Tailwind CSS ensures a sleek, responsive, and modern design. This combination provides an optimal user experience and seamless interaction for users exploring the platform's features and services.",
      projectTechStack: ["React", "Tailwind CSS"],
      odd: false,
    },
    {
      projectUrlLink: "https://myshirt.awadh-alrae.com/",
      projectGithubRepo: "https://github.com/yoseflakew25/3d-tshirt-customizer",
      projectImage: tshirt,
      projectTitle: "3d Tshirt Customizer",
      projectDescription: "This 3d Tshirt Customizer web app is an immersive and interactive application that allows users to create personalized shirts and caps by selecting various parameters such as color, pattern, and adding custom images. Built on the React framework, the web app utilizes Tailwind CSS for responsive styling and Three.js for advanced 3D capabilities.",
      projectTechStack: ["React", "Tailwind CSS","three.js"],
      odd: true,
    },
    {
      projectUrlLink: "https://notion-clone-yosef-coder.vercel.app/",
      projectGithubRepo: "https://github.com/yoseflakew25/notion-clone",
      projectImage: notion,
      projectTitle: "Fullstack Notion Clone",
      projectDescription: "This project is a clone of the note-taking app Notion, built with Next.js and TypeScript. Key features include a real-time database, a Notion-style editor, light and dark modes, infinite nested documents, a trash can with soft delete, authentication, file upload, deletion, and replacement, real-time document icons, an expandable and collapsible sidebar, full mobile responsiveness, web publishing, a landing page, document cover images, and file recovery.",
      projectTechStack: ["React", "Tailwind CSS","typescript","nextjs","clerk","nextauth","convex"],
      odd: false,
    },
    {
      projectUrlLink: "https://google-clone-v2-psi.vercel.app/",
      projectGithubRepo: "https://github.com/yoseflakew25/google-clone-v2",
      projectImage: google,
      projectTitle: "Google Search Engine Clone",
      projectDescription: "The Google Search Engine Clone is a web application that mimics Google's search functionality and design, offering users a familiar interface for web searches. Key features include a search bar, search results with titles, descriptions, and URLs, pagination, Google search buttons, the iconic Google logo, and a responsive design for seamless use on desktops, tablets, and mobile phones.",
      projectTechStack: ["React", "Tailwind CSS","nextjs","search-api"],
      odd: true,
    },
    {
      projectUrlLink: "https://benevolent-lamington-0ec7dd.netlify.app/",
      projectGithubRepo: "https://github.com/yoseflakew25/AI-article-summarizer",
      projectImage: sumz,
      projectTitle: "Summize - AI Article Summarizer",
      projectDescription: "Summize is an open-source article summarizer that utilizes Natural Language Processing (NLP) techniques to generate a summary of a given article. The tool simplifies your reading by transforming lengthy articles into clear and concise summaries. Summize is built using the OpenAI GPT-4 language model, which is trained on a large corpus of diverse texts and is capable of generating high-quality summaries.",
      projectTechStack: ["React", "CSS","gpt-4",],
      odd: false,
    },
    {
      projectUrlLink: "https://ai-article-summarizer-c917a2.netlify.app/",
      projectGithubRepo: "https://github.com/yoseflakew25/Photogram-app",
      projectImage: phtotogram,
      projectTitle: "Photogram",
      projectDescription: "A photo gallery app using the Pixabay API with home, category, tag, and single photo pages. It features infinite scroll, a masonry layout, filters by image type, orientation, color, and safe search, image search, album listings, dark/light/auto mode switch, and a responsive design.",
      projectTechStack: [
        "sass",
        "vue",
        "vuex",
        "scss",
        "vue-router",
        "pixabay-api",
        "masonry-layout-wall"
      ],
      odd: true,
    },
   
  ];

  return (
    <div className='mt-32' id='projects'>
      <h2 className='section__title underline underline-offset-8 mb-16'><span className='rollno'>04. Projects</span></h2>
      <div className='flex flex-col gap-8 pr-4 pl-16 md:pl-32 md:pr-8 lg:pl-64 lg:pr-16'>
        {projects.map((project) => {
          return project.odd ? <Projects key={project.projectTitle} project={project} /> : <Projects2 key={project.projectTitle} project={project} />;
        })}
      </div>
    </div>
  );
};

export default MainProjects;
