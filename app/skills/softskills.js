import React from "react";
import { GiBrain } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineChatBubble } from "react-icons/md";
import { FaSyncAlt, FaPalette, FaCrown, FaPuzzlePiece } from "react-icons/fa";

const Softskills = () => {
  const softSkills = [
    { name: "Critical Thinking", icon: <GiBrain /> },
    { name: "Time Management", icon: <AiOutlineClockCircle /> },
    { name: "Team Collaboration", icon: <HiUserGroup /> },
    { name: "Effective Communication", icon: <MdOutlineChatBubble /> },
    { name: "Adaptability", icon: <FaSyncAlt /> },
    { name: "Creativity", icon: <FaPalette /> },
    { name: "Leadership", icon: <FaCrown /> },
    { name: "Problem Solving", icon: <FaPuzzlePiece /> },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-var(--background) text-var(--foreground) py-4 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 flex flex-col items-center"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <h2 className="text-lg font-semibold">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Softskills;
