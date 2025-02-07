"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <div
      className="text-4xl font-bold styledtype"
      style={{
        animation: "fadeInUp 3s ease-out", // Animation effect for entry
      }}
    >
      <Typewriter
        words={[
          "Software Developer",
          "Freelancer",
          "Full Stack Developer",
          "Web Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Problem Solver",
        ]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </div>
  );
}

export default Type;
