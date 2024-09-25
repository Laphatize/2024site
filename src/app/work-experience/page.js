"use client"
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
      
         
<div className="">
<h1 className="text-3xl  font-bold">💼 Work Experience</h1>

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

            Conceptualized and executed a comprehensive inventory management system using the MERN stack, resulting in a 52% increase in operational efficiency and improved resource tracking accuracy.
</p>

<div className="flex gap-4">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit" onClick={() => window.open("https://www.figma.com/design/fBmasoYMswElMfG5VAkjXH/Brandywine-Launchbox?node-id=0-1&t=KfxI0864arw7S2CW-1")}>View Figma</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit" onClick={() => window.open("https://brandywine-launchbox.vercel.app/")}>View Site</button>
          
</div>
</div>
        </div>
      
      </div>
      </div>
     
      </main>
    
    </div>
  );
}
