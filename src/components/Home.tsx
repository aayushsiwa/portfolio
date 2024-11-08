import geo from "../assets/geo.svg";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
const skills = [
    "html",
    "css",
    "tailwind",
    "bootstrap",
    "svelte",
    "react",
    "next",
    "flask",
    "django",
    "nodejs",
    "ts",
    "js",
    "postgres",
    "mysql",
];
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-lightBg dark:bg-darkBg gap-32 relative">
            <div className="md:flex sm:flex-col md:flex-row items-center justify-center md:max-w-[90vw] w-full h-96">
                <div>
                    <p className="text-6xl leading-relaxed text-lightP dark:text-darkP font-bold">
                        Web Developer
                    </p>
                    <p className="text-2xl leading-relaxed font-medium text-lightTxt dark:text-darkTxt font-[Mulish] w-3/4">
                        Hi, I'm Aayush Siwach. A passionate Web Developer based
                        in Bhubaneshwar, Odisha, India.{" "}
                        <a
                            href="https://maps.app.goo.gl/uAToS3VVq35UnpTc8"
                            className="inline-flex items-center text-lightA dark:text-darkA transition-colors"
                        >
                            <img
                                src={geo}
                                alt="Location icon"
                                className="h-6 w-6 inline"
                            />
                        </a>
                    </p>
                    <span className="flex gap-5 my-10">
                        <a
                            className="text-5xl"
                            aria-label="LinkedIn"
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/aayush-siwach"
                        >
                            <CiLinkedin color="#b0dc99" size={38}/>
                        </a>
                        <a
                            className="text-5xl"
                            aria-label="GitHub"
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/aayushsiwa"
                        >
                            <FiGithub color="#b0dc99" size={38}/>
                        </a>
                    </span>
                </div>
                <div className="border-4 border-lightA dark:border-darkA bg-[url('https://avatars.githubusercontent.com/u/114244228?v=4')] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out animate-morph rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] max-w-[400px] h-[420px] md:w-96 md:h-96 w-[28rem] h-[28rem] sm:max-w-[28rem]" />
            </div>
            <div className="gap-16 text-lightP dark:text-darkP flex items-center sm:hidden md:flex mx-auto">
                <p className="pe-8 border-r-2 text-darkS dark:text-lightS border-lightA dark:border-darkA font-semibold font-[Mulish] text-3xl">
                    Tech Stack
                </p>
                <div>
                    <ul className="list-none flex flex-wrap items-center gap-4 gap-y-8">
                        {skills.map((skill) => (
                            <li key={skill}>
                                <img
                                    className="transition ease-in duration-300 hover:scale-125 hover:-translate-y-4 py-8"
                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                    alt={`${skill}-icon`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
