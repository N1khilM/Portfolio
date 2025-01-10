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
  const strokeColor = "var(--foreground)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="30"
      aria-label="Portfolio Logo"
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
          filter: `drop-shadow(0 0 5px ${strokeColor})`,
        }}
      />
    </svg>
  );
};

function NavBar({ onThemeToggle }) {
  const [isExpanded, setExpanded] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-background ${
        isScrolled ? "navbar-fixed" : ""
      } transition-all`}
    >
      <div
        className="
  align-items: center
  justify-content: space-between mx-auto flex items-center justify-between py-2 px-2 md:px-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items">
          <MyLogo />
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setExpanded(!isExpanded)}>
          <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
          <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
          <span className="block w-6 h-0.5 bg-foreground"></span>
        </button>

        {/* Links */}
        <div
          className={`${
            isExpanded ? "flex" : "hidden"
          } md:flex text-2xl md:items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:static bg-background md:bg-transparent top-12 md:top-auto left-0 w-full md:w-auto px-4 py-2 md:p-0`}
        >
          {[
            { href: "/", label: "Home", icon: FiHome },
            { href: "/about", label: "About", icon: FiUser },
            { href: "/projects", label: "Projects", icon: GoProjectSymlink },
            { href: "/skills", label: "Skills", icon: FiTool },
            { href: "/resume", label: "Resume", icon: FiFileText },
          ].map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center space-x-1 text-foreground text-sm hover:text-teal-400 transition`}
            >
              <Icon /> <span>{label}</span>
            </Link>
          ))}

          {/* GitHub Link */}
          <a
            href="https://github.com/N1khilM/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-foreground text-sm bg-transparent hover:bg-foreground hover:text-background py-1 px-3 rounded-md transition"
          >
            <CgGitFork /> <AiFillStar />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
