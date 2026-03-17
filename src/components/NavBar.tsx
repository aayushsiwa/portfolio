"use client";
import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Switch } from "./uiComponents/Switch";
import { useTheme } from "next-themes";
import Link from "vinext/shims/link";

export function NavBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a small placeholder
  }

  const isDarkMode = resolvedTheme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-screen h-16 px-4 flex justify-between items-center fixed bg-light-bg dark:bg-dark-bg top-0 left-0 z-20 align-middle shadow-md dark:shadow-xs shadow-light-p dark:shadow-dark-p">
        <Link
          className="text-light-p dark:text-dark-txt font-extrabold text-xl"
          href="/"
        >
          <h3>aayushsiwa.is-a.dev</h3>
        </Link>
        <ul className="gap-8 dark:text-dark-p text-xl hidden md:flex items-center">
          <li>
            <Link
              className="transition-all font-semibold hover:text-light-a dark:hover:text-dark-a"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition-all font-semibold hover:text-light-a dark:hover:text-dark-a"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="transition-all font-semibold hover:text-light-a dark:hover:text-dark-a"
              href="projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="transition-all font-semibold hover:text-light-a dark:hover:text-dark-a"
              href="contact"
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
        className={`mobile-nav bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-lg ${
          isMenuOpen ? "open-menu" : "closed-menu"
        }`}
        onClick={handleMenuToggle}
      >
        <span className="absolute top-5 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
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
        <ul onClick={(e) => e.stopPropagation()}>
          <li
            onClick={() => {
              toggleDarkMode();
              setIsMenuOpen(false);
            }}
            className="flex justify-center cursor-pointer text-light-a dark:text-dark-a text-2xl transition ease-in duration-300 hover:scale-125"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </li>
          <li>
            <Link
              href="#home"
              className="text-light-txt dark:text-dark-txt hover:text-light-a dark:hover:text-dark-a transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-light-txt dark:text-dark-txt hover:text-light-a dark:hover:text-dark-a transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-light-txt dark:text-dark-txt hover:text-light-a dark:hover:text-dark-a transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-light-txt dark:text-dark-txt hover:text-light-a dark:hover:text-dark-a transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
