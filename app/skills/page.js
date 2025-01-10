import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Techskills from "./techskills";
import Softskills from "./softskills";
import Tools from "./tools";
import Github from "./github";

export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen p-4 bg-var(--background) text-var(--foreground)">
      <Navbar />
      <main className="flex-grow row-start-2 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center sm:text-center">
          SKILLS
        </h1>
        <div className="mt-12 w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Technical Skills
          </h2>
          <Techskills />

          <h2 className="text-2xl font-semibold mt-16 mb-6 text-center">
            Soft Skills
          </h2>
          <Softskills />

          <h2 className="text-2xl font-semibold mt-16 mb-6 text-center">
            Tools i use
          </h2>
          <Tools />
        </div>{" "}
        <div className="mt-12 w-full max-w-6xl">
          <h1 className="text-2xl font-semibold mt-16 mb-6 text-center">
            Code Report
          </h1>
          <Github />
        </div>
      </main>
      <Footer />
    </div>
  );
}
