import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] max-w-screen-lg mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full text-black p-4">
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
            <h1 className="text-3xl font-bold">💻 Projects</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
             
              <div className="mt-4 flex flex-col gap-4 bg-white shadow-lg border border-neutral-200 rounded-lg p-6">
              <img src="/sera.png" alt="ctfguide" className="w-full rounded-lg" />

                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">Sera </h2>
                    <span className="text-md text-yellow-500  text-sm rounded-lg">PennApps XXV Hackathon Winner</span>
                    <h3 className="text-md text-gray-600">09/20/24 - 09/22/24</h3>
                  </div>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <h4 className="text-lg font-semibold">Skills Used</h4>
                  <p>Figma, TailwindCSS, Next.js, React.js, Node</p>
                </div>
                <p className="text-lg text-gray-800">
                An AI-powered finance app with personalized financial guidance, OCR receipt scanning, transaction management, and budgeting tools.

</p>
                <div className="flex gap-4">
                  <a href="https://sera.pranavramesh.dev" className="text-blue-500 hover:underline">Project Link</a>
                  <a href="https://github.com/sera-financial" className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4 bg-white shadow-lg border border-neutral-200 rounded-lg p-6">
              <img src="/comcast.png" alt="comcast" className="w-full rounded-lg" />

              <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">Comcast Inquire </h2>
                    <span className="text-md text-yellow-500  text-sm rounded-lg">Philly Codefest Winner</span>
                    <h3 className="text-md text-gray-600">04/24/24 - 09/26/24</h3>
                  </div>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <h4 className="text-lg font-semibold">Skills Used</h4>
                  <p>Figma, TailwindCSS, Next.js, React.js, Node</p>
                </div>
                <p className="text-lg text-gray-800">
                A chat interface to help with the sales and marketing of Comcast products. This project won Comcast's OpenAI Track at the Philly Codefest 2024.
</p>
                <div className="flex gap-4">
                  <a href="https://comcast-inquire.vercel.app/" className="text-blue-500 hover:underline">Project Link</a>
                  <a href="https://github.com/laphatize/comcast-inquire" className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </div>


              <div className="mt-4 flex flex-col gap-4 bg-white shadow-lg border border-neutral-200 rounded-lg p-6">
              <img src="/docket.png" alt="comcast" className="w-full rounded-lg" />

              <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">Docket </h2>
                    <h3 className="text-md text-gray-600">05/20/24 - Present</h3>
                  </div>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <h4 className="text-lg font-semibold">Skills Used</h4>
                  <p>Node.js, Express, Docker, Tensorflow</p>
                </div>
                <p className="text-lg text-gray-800">
                Manage fleets of containers across your own infrastructure. Built for CTFGuide's virtual terminal service.

</p>
                <div className="flex gap-4">
                  <a href="https://github.com/ctfguide-tech/docket" className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
