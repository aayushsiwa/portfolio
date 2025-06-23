import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import Switch from "./uiComponents/ThemeToggle";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "enabled") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "enabled" : "disabled");
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-screen h-16 px-4 flex justify-between items-center fixed bg-light-bg dark:bg-dark-bg top-0 left-0 z-20 align-middle shadow-md dark:shadow-xs shadow-light-p dark:shadow-dark-p">
        <a
          className="text-light-p dark:text-dark-txt font-extrabold text-xl"
          href="/"
        >
          <h3>aayush.is-a.dev</h3>
        </a>
        <ul className="gap-8 dark:text-dark-p text-xl hidden md:flex items-center">
          <li>
            <Link
              className="transition-all font-semibold hover:text-light-a dark:hover:text-dark-a"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition-all font-semibold hover:text-light-a dark:hover:text-dark-a"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="transition-all font-semibold hover:text-light-a dark:hover:text-dark-a"
              to="projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="transition-all font-semibold hover:text-light-a dark:hover:text-dark-a"
              to="contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Switch onClick={toggleDarkMode} isDarkMode={isDarkMode} />
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-light-a dark:stroke-dark-a hover:stroke-light-p dark:hover:stroke-dark-p md:hidden"
          onClick={handleMenuToggle}
        >
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </nav>
      <div
        className={`mobile-nav backdrop-blur-lg ${
          isMenuOpen ? "open-menu" : "closed-menu"
        }`}
        onClick={handleMenuToggle}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x cursor-pointer stroke-light-a dark:stroke-dark-a hover:stroke-light-p dark:hover:stroke-dark-p"
          >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </span>
        <ul>
          <li
            onClick={toggleDarkMode}
            className="cursor-pointer text-light-a transition ease-in duration-300 hover:scale-125 hover:text-light-p"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </li>
          <li>
            <Link to="#home" className="text-light-txt dark:text-dark-txt">
              Home
            </Link>
          </li>
          <li>
            <Link to="#about" className="text-light-txt dark:text-dark-txt">
              About
            </Link>
          </li>
          <li>
            <Link to="#projects" className="text-light-txt dark:text-dark-txt">
              Projects
            </Link>
          </li>
          <li>
            <Link to="#contact" className="text-light-txt dark:text-dark-txt">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
