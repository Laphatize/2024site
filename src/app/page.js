import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] max-w-screen-lg mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <nav className="w-full text-black   p-4">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold"></div>
        <div className="flex gap-4">
            <a className="text-black hover:underline" href="/">Home</a>
 
            <a className="text-black hover:underline" href="/work-experience">Work Experience</a>
        
            <a className="text-black hover:underline" href="/projects">Projects</a>

        </div>
      </div>
    </nav>
      <main className="flex sm:flex-col-2 flex-col-1 gap-8 row-start-2 items-center sm:items-start">       
     
    <div className="flex flex-col">
      

        <div>
        <h1 className="text-3xl font-bold">Pranav Ramesh</h1>
      
        <p className="text-xl mt-2">
        Hi, I'm Pranav. I'm the founder of <a className="underline font-bold" href="https://www.ctfguide.com/" target="_blank" rel="noopener noreferrer">CTFGuide</a> and a junior at Penn State.
        <br></br><br></br>
           I love attending hackathons and learning new technologies. Some of my interests include cybersecurity, AI, and web development.
           <br></br><br></br>
           I recently won the "Best DEI Hack sponsored by Fidelity Investments" at PennApps XXV. You can learn more about the project that won <a  className="underline font-bold" href="https://devpost.com/software/sera-2svk5u" target="_blank" rel="noopener noreferrer">here</a>.
        </p>


         
<div className="hidden">
<h1 className="text-3xl  mt-10 font-bold">💼 Work Experience</h1>

          <div className="mt-4 flex flex-col gap-4 bg-white shadow-lg border border-neutral-200 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <img src="/ctfguide.png" alt="ctfguide" className="w-20 rounded-lg" />
              <div>
              <h2 className="text-2xl font-bold">Founder & CEO</h2>

<h3 className="text-xl text-gray-600">CTFGuide Corporation</h3>
<h3 className="text-md text-gray-600">Dec 2022 - Present</h3>

              </div>
            </div>
            <p className="text-lg text-gray-800">
              Raised funds from investors like Bullmont Capital and Penn State University. Designed and implemented the frontend using Figma, TailwindCSS, Next.js, and React.js, and developed the backend with Node.
            </p>
          </div>


          <div className="mt-4 flex flex-col gap-4 bg-white shadow-lg border border-neutral-200 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <img src="/snyder.png" alt="snyder" className="w-20 rounded-lg" />
              <div>
              <h2 className="text-2xl font-bold">Software Engineering & Technical Product Manager Intern</h2>

<h3 className="text-xl text-gray-600">Snyder Technologies</h3> 
<h3 className="text-md text-gray-600">May 2024 - Aug 2024</h3>

              </div>
            </div>
            <p className="text-lg text-gray-800">
              Designed and implemented a new UI/UX for the company website using Figma, Angular, and HTML. Worked on various projects across domains such as cybersecurity, government, and entertainment.
            </p>
          </div>

         
          <div className="mt-4 flex flex-col gap-4 bg-white shadow-lg border border-neutral-200 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <img src="/knowt.png" alt="knowt" className="w-20 rounded-lg" />
              <div>
              <h2 className="text-2xl font-bold">Software Engineer</h2>

<h3 className="text-xl text-gray-600">Knowt Inc</h3>
<h3 className="text-md text-gray-600">May 2023 - Aug 2023</h3>

              </div>
            </div>
            <p className="text-lg text-gray-800">
            Developed profile customization features using React.js, HTML, and CSS. Refactored UI components for enhanced user profile functionality.
</p>
          </div>

     

          <div className="mt-4 flex flex-col gap-4 bg-white shadow-lg border border-neutral-200 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <img src="/psu.png" alt="psu" className="w-20 rounded-lg" />
              <div>
              <h2 className="text-2xl font-bold">Software Engineering Intern</h2>

<h3 className="text-xl text-gray-600">The Pennsylvania State University</h3>
<h3 className="text-md text-gray-600">Aug 2022 - Dec 2022</h3>

              </div>
            </div>
            <p className="text-lg text-gray-800">
            Developed profile customization features using React.js, HTML, and CSS. Refactored UI components for enhanced user profile functionality.
</p>
          </div>
        </div>
      
      </div>
      </div>
      <div className="hidden sm:block ">
      <img src="/me.png" alt="pranav" className="w-2/3 rounded-lg mx-auto" />
   
      <footer className="row-start-3 mt-4 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          resume
        </a>
    
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/laphatize"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
         github
        </a>
      </footer>
      </div>
      </main>
    
    </div>
  );
}
