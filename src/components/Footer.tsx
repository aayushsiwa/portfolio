import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg py-20 w-full h-auto ps-4 flex justify-start items-center gap-4">
      <a
        className="text-4xl text-white hover:scale-125 transition-transform duration-200"
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/aayush-siwach"
      >
        <FaLinkedin className="fill-light-a" />
      </a>
      <a
        className="text-4xl text-white hover:scale-125 transition-transform duration-200"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/aayushsiwa"
      >
        <FaGithub className="fill-light-a" />
      </a>
      <a
        className="text-4xl text-white hover:scale-125 transition-transform duration-200"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
        href="https://leetcode.com/u/aayushsiwa/"
      >
        <SiLeetcode className="fill-light-a" />
      </a>
      <a
        className="text-4xl text-white hover:scale-125 transition-transform duration-200"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
        href="https://www.hackerrank.com/profile/h22052177"
      >
        <FaHackerrank className="fill-light-a" />
      </a>
    </footer>
  );
}
