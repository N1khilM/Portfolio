import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { CiLinkedin, CiMail, CiPhone } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-900 theme">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <section className="text-center my-12">
          <h1 className="text-4xl font-bold mb-6 theme tracking-wide">
            Get in Touch
          </h1>
          <p className="text-lg theme max-w-4xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;m always
            excited to connect, collaborate, and create something amazing
            together.
          </p>
        </section>

        <section className="my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/contactme.jpg"
                alt="Contact Me Image"
                width={500}
                height={500}
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="theme">
                Feel free to reach out to me via email or connect on social
                media. I look forward to hearing from you!
              </p>
              <div>
                <p className="text-lg font-semibold text-primary-500">Email:</p>
                <a
                  href="mailto:nikhilkingh008@gmail.com"
                  className="theme hover:text-primary-500 transition-all duration-300"
                >
                  nikhilkingh008@gmail.com
                </a>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary-500">
                  Social Media:
                </p>
                &nbsp;
                <div className="flex space-x-14 justify-center lg:justify-start">
                  <a
                    href="https://x.com/KinghNikhi10332"
                    target="_blank"
                    aria-label="Follow me on Twitter"
                    className="scale-150 gap-4 theme hover:text-primary-500 transition-all duration-300"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikhilmugali/"
                    target="_blank"
                    aria-label="Connect with me on LinkedIn"
                    className="scale-150 gap-2 theme hover:text-primary-500 transition-all duration-300"
                  >
                    <CiLinkedin />
                  </a>

                  <a
                    href="https://instagram.com/realnikhill"
                    target="_blank"
                    aria-label="Follow me on Instagram"
                    className="scale-150 gap-2 theme hover:text-primary-500 transition-all duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://github.com/N1khilM"
                    target="_blank"
                    aria-label="Check out my GitHub"
                    className="scale-150 theme hover:text-primary-500 transition-all duration-300"
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
