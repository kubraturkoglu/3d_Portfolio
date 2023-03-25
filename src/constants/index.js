import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Embedded Systems Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C#",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Asp.net",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: mongodb,
    },
    {
      name: "MSSQL",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Restfull",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: " IT Department Part Time Worker",
      company_name: "Bursa Technical University",
      icon: starbucks,
      iconBg: "#0499ad",
      date: "February 2021 - July 2021",
      points: [
        "I worked there on computer hardware",
        "Dealing with problems as a team  ",
        
      ],
    },
    {
      title: "R&D Technology Development Long Term Internship",
      company_name: "Borusan-Borçelik",
      icon: tesla,
      iconBg: "#ffffff",
      date: "October 2021 - February 2022 ",
      points: [
        "Finding solutions for the needs of different departments and developing projects",
        "C# Windows  Form Application",
        "Sample Projects using API with .Net Core  ",
        "Working with big Folders",
  
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Network Economics",
      icon: shopify,
      iconBg: "#ffffff",
      date: "September 2022 - Still ",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've never met a web developer who truly cares about  our product.",
      name: "Ayşegül Şahin",
      designation: "Backend Developer",
      company: "Borçelik",
      image: "https://avatars.githubusercontent.com/u/32764889?v=4",
    },
   
  ];
  
  const projects = [
    {
      name: "Dall-e",
      description:
        "A Full Stack MERN AI Image Generation App MidJourney & DALL E Clone. Used Tailwind, OpenAI's DALL-E model and Cloudinary ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/kubraturkoglu/dall-e",
    },
    {
      name: "UAV Ground Station",
      description:
        "It is designed to provide control of unmanned aerial vehicles. It is a Desktop Application coded in C#.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        // {
        //   name: "pi",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: jobit,
      source_code_link: "https://github.com/kubraturkoglu/IHA-Yer-Istasyonu",
    },
    {
      name: "Book Store Api",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "fluentvalidation",
          color: "green-text-gradient",
        },
        // {
        //   name: "",
        //   color: "pink-text-gradient",
        // },
      ],
      image: tripguide,
      source_code_link: "https://github.com/kubraturkoglu/.NetCore_BookStoreApi",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };