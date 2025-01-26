"use client"
import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import { FaReact, FaNode, FaDocker } from "react-icons/fa";
import { SiTensorflow, SiNextdotjs, SiTailwindcss, SiFigma, SiExpress } from "react-icons/si";
import { BsRobot } from "react-icons/bs";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const getProjectIcon = (skills) => {
  // Return primary icon based on main technology
  if (skills.includes('AI')) return BsRobot;
  if (skills.includes('Next.js')) return SiNextdotjs;
  if (skills.includes('Docker')) return FaDocker;
  return FaReact;
};

// Function to generate initials from project name
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2); // Get maximum 2 characters
};

// Function to generate a consistent color based on string
const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-green-500 to-green-600',
    'from-red-500 to-red-600',
    'from-yellow-500 to-yellow-600',
    'from-pink-500 to-pink-600',
    'from-indigo-500 to-indigo-600',
    'from-cyan-500 to-cyan-600'
  ];
  return colors[Math.abs(hash) % colors.length];
};

const projects = [
  {
    title: "Vyvern",
    description: "An AI agentic social engineering platform that helps security teams test their organization's resilience against social engineering attacks.",
    date: "2024 - Present",
    badge: "Latest Project",
    skills: ["AI", "Next.js", "React.js", "Node", "TailwindCSS", "LangChain"],
    links: {
      project: "https://vyvern.com"
    }
  },
  {
    title: "Sera",
    description: "An AI-powered finance app with personalized financial guidance, OCR receipt scanning, transaction management, and budgeting tools.",
    date: "09/20/24 - 09/22/24",
    badge: "PennApps XXV Hackathon Winner",
    skills: ["Next.js", "React.js", "Node", "AI", "TailwindCSS", "Figma"],
    links: {
      project: "https://sera.pranavramesh.dev",
      github: "https://github.com/sera-financial"
    }
  },
  {
    title: "InternHunt",
    description: "A platform that helps students find software engineering and tech internships. Features automated job discovery and application tracking.",
    date: "2024",
    skills: ["Next.js", "React.js", "Node", "TailwindCSS"],
    links: {
      project: "https://internhunt.pranavramesh.dev",
      github: "https://github.com/Laphatize/internhunt"
    }
  },
  {
    title: "Comcast Inquire",
    description: "A chat interface to help with the sales and marketing of Comcast products. This project won Comcast's OpenAI Track at the Philly Codefest 2024.",
    date: "04/24/24 - 09/26/24",
    badge: "Philly Codefest Winner",
    skills: ["Next.js", "React.js", "Node", "AI", "TailwindCSS", "Figma"],
    links: {
      project: "https://comcast-inquire.vercel.app/",
      github: "https://github.com/laphatize/comcast-inquire"
    }
  },
  {
    title: "Docket",
    description: "Manage fleets of containers across your own infrastructure. Built for CTFGuide's virtual terminal service.",
    date: "05/20/24 - Present",
    skills: ["Node.js", "Express", "Docker", "Tensorflow"],
    links: {
      github: "https://github.com/ctfguide-tech/docket"
    }
  }
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] max-w-screen-lg mx-auto items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
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

      <main className="flex flex-col gap-8 row-start-2 w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            💻 Projects
          </motion.h1>
          
          <div className="flex flex-col gap-4">
            {projects.map((project, index) => {
              const initials = getInitials(project.title);
              const gradientColor = stringToColor(project.title);
              
              return (
                <AnimatedCard key={index}>
                  <div className="flex flex-col sm:flex-row gap-6 bg-gradient-to-r from-neutral-800 to-neutral-900 shadow-lg border border-neutral-600 rounded-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow duration-300">
                    <motion.div 
                      className={`flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradientColor} rounded-lg font-bold text-2xl text-white shadow-lg mx-auto sm:mx-0`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {initials}
                    </motion.div>
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white text-center sm:text-left">{project.title}</h2>
                          {project.badge && (
                            <span className="text-md text-yellow-500 text-sm rounded-lg block text-center sm:text-left">
                              {project.badge}
                            </span>
                          )}
                          <h3 className="text-md text-neutral-400 text-center sm:text-left">{project.date}</h3>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-2">
                          {project.skills.map((skill, skillIndex) => {
                            return (
                              <span 
                                key={skillIndex}
                                className="px-2 py-1 bg-neutral-700/50 rounded text-sm text-neutral-300 whitespace-nowrap"
                              >
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      
                      <p className="text-lg text-white mt-4 text-center sm:text-left">
                        {project.description}
                      </p>
                      
                      <div className="flex gap-4 mt-4 justify-center sm:justify-start">
                        {project.links.project && (
                          <motion.a 
                            whileHover={{ scale: 1.05 }}
                            href={project.links.project}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            Project Link
                          </motion.a>
                        )}

                        {project.links.github && (
                          <motion.a 
                            whileHover={{ scale: 1.05 }}
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          GitHub
                        </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
