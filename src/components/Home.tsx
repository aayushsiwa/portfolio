import geo from "../assets/geo.svg";

export default function Home() {
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

    return (
        <section
            id="home"
            className="flex flex-col justify-center w-full h-screen bg-lightBg dark:bg-darkBg relative"
        >
            <div className="max-w-[80vw] mx-auto pb-10">
                <div className="flex flex-col justify-center items-center h-[65rem] gap-32 relative">
                    <div className="flex justify-center items-center gap-40 h-auto">
                        <div className="flex flex-col max-w-3xl relative">
                            <h1 className="text-6xl leading-[6rem] mb-8 mt-8 text-lightP dark:text-darkP font-bold">
                                Web Developer 👋🏼
                            </h1>

                            <p className="text-2xl leading-relaxed font-medium text-lightTxt dark:text-darkTxt font-[Mulish]">
                                Hi, I'm Aayush Siwach. A passionate Web Developer based in Bhubaneshwar, Odisha, India.{" "}
                                <a
                                    href="https://maps.app.goo.gl/uAToS3VVq35UnpTc8"
                                    className="inline-flex items-center text-lightA dark:text-darkA transition-colors"
                                >
                                    <img src={geo} alt="Location" className="h-6 w-6 inline" />
                                </a>
                            </p>
                            <span className="flex gap-5 my-10">
                                <a
                                    className="text-5xl"
                                    aria-label="linkedin"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/aayush-siwach"
                                >
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
                                        className="tabler-icon tabler-icon-brand-linkedin stroke-lightA dark:stroke-darkA hover:stroke-lightP dark:hover:stroke-darkP"
                                    >
                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M8 11l0 5" />
                                        <path d="M8 8l0 .01" />
                                        <path d="M12 16l0 -5" />
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                    </svg>
                                </a>
                                <a
                                    className="text-5xl"
                                    aria-label="github"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/aayushsiwa"
                                >
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
                                        className="stroke-lightA dark:stroke-darkA hover:stroke-lightP dark:hover:stroke-darkP"
                                    >
                                        <path
                                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                                        ></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <div className="hero-img border border-3 border-lightA dark:border-darkA" />
                    </div>
                    <div className="flex text-[1.7rem] text-lightP dark:text-darkP items-center">
                        <p className="me-28 pe-8 border-r-2 text-darkS dark:text-lightS border-[rgba(45, 46, 50, 0.5)] dark:border-[rgba(255, 255, 255, 0.5)] font-semibold font-[Mulish]">
                            Tech Stack
                        </p>
                        <div className="logos">
                            <ul className="list-none flex flex-wrap gap-4 gap-y-8">
                                {skills.map((skill) => (
                                    <li key={skill}>
                                        <img
                                            className="transition ease-in duration-300 hover:scale-125 hover:translate-y-[-1rem]"
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
        </section>
    );
}
