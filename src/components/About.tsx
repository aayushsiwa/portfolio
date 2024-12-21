import emoji from "../assets/working-emoji.png";
import workpic from "../assets/work.jpg";
import text from "../assets/text.svg";

const frontend = ["css", "tailwind", "bootstrap", "svelte", "react", "next"];

const backend = [
    "django",
    "flask",
    "fastapi",
    "nodejs",
    "express",
    "mongodb",
    "postgres",
    "sqlite",
    "mysql",
    "postman",
    "supabase",
    "firebase",
];

const tools = [
    "vscode",
    "git",
    "github",
    "bash",
    "aws",
    "docker",
    "vercel",
    "vite",
    "figma",
];

const languages = ["js", "ts", "html", "css", "c", "cpp", "python", "java"];

export default function About() {
    return (
        <section
            className="bg-lightBg2 dark:bg-darkBg2 h-screen flex flex-col"
            id="about"
        >
            <div className="max-w-[107rem] mx-auto pb-10">
                <div className="flex justify-center pt-24 h-[65rem] gap-40 relative">
                    <div
                        className="relative w-1/2 h-[35rem] rounded-3xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${workpic})` }}
                    >
                        <img
                            src={emoji}
                            alt="emoji"
                            className="absolute z-10 w-24 -bottom-8 -right-8"
                        />
                        <img
                            src={text}
                            alt="text"
                            className="absolute w-[19rem] animate-rotate hover:bg-lightS rounded-full -bottom-40 -right-32 bg-lightBg dark:bg-darkBg dark:hover:bg-darkS"
                        />
                    </div>
                    <div className="w-1/2">
                        <div className="pb-4">
                            <h3 className="text-[1.7rem] text-lightA dark:text-darkA font-bold mb-4 ">
                                About
                            </h3>
                            <p className="text-[1.7rem] font-[Mulish] text-lightP dark:text-darkTxt font-medium leading-9">
                                Senior at KIIT with a
                                passion for development and a strong foundation
                                in modern frameworks. Eager to bring my
                                technical expertise, innovative mindset, and
                                adaptability to a dynamic software engineering
                                role in a cutting-edge tech environment.
                            </p>
                        </div>
                        <div>
                            <div className="text-lightP dark:text-darkP flex items-center sm:hidden md:flex mx-auto">
                                <p className="pe-4 border-r-2 text-darkS dark:text-lightS border-lightA dark:border-darkA font-semibold font-[Mulish] text-3xl">
                                    Languages
                                </p>
                                <div>
                                    <ul className=" ps-4 list-none flex flex-wrap items-center">
                                        {languages.map((skill) => (
                                            <li key={skill}>
                                                <img
                                                    className="transition ease-in duration-300 hover:scale-100 scale-75 hover:-translate-y-2 py-2"
                                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                                    alt={`${skill}-icon`}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="text-lightP dark:text-darkP flex items-center sm:hidden md:flex mx-auto">
                                <p className="pe-4 border-r-2 text-darkS dark:text-lightS border-lightA dark:border-darkA font-semibold font-[Mulish] text-3xl">
                                    Frontend
                                </p>
                                <div>
                                    <ul className="ps-4 list-none flex flex-wrap items-center">
                                        {frontend.map((skill) => (
                                            <li key={skill}>
                                                <img
                                                    className="transition ease-in duration-300 hover:scale-100 scale-75 hover:-translate-y-2 py-2"
                                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                                    alt={`${skill}-icon`}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className=" text-lightP dark:text-darkP flex items-center sm:hidden md:flex mx-auto">
                                <p className="pe-4 border-r-2 text-darkS dark:text-lightS border-lightA dark:border-darkA font-semibold font-[Mulish] text-3xl">
                                    Backend
                                </p>
                                <div>
                                    <ul className="ps-4 list-none flex flex-wrap items-center">
                                        {backend.map((skill) => (
                                            <li key={skill}>
                                                <img
                                                    className="transition ease-in duration-300 hover:scale-100 scale-75 hover:-translate-y-2 py-2"
                                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                                    alt={`${skill}-icon`}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="text-lightP dark:text-darkP flex items-center sm:hidden md:flex mx-auto">
                                <p className="pe-4 border-r-2 text-darkS dark:text-lightS border-lightA dark:border-darkA font-semibold font-[Mulish] text-3xl">
                                    Tools
                                </p>
                                <div>
                                    <ul className="ps-4 list-none flex flex-wrap items-center">
                                        {tools.map((skill) => (
                                            <li key={skill}>
                                                <img
                                                    className="transition ease-in duration-300 hover:scale-100 scale-75 hover:-translate-y-2 py-2"
                                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                                    alt={`${skill}-icon`}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
