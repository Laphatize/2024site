"use client"
import Image from "next/image";
import AnimatedCard from "@/components/AnimatedCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const experiences = [
  {
    title: "Incoming Software Engineer Intern",
    company: "JPMorganChase",
    date: "Summer 2025",
    description: "Incoming Software Engineer Intern at JPMorgan Chase.",
    image: "/jpmorganchase_logo.jpeg",
    links: {
      company: "https://www.jpmorganchase.com"
    }
  },
  {
    title: "Founder, Software Engineer",
    company: "CTFGuide Corporation",
    date: "Dec 2022 - Present",
    description: "Raised funds from investors like Bullmont Capital and Penn State University. Designed and implemented the frontend using Figma, TailwindCSS, Next.js, and React.js, and developed the backend with Node.",
    image: "/ctfguide.png",
    links: {
      company: "https://ctfguide.com",
      github: "https://github.com/ctfguide-tech"
    }
  },
  {
    title: "Software Engineering & TPM Intern",
    company: "Snyder Technologies",
    date: "May 2024 - Aug 2024",
    description: "Designed and implemented a new UI/UX for the company website using Figma, Angular, and HTML. Worked on various projects across domains such as cybersecurity, government, and entertainment.",
    image: "/snyder.png",
    links: {
      company: "https://snyder.tech"
    }
  },
  {
    title: "Software Engineer",
    company: "Knowt Inc",
    date: "May 2023 - Aug 2023",
    description: "Developed profile customization features using React.js, HTML, and CSS. Refactored UI components for enhanced user profile functionality.",
    image: "/knowt.png",
    links: {
      company: "https://knowt.com"
    }
  },
  {
    title: "Software Engineering Intern",
    company: "The Pennsylvania State University",
    date: "Aug 2022 - Dec 2022",
    description: "Conceptualized and executed a comprehensive inventory management system using the MERN stack, resulting in a 52% increase in operational efficiency and improved resource tracking accuracy.",
    image: "/psu.png",
    links: {
      company: "https://psu.edu",
      figma: "https://www.figma.com/design/fBmasoYMswElMfG5VAkjXH/Brandywine-Launchbox?node-id=0-1&t=KfxI0864arw7S2CW-1",
      site: "https://brandywine-launchbox.vercel.app/"
    }
  }
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] max-w-screen-lg mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full text-white p-4">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold"></div>
          <div className="flex gap-4">
            <a className="text-white hover:underline" href="/">Home</a>
            <a className="text-white hover:underline" href="/work-experience">Work Experience</a>
            <a className="text-white hover:underline" href="/projects">Projects</a>
          </div>
        </div>
      </nav>

      <main className="flex sm:flex-col-2 flex-col-1 gap-8 row-start-2 items-center sm:items-start">       
        <div className="flex flex-col">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-6"
            >
              💼 Work Experience
            </motion.h1>

            {experiences.map((experience, index) => (
              <AnimatedCard key={index} className="mt-4">
                <div className="flex flex-col gap-4 bg-gradient-to-r from-neutral-800 to-neutral-900 shadow-lg border border-neutral-600 rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      src={experience.image} 
                      alt={experience.company} 
                      className="w-20 rounded-lg"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-white">{experience.title}</h2>
                      <h3 className="text-xl text-neutral-200">{experience.company}</h3>
                      <h3 className="text-md text-neutral-400">{experience.date}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-white">
                    {experience.description}
                  </p>
                  <div className="flex gap-4">
                    {experience.links.company && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-neutral-900 border border-neutral-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        onClick={() => window.open(experience.links.company, '_blank')}
                      >
                        Visit Company
                      </motion.button>
                    )}
                 
                    {experience.links.figma && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-neutral-900 border border-neutral-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        onClick={() => window.open(experience.links.figma, '_blank')}
                      >
                        View Figma
                      </motion.button>
                    )}
                    {experience.links.github && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-neutral-900 border border-neutral-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        onClick={() => window.open(experience.links.github, '_blank')}
                      >
                        View GitHub
                      </motion.button>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
