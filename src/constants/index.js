import { image } from "framer-motion/client";
import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-5.png";
import project4 from "../assets/projects/Project-3.png";
import project5 from "../assets/projects/Project-6.png";
import project6 from "../assets/projects/Project-4.png";

export const HERO_CONTENT = `I am a Full Stack Developer with 2 years of experience building scalable and performance-focused web applications. I specialize in creating modern, responsive UIs using React and Next.js, and developing robust backend systems with Node.js, Express, and databases like MySQL, PostgreSQL, and MongoDB.
I have experience working on AI-based applications as well as full stack projects including Panaghar, a hotel booking platform, and UI-focused builds inspired by Apple and Nike.I use modern tools such as Docker, Redis, Tailwind CSS, Framer Motion, and GSAP to deliver smooth, production-ready applications.My focus is on building clean, scalable, and user-centric digital experiences while actively exploring AI integration in web development.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2026 - Present",
    role: "Full Stack Developer Intern",
    company: "Aankhijhyal Technologies.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "PostgreSql", "LLM"],
  },
  {
    year: "2025",
    role: "Participant",
    company: "Docker Technical Session (GCES Girls Tech)",
    description: `Participated in a 3-day Docker hands-on technical session focused on containerization, Docker architecture, images, containers, and deployment workflows.`,
    duration: "June 11 - June 13, 2025",
    technologies: ["Docker", "Containerization", "DevOps"],
  },

  {
    year: "2024",
    role: "Participant",
    company: "WordCamp Nepal",
    description: `Attended WordCamp Nepal 2024, a community-driven WordPress conference featuring sessions on web development, design, and open-source contribution. Engaged with developers and designers from across Nepal.`,
    duration: "January 12 - January 13, 2024",
    location: "Pokhara, Nepal",
    technologies: ["WordPress", "Web Development", "Open Source"],
  },
  {
    year: "2024",
    role: "Participant",
    company: ".NET Conf 2024 (GCES IT Club)",
    description: `Attended .NET Conf 2024 organized by GCES IT Club, focusing on modern .NET development, ecosystem updates, and backend engineering practices.`,
    duration: "December 11, 2024",
    technologies: [".NET", "C#", "Backend Development"],
  },
  {
    year: "2023",
    role: "UI/UX Design Trainee",
    company: "Code for Change Program",
    description: `Completed a 1-week UI/UX training program where I learned design fundamentals, wireframing, prototyping, and user-centered design principles. Worked on improving interface design thinking and basic design tools workflow.`,
    duration: "June 16 - June 23, 2023",
    technologies: ["UI/UX Design", "Figma", "Wireframing", "Prototyping"],
  },
];

export const PROJECTS = [
  {
    name: "Agentic AI - Automated Marketing Platform",
    image: project1,
    status: "In Progress",
    description: `An AI-powered marketing platform where users describe their brand and the system generates ready-to-post content for multiple social media platforms. The goal is to automate content creation using intelligent agents and LLM workflows.`,
    techStack: [
      "Tailwind CSS",
      "Agentic AI",
      "LangChain",
      "LLMs",
      "PostgreSQL",
      "Express.js",
      "React",
      "Node.js",
    ],
  },

  {
    name: "Panaghar - Peer to Peer Book Rental Platform",
    image: project2,
    status: "Completed",
    description: `A peer-to-peer online book rental and selling platform that allows users to buy, sell, and rent books without offline hassle. Focused on making book exchange simple, fast, and accessible.`,
    techStack: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
    ],
  },

  {
    name: "Nike Clone - Landing Page",
    image: project3,
    status: "Completed",
    description: `A modern, animated Nike-inspired landing page showcasing sneakers with smooth UI transitions and interactive animations. Focused on premium visual storytelling.`,
    techStack: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
  },

  {
    name: "Apple Clone - Landing Page",
    image: project4,
    status: "Completed",
    description: `A high-end Apple-inspired landing page replicating Apple’s cinematic product presentation style using smooth animations and 3D effects.`,
    techStack: [
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Three.js",
    ],
  },

  {
    name: "Hotel Booking Website",
    image: project5,
    status: "Completed",
    description: `A responsive hotel booking frontend platform allowing users to browse hotels, view details, and simulate booking flows. Focused on clean UI and user experience.`,
    techStack: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
  },

  {
    name: "Weather App - 3D Experience",
    image: project6,
    status: "Completed",
    description: `An interactive weather platform built around a 3D Earth experience, helping users plan their day through real-time conditions, smooth globe navigation, and location-based insights for travel and commuting decisions.`,
    techStack: [
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Three.js",
    ],
  },
];

export const CONTACT = {
  address: "Pokhara, Gandaki-Province, Nepal",
  phoneNo: "+977 9860390766 ",
  email: "achhyut.baral03@gmail.com",
};
