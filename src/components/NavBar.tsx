import { useState, useEffect } from "react";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";


export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check for dark mode preference on initial load
    useEffect(() => {
      const darkModePreference = localStorage.getItem('darkMode');
      if (darkModePreference === 'enabled') {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true);
      } else {
          document.documentElement.classList.remove('dark');
          setIsDarkMode(false);
      }
  }, []);

  const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
      const newDarkMode = !isDarkMode;
      setIsDarkMode(newDarkMode);
      document.documentElement.classList.toggle("dark", newDarkMode);
      localStorage.setItem('darkMode', newDarkMode ? 'enabled' : 'disabled');
  };

    return (
        <>
            <nav
                className="w-full h-auto py-[25px] ps-[40px] pe-[50px] flex justify-between fixed bg-lightBg dark:bg-darkBg top-0 left-0 z-10 align-middle shadow-md dark:shadow-sm shadow-lightP dark:shadow-darkP text-[1.7rem]"
            >
                <a
                    className="text-lightTxt dark:text-darkTxt font-extrabold text-4xl"
                    href="#home"
                >
                    <h3>Aayush.is-a.dev</h3>
                </a>
                <ul className="flex gap-8 dark:text-darkP">
                    <li>
                        <a
                            className="transition-all font-semibold hover:text-lightA dark:hover:text-darkA"
                            href="#home"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="transition-all font-semibold hover:text-lightA dark:hover:text-darkA"
                            href="#about"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="transition-all font-semibold hover:text-lightA dark:hover:text-darkA"
                            href="#projects"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="transition-all font-semibold hover:text-lightA dark:hover:text-darkA"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </li>
                    <li>
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
                            className="mobile-menu cursor-pointer"
                            onClick={handleMenuToggle}
                        >
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </li>
                    <li>
                        <button onClick={toggleDarkMode}>
                            <img src={isDarkMode ? light : dark} alt="Toggle Dark Mode" className="h-8" />
                        </button>
                    </li>
                </ul>
            </nav>
            <div
                className={`mobile-nav ${isMenuOpen ? "open-menu" : "closed-menu"}`}
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
                        className="tabler-icon tabler-icon-x cursor-pointer"
                    >
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </span>
                <ul>
                    <li>
                        <a href="#home" className="text-lightTxt dark:text-darkTxt">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="text-lightTxt dark:text-darkTxt">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-lightTxt dark:text-darkTxt">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-lightTxt dark:text-darkTxt">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
