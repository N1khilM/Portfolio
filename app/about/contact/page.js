import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiMail } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-900 text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        {/* Header Section */}
        <section className="text-center ">
          <h1 className="text-4xl font-bold text-primary-500 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg max-w-4xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;m always
            excited to connect, collaborate, and create something amazing
            together.
          </p>
        </section>

        {/* Contact Section */}
        <section className="my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <Image
                src="/contactme.jpg"
                alt="Contact Me"
                width={500}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-primary-500">
                Contact Information
              </h2>
              <p>
                Feel free to reach out to me via email or connect on social
                media. I look forward to hearing from you!
              </p>
              <div>
                <p className="text-lg font-semibold text-primary-500">Email:</p>
                <a
                  href="mailto:nikhilkingh008@gmail.com"
                  className="hover:text-primary-400 transition-all duration-300"
                >
                  nikhilkingh008@gmail.com
                </a>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary-500">
                  Social Media:
                </p>
                <div className="flex space-x-8 justify-center lg:justify-start mt-4">
                  <a
                    href="https://x.com/KinghNikhi10332"
                    target="_blank"
                    aria-label="Follow me on Twitter"
                    className="text-2xl hover:text-primary-400 transition-all duration-300"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikhilmugali/"
                    target="_blank"
                    aria-label="Connect with me on LinkedIn"
                    className="text-2xl hover:text-primary-400 transition-all duration-300"
                  >
                    <CiLinkedin />
                  </a>
                  <a
                    href="https://instagram.com/realnikhill"
                    target="_blank"
                    aria-label="Follow me on Instagram"
                    className="text-2xl hover:text-primary-400 transition-all duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://github.com/N1khilM"
                    target="_blank"
                    aria-label="Check out my GitHub"
                    className="text-2xl hover:text-primary-400 transition-all duration-300"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
