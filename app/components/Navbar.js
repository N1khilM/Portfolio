"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { FiHome, FiUser, FiTool, FiFileText } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export const MyLogo = () => {
  const pathname = usePathname();

  // const strokeColor = pathname === "/" ? "white" : "var(--foreground)";
  const strokeColor = "var(--foreground)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="30"
      aria-label="My Portfolio Logo"
    >
      <rect width="50" height="30" fill="none" />
      <path
        d="M30,20 L30,5 L70,20 L70,5"
        fill="none"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: `drop-shadow(0 0 5px ${strokeColor})`, // Subtle shadow for the logo
        }}
      />
    </svg>
  );
};

function NavBar({ onThemeToggle }) {
  const [isExpanded, setExpanded] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  // Get current path
  const pathname = usePathname();
  // Scroll handler to toggle navbar sticky state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` navbar-fixed theme fixed top-0 left-0 w-full z-10 transition-all `}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Brand Section */}
        <Link href="/" className="flex items-center">
          <MyLogo />
        </Link>

        {/* Hamburger Toggle for Mobile */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setExpanded(!isExpanded)}
        >
          <span className="block w-6 h-1 bg-foreground"></span>
          <span className="block w-6 h-1 bg-foreground"></span>
          <span className="block w-6 h-1 bg-foreground"></span>
        </button>

        {/* Links Section */}
        <div
          className={`${
            isExpanded ? "block" : "hidden"
          } place-items-center md:flex  md:space-x-6 absolute md:static md:bg-transparent top-14 left-0 w-full md:w-auto px-6 py-4 md:p-0`}
        >
          <Link
            href="/"
            className={`  flex items-center space-x-2 hover:text-teal-400`}
          >
            <FiHome /> <span>Home</span>
          </Link>

          <Link
            href="/about"
            className={`  flex items-center space-x-2 hover:text-teal-400`}
          >
            <FiUser /> <span>About</span>
          </Link>

          <Link
            href="/projects"
            className={`  flex items-center space-x-2 hover:text-teal-400`}
          >
            <GoProjectSymlink /> <span>Projects</span>
          </Link>
          <Link
            href="/skills"
            className={` flex items-center space-x-2 hover:text-teal-400`}
          >
            <FiTool /> <span>Skills</span>
          </Link>

          <Link
            href="/resume"
            className={`  flex items-center space-x-2 hover:text-teal-400`}
          >
            <FiFileText /> <span>Resume</span>
          </Link>

          {/* GitHub Button */}
          <a
            href="https://github.com/N1khilM/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={`  flex items-center space-x-2 bg-transparent hover:bg-foreground hover:text-background  py-2 px-4 rounded-lg transition`}
          >
            <CgGitFork /> <AiFillStar />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
