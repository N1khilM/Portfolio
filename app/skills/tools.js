import {
  SiPostman,
  SiGithub,
  SiVercel,
  SiPythonanywhere,
  SiNetlify,
  SiWindows11,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
const Tools = () => {
  const Tools = [
    { name: "Github", icon: <SiGithub /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Windows", icon: <FaWindows /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Python Anywhere", icon: <SiPythonanywhere /> },
    { name: "Netlify", icon: <SiNetlify /> },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Tools.map((skill, index) => (
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

export default Tools;
