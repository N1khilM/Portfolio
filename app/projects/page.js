import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
  const projects = [
    {
      title: "Marketsquare",
      description:
        "A feature-rich online marketplace platform enabling users to browse, buy, and sell products seamlessly.",
      image: "/marketsquare.png",
      link: "https://github.com/N1khilM/marketsquare",
      demo: "https://marketsquare.pythonanywhere.com",
    },
    {
      title: "Task Manager",
      description:
        "A web-based tool for managing tasks and to-do lists, featuring task creation, editing, and status updates.",
      image: "/taskmanager.png",
      link: "https://github.com/N1khilM/TaskManager",
    },
    {
      title: "Portfolio(ReactJS)",
      description:
        "A personal portfolio website showcasing your skills, projects, and experience.",
      image: "/portfolio.png",
      link: "https://github.com/N1khilM/portfolio",
      demo: "https://nikhilmugali-portfolio.vercel.app",
    },
    {
      title: "Currency Converter",
      description:
        "A tool for converting currency values with a user-friendly interface.",
      image: "/currencyconverter.png",
      link: "https://github.com/N1khilM/CurrencyConverter",
    },
    {
      title: "Expense Tracker Pro (Backend)",
      description:
        "A backend system for tracking personal expenses and income, offering secure authentication and data handling.",
      image: "/ExpenseTrackerBackendPostman.png",
      link: "https://github.com/N1khilM/expense_tracker_pro",
    },
    {
      title: "Calculator",
      description:
        "A responsive calculator application capable of performing basic arithmetic operations.",
      image: "/calculator.png",
      link: "https://github.com/N1khilM/Calculator",
    },
    {
      title: "Weather Me",
      description:
        "A weather forecast application displaying real-time data such as temperature, humidity, and conditions.",
      image: "/WeatherMe.png",
      link: "https://github.com/N1khilM/weather-app",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen p-4 bg-var(--background) text-var(--foreground)">
      <Navbar />
      <main className="flex-grow row-start-2 flex flex-col items-center justify-center">
        <h1
          className="text-4xl font-bold text-center sm:text-center"
          style={{
            fontSize: "40px", // Adjusted font size for the Projects page
            fontWeight: "bold",
            color: "var(--foreground)",
            letterSpacing: "5px",
            lineHeight: "1.2",
            fontFamily: "'Anton', sans-serif",
          }}
        >
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover hover:backdrop:to-var(--foreground)"
                />
              </a>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                {/* link to demo and github */}

                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-200 text-black px-4 py-2 rounded-lg flex items-center hover:bg-slate-900 hover:text-white"
                  >
                    <BsGithub className="mr-2" />
                    GitHub
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-200 text-black px-4 py-2 rounded-lg flex items-center hover:bg-slate-900 hover:text-white"
                    >
                      <CgWebsite className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
