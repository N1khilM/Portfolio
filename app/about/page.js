import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className=" min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto p-3">
        <section className="text-center ">
          <h1 className="text-4xl font-bold  text-center sm:text-center">
            ABOUT ME
          </h1>
          <p className="text-lg  text-var(--foreground) pt-4  max-w-4xl mx-auto">
            Welcome! I&apos;m a passionate and dedicated web developer with a
            knack for building dynamic, user-friendly web applications. My
            mission is to bridge creativity with functionality, crafting
            experiences that leave a lasting impression.
          </p>
        </section>

        <section className="my-16 ">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            My Philosophy
          </h2>
          <div className="grid container md:grid-cols-2 place-items-center gap-12 items-center">
            <div className="text-var(--foreground) container text-lg leading-relaxed">
              <p>
                I believe that technology has the power to transform lives, and
                I&apos;m committed to building tools that make a difference.
                From sleek front-end designs to robust back-end architectures,
                my approach blends aesthetics and performance seamlessly.
              </p>
              <p className="mt-6">
                Collaboration, continuous learning, and innovation are the
                pillars of my work. I thrive on solving complex challenges and
                staying ahead in a rapidly evolving industry.
              </p>
            </div>
            <Image
              width={500}
              height={300}
              src="/myavatar.jpg"
              alt="My Avatar"
              className="rounded-lg  shadow-lg"
            />
          </div>
        </section>

        <section className="my-16   p-8 rounded-lg shadow-foreground shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center  p-6 rounded-lg shadow-foreground shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-var(--foreground)">
                Creating responsive, accessible, and visually appealing websites
                tailored to your needs.
              </p>
            </div>
            <div className="text-center bg-dark-700 p-6 rounded-lg shadow-foreground shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">Backend Engineering</h3>
              <p className="text-var(--foreground)">
                Building robust APIs, managing databases, and ensuring seamless
                server-side operations.
              </p>
            </div>
            <div className="text-center bg-var(--background) p-6 rounded-lg shadow-foreground shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-var(--foreground)">
                Designing user-centric interfaces that prioritize usability and
                aesthetics.
              </p>
            </div>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            My Journey
          </h2>
          <p className="text-var(--foreground) text-lg max-w-4xl mx-auto text-center">
            Starting as a curious problem-solver, I embarked on a journey to
            explore the vast world of technology. From learning programming
            basics to mastering modern frameworks, every step has been a lesson
            in growth and adaptability. Today, I continue to challenge myself
            and stay inspired to create solutions that matter.
          </p>
        </section>

        <section className="my-12 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Get in Touch
          </h2>
          <p className="text-foreground mb-12">
            I&apos;m always excited to collaborate on new projects and ideas.
            Let&apos;s create something amazing together!
          </p>

          <Link
            href="/about/contact"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white py-4 px-10 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contact Me
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
