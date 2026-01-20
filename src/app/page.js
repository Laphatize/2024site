"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showImageModal, setShowImageModal] = useState(false);

  const navItems = [
    { id: "about", label: "About", href: "/" },
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "design", label: "Design", href: "/design" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="fixed inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 -z-10" />
      
      {/* Left Navigation */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-1 z-50">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`group flex items-center gap-3 py-2 text-sm transition-all duration-300 ${
              item.id === "about" ? "text-white" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <span className={`h-px transition-all duration-300 ${
              item.id === "about" ? "w-12 bg-white" : "w-6 bg-neutral-600 group-hover:w-8 group-hover:bg-neutral-400"
            }`} />
            <span className="font-light tracking-wide">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-1 p-1.5 rounded-full bg-neutral-900/90 backdrop-blur-md border border-neutral-800">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
              item.id === "about"
                ? "bg-white text-neutral-900 font-medium"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-20 lg:py-32 lg:ml-48">
        
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-5 mb-6">
            <img 
              src="https://avatars.githubusercontent.com/u/23617187?v=4" 
              alt="Pranav Ramesh" 
              className="w-16 h-16 rounded-full ring-2 ring-neutral-800"
            />
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight">
              Pranav Ramesh
            </h1>
          </div>
          <p className="text-neutral-400 text-lg font-light mb-6">
            Founder & Software Engineer
          </p>
          <div className="flex gap-5">
            <a href="https://github.com/laphatize" target="_blank" rel="noopener noreferrer" 
               className="text-neutral-500 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="mailto:pranavramesh2022@gmail.com" target="_blank" rel="noopener noreferrer"
               className="text-neutral-500 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            </a>
            <a href="https://x.com/pranavrameshh" target="_blank" rel="noopener noreferrer"
               className="text-neutral-500 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/pranavramesh2/" target="_blank" rel="noopener noreferrer"
               className="text-neutral-500 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="space-y-12">
          <div className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed font-light">
              Hi, I'm Pranav. I'm the founder of{" "}
              <a className="text-white hover:text-blue-400 transition-colors border-b border-neutral-700 hover:border-blue-400" href="https://ctfguide.com/" target="_blank" rel="noopener noreferrer">CTFGuide</a>
              {" "}and{" "}
              <a className="text-white hover:text-blue-400 transition-colors border-b border-neutral-700 hover:border-blue-400" href="https://vyvern.com/" target="_blank" rel="noopener noreferrer">Vyvern</a>
              , and a senior at Penn State.
            </p>
            <p className="text-neutral-400 leading-relaxed font-light">
              I love attending hackathons and learning new technologies. Some of my interests include cybersecurity, AI, and web development.
            </p>
            <p className="text-neutral-400 leading-relaxed font-light">
              I recently won the "Best DEI Hack sponsored by Fidelity Investments" at PennApps XXV.{" "}
              <a className="text-neutral-300 hover:text-white transition-colors border-b border-neutral-700 hover:border-neutral-400" href="https://devpost.com/software/sera-2svk5u" target="_blank" rel="noopener noreferrer">
                Learn more →
              </a>
            </p>
          </div>

          {/* Fun Fact Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700/50 transition-colors duration-300">
            <div className="flex gap-6 items-start">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-amber-500 uppercase tracking-wider">Fun Fact</h3>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Almost all my production services are deployed on a Homelab in my basement. It uses a custom proxy I built with Node.js and uses Cloudflare Tunnels to securely expose ports.
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  It has over 120GB of RAM and 4TB of storage with a dedicated battery backup that allows the server to run for 2 hours in case of a power outage. It can even switch over to a cellular connection if the internet is down.
                </p>
                <div className="pt-2">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Servers</p>
                  <ul className="text-sm text-neutral-400 space-y-1">
                    <li>• HPE ProLiant DL360 Gen9</li>
                    <li>• SuperMicro X10SL7-F Server</li>
                  </ul>
                </div>
                <a href="https://uptime.pranavramesh.dev/status/homelab" target="_blank" rel="noopener noreferrer" 
                   className="inline-block text-sm text-neutral-400 hover:text-white transition-colors border-b border-neutral-700 hover:border-neutral-400">
                  Check server status →
                </a>
              </div>
              <div 
                className="hidden sm:block w-32 flex-shrink-0 cursor-pointer group"
                onClick={() => setShowImageModal(true)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img src="./image.png" alt="Homelab" className="w-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                </div>
                <p className="text-xs text-neutral-500 text-center mt-2">Click to expand</p>
              </div>
            </div>
          </div>

          {showImageModal && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowImageModal(false)}>
              <div className="relative max-w-4xl">
                <img src="./image.png" alt="Homelab" className="max-w-full max-h-[80vh] rounded-lg" />
                <p className="text-neutral-400 text-center mt-4">My Homelab Setup</p>
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-neutral-800/50">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Pranav Ramesh. Built with Next.js.
          </p>
        </footer>
      </main>
    </div>
  );
}
