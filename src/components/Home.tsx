// import geo from "../assets/geo.svg";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import Scroll from "./uiComponents/Scroll";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-light-bg dark:bg-dark-bg relative pt-32">
        <div className="md:flex sm:flex-col md:flex-row items-start justify-center w-[90vw] h-[80vh] my-auto 32">
          <div>
            <p className="text-6xl leading-relaxed text-light-p dark:text-dark-p font-bold">
              Hi, I'm Aayush!
            </p>
            <p className="text-2xl leading-relaxed font-medium text-light-txt dark:text-dark-txt font-[Mulish] w-3/4">
              Web Developer with 2+ years of experience, aspiring a fulltime
              developer role.
            </p>
            <span className="flex gap-5 my-10 items-center">
              <a
                className="text-5xl"
                aria-label="LinkedIn"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/aayush-siwach"
              >
                <CiLinkedin
                  size={48}
                  className="hover:scale-125 transition ease-in duration-300 text-light-p dark:text-dark-p"
                />
              </a>
              <a
                className="text-5xl"
                aria-label="GitHub"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/aayushsiwa"
              >
                <FiGithub
                  size={38}
                  className="hover:scale-125 transition ease-in duration-300 text-light-p dark:text-dark-p"
                />
              </a>
              <a
                className="text-xl text-light-p dark:text-dark-p border border-light-p dark:border-dark-p p-2 font-bold rounded-md cursor-pointer select-none hover:bg-light-p hover:text-light-bg transition-all duration-300"
                href="https://aayushsiwa.github.io/resume/resume.pdf"
                target="_blank"
              >
                Resume
              </a>
              <a
                className="text-xl text-light-p dark:text-dark-p border border-light-p dark:border-dark-p p-2 font-bold rounded-md cursor-pointer select-none hover:bg-light-p hover:text-light-bg transition-all duration-300"
                href="https://blog.aayushsiwa.is-a.dev"
                target="_blank"
              >
                Blogs
              </a>
            </span>
          </div>
          <div className="border-4 border-light-a dark:border-dark-a bg-[url('https://avatars.githubusercontent.com/u/114244228?v=4')] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out animate-morph rounded-[60%_40%_30%_70%/60%_30%_70%_40%] max-w-[400px] h-[420px] md:w-96 md:h-96 w-md h-112 sm:max-w-md" />
        </div>
        <Scroll />
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
