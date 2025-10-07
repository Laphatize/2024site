
"use client";
import { useState } from "react";

export default function Home() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const experiences = [
    {
      title: "Founder, Software Engineer",
      company: "Vyvern Corporation",
        date: "August 2025 - Present",
        description: "Building AI agents that protect organizations from social engineering attacks.",
      links: {
        company: "https://vyvern.com"
      }
    },
    {
      title: "Software Engineer Intern",
      company: "JPMorganChase&Co",
      date: "June 2025 - August 2025",
      description: "I worked on the Operations Technology team where I worked with Java, Springboot, Postgres, and Kafka.",
      links: {
        company: "https://www.jpmorganchase.com"
      }
    },
    {
      title: "Founder, Software Engineer",
      company: "CTFGuide Corporation",
      date: "Dec 2022 - Present",
      description: "Raised funds from investors like Bullmont Capital and Penn State University. Designed and implemented the frontend using Figma, TailwindCSS, Next.js, and React.js, and developed the backend with Node.",
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
      links: {
        company: "https://snyder.tech"
      }
    },
    {
      title: "Software Engineer",
      company: "Knowt Inc",
      date: "May 2023 - Aug 2023",
      description: "Developed profile customization features using React.js, HTML, and CSS. Refactored UI components for enhanced user profile functionality.",
      links: {
        company: "https://knowt.com"
      }
    },
    {
      title: "Software Engineering Intern",
      company: "The Pennsylvania State University",
      date: "Aug 2022 - Dec 2022",
      description: "Conceptualized and executed a comprehensive inventory management system using the MERN stack, resulting in a 52% increase in operational efficiency and improved resource tracking accuracy.",
      links: {
        company: "https://psu.edu"
      }
    }
  ];
  
  const projects = [
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
  
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold text-white">Pranav Ramesh</h1>
          <div className="flex gap-6">
            <a href="https://github.com/laphatize" target="_blank" rel="noopener noreferrer" className="text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="mailto:pranavramesh2022@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            </a>
            <a href="https://x.com/pranavrameshh" target="_blank" rel="noopener noreferrer" className="text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/pranavramesh2/" target="_blank" rel="noopener noreferrer" className="text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-screen-lg mx-auto p-8 flex flex-col gap-8">
        <div>
          <p className="text-xl mt-2">
            Hi, I'm Pranav. I'm the founder of <a className="underline font-bold" href="https://www.ctfguide.com/" target="_blank" rel="noopener noreferrer">CTFGuide</a>, the founder of <a className="underline font-bold" href="https://vyvern.com/" target="_blank" rel="noopener noreferrer">Vyvern</a>, and a senior at Penn State.
            <br/><br/>
            I love attending hackathons and learning new technologies. Some of my interests include cybersecurity, AI, and web development.
            <br/><br/>
            I recently won the "Best DEI Hack sponsored by Fidelity Investments" at PennApps XXV. You can learn more about the project that won <a className="underline font-bold" href="https://devpost.com/software/sera-2svk5u" target="_blank" rel="noopener noreferrer">here</a>.
          </p>

          <div className="mt-10 border-l-2 border-yellow-500 pl-4 flex gap-4 items-start">
            <div className="flex-1">
              <h2 className="text-lg font-bold mt-2 mb-4">Fun Fact</h2>
              <p>Almost all my production services are deployed on a Homelab in my basement. It uses a custom proxy I built with Node.js and uses Cloudflare Tunnels to securely expose ports.</p>
           
              <p className="mt-2">It has over 120GB of RAM and 4TB of storage. It has a dedicated battery backup that allows the server to run for 2 hours in case of a power outage. It can even switch over to a cellular connection if the internet is down.</p>

              <p className="mt-3"><span className="font-bold">Servers: </span> </p>
              <ul>
                  <li>HPE ProLiant DL360 Gen9</li>
                  <li>SuperMicro X10SL7-F Server</li>
                </ul>

                <div className="mt-3">
              <a  href="https://uptime.pranavramesh.dev/status/homelab" target="_blank" rel="noopener noreferrer" className="underline">Check the status of services running on the server here.</a>
          </div>

            </div>
            <div className="w-1/4 mt-10 cursor-pointer" onClick={() => setShowImageModal(true)}>
              <img src="./image.png" alt="Homelab" className="w-full" />
              <div className="bg-black text-white text-xs text-center py-1">My Homelab Setup</div>
            </div>
          </div>

          {showImageModal && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowImageModal(false)}>
              <div className="relative max-w-4xl max-h-screen p-4">
                <img src="./image.png" alt="Homelab" className="max-w-full max-h-screen" />
                <div className="bg-black text-white text-center py-2 mt-2">My Homelab Setup</div>
              </div>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10 mb-4">Work Experience</h2>
          {(showAllExperiences ? experiences : experiences.slice(0, 3)).map((exp, index) => (
            <div key={index} className="mt-4 border-l-2 border-blue-500 pl-4">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-lg">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.date}</p>
              <p className="mt-2">{exp.description}</p>
              <div className="mt-2 flex gap-4">
                {exp.links.company && <a href={exp.links.company} target="_blank" rel="noopener noreferrer" className="underline">Website</a>}
                {exp.links.github && <a href={exp.links.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>}
              </div>
            </div>
          ))}
          {!showAllExperiences && (
            <div className="mt-4">
              <button onClick={() => setShowAllExperiences(true)} className="underline">View More</button>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10 mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mt-4 border-l-2 border-blue-500 pl-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              {project.badge && <span className="text-sm text-gray-600">{project.badge}</span>}
              <p className="text-sm text-gray-600">{project.date}</p>
              <p className="mt-2">{project.description}</p>
              <div className="mt-2 flex gap-2 flex-wrap">
                {project.skills.map((skill, i) => (
                  <span key={i} className="text-sm border border-black px-2 py-1">{skill}</span>
                ))}
              </div>
              <div className="mt-2 flex gap-4">
                {project.links.project && <a href={project.links.project} target="_blank" rel="noopener noreferrer" className="underline">Project</a>}
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
