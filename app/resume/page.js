import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResumeNew from "./resume";

// Manually set the worker source

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen p-4 bg-var(--background) text-var(--foreground)">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">RESUME</h1>
        <ResumeNew />
      </main>
      <Footer />
    </div>
  );
}
