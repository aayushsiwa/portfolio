import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Scroll } from "../components/uiComponents/Scroll";
import { About } from "./About";
import { Contact } from "./Contact";
import { Projects } from "./Projects/Projects";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-light-bg dark:bg-dark-bg relative pt-24 md:pt-32 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-center w-[90vw] gap-10 my-auto">
          <div className="flex-1">
            <p className="text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-relaxed text-light-p dark:text-dark-p font-bold">
              Hi, I&apos;m Aayush!
            </p>
            <p className="text-base sm:text-xl md:text-2xl leading-relaxed font-medium text-light-txt dark:text-dark-txt font-[Mulish] w-full sm:w-3/4 mt-3">
              Web Developer with 2+ years of experience, aspiring a fulltime
              developer role.
            </p>
            <span className="flex flex-wrap gap-5 my-8 items-center">
              <a
                className="text-5xl"
                aria-label="LinkedIn"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/aayushsiwa"
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
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
              <a
                className="text-xl text-light-p dark:text-dark-p border border-light-p dark:border-dark-p p-2 font-bold rounded-md cursor-pointer select-none hover:bg-light-p hover:text-light-bg transition-all duration-300"
                href="https://blog.aayushsiwa.is-a.dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blogs
              </a>
            </span>
          </div>
          <div className="border-4 border-light-a dark:border-dark-a bg-[url('https://avatars.githubusercontent.com/u/114244228?v=4')] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out animate-morph rounded-[60%_40%_30%_70%/60%_30%_70%_40%] w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 shrink-0 mx-auto" />
        </div>
        <Scroll />
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};
