"use client";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Footer() {
  const pathname = usePathname();
  // ${
  //         pathname === "/" ? "bg-transparent text-white" : ""
  //       }
  return (
    <footer className={`p-6`}>
      <div className="flex flex-wrap justify-center gap-8 mb-2">
        <a
          href="https://instagram.com/realnikhill"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Instagram"
          className={`theme flex items-center gap-2 text-lg transition hover:text-pink-500 hover:scale-105`}
        >
          <FaInstagram className="text-2xl" />
          <span>Instagram</span>
        </a>
        <a
          href="https://x.com/KinghNikhi10332"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Twitter"
          className={`theme flex items-center gap-2 text-lg transition hover:text-pink-500 hover:scale-105`}
        >
          <FaXTwitter className="text-2xl" />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.facebook.com/nikhil.kingh.3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Facebook"
          className={`theme flex items-center gap-2 text-lg transition hover:text-pink-500 hover:scale-105`}
        >
          <FaFacebook className="text-2xl" />
          <span>Facebook</span>
        </a>
        <a
          href="https://github.com/N1khilM"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub"
          className={`theme flex items-center gap-2 text-lg transition hover:text-pink-500 hover:scale-105`}
        >
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>
      </div>

      <div className="text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Nikhil. All rights reserved.</p>
        <p>
          Designed and Built with ❤️ by{" "}
          <a
            href="https://github.com/N1khilM"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-gray-200"
          >
            Nikhil
          </a>
        </p>
      </div>
    </footer>
  );
}
