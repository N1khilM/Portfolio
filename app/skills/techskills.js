import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaServer, FaHtml5, FaCss3, FaPuzzlePiece } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiDjango,
} from "react-icons/di";

import { SiFigma, SiPostgresql } from "react-icons/si";

const Techskills = () => {
  const technicalSkills = [
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "React", icon: <DiReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "Java", icon: <DiJava /> },
    { name: "C++", icon: <CgCPlusPlus /> },
    { name: "MySQL", icon: <DiMysql /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Python", icon: <DiPython /> },
    { name: "Django", icon: <DiDjango /> },
    { name: "REST APIs", icon: <FaServer /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "Git/GitHub", icon: <DiGit /> },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-var(--background) text-var(--foreground) py-4 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 flex flex-col items-center"
          >
            <div className="text-4xl ">{skill.icon}</div>
            <span className="text-xl">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techskills;
