import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Type from "./components/Typewriter";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"], // Optional: Add more subsets if needed
  weight: "400", // Add font weights as per your use
});

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-40px)]  flex flex-col bg-var(--background) text-var(--foreground)">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1
            className=" myname font-bold tracking-wide {`${anton.className} text-4xl`}"
            style={{
              // fontFamily: "-moz-initial",
              fontSize: "80px", // Increased font size
              fontWeight: "bold",
              textShadow: `3px 3px 10px var(--foreground)`, // Stronger shadow for a movie feel
              letterSpacing: "8px", // Increased spacing for cinematic effect
              lineaHeight: "1.2", // Adjusted line height for better spacing
            }}
          >
            NIKHIL MUGALI
          </h1>
          <div className="mt-8">
            <Type />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
