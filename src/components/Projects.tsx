import github from "../assets/github.svg";
import live from "../assets/live.svg";

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-lightBg dark:bg-darkBg py-20 px-10 md:px-20 lg:px-40 gap-20 font-[Poppins]"
        >
            <div>
                {/* Card Container */}
                {[
                    {
                        title: "Jovian Careers Website",
                        description: "A Job Offerings application for Jovian using Flask, with MySQL on Aiven. This app streamlines the job application process, making it easier for job seekers to find and apply for positions, and for companies to manage applications efficiently. By integrating email notifications and hCaptcha for security, it ensures a smooth and secure experience.",
                        imgSrc: "https://raw.githubusercontent.com/aayushsiwa/jovian/master/api/static/screenshot.png",
                        githubLink: "https://github.com/aayushsiwa/jovian",
                        liveLink: "https://jovian-alpha.vercel.app",
                    },
                    {
                        title: "Python Tutorials Website",
                        description: "A Tutorials application for new learners using Django, with PostgresSQL on Render. This app provides users with basic tutorials to various fields in python programming.",
                        imgSrc: "https://raw.githubusercontent.com/aayushsiwa/python-tutorials/master/screenshot.png",
                        githubLink: "https://github.com/aayushsiwa/python-tutorials",
                        liveLink: "https://python-tutorials.vercel.app",
                    },
                    {
                        title: "GenieTalks Chatbot",
                        description: "This project is a chat application that integrates with Google's Generative AI model for intelligent responses. Users can ask questions, receive responses, and view their chat history. The project demonstrates how to use Vite for the frontend and Express.js for the backend, leveraging Google's Generative AI for conversational capabilities.",
                        imgSrc: "https://raw.githubusercontent.com/aayushsiwa/genietalks/master/screenshot.jpeg",
                        githubLink: "https://github.com/aayushsiwa/genietalks",
                        liveLink: "https://genietalks.vercel.app",
                    },
                ].map((project, index) => (
                    <div className="px-2 py-20 w-full flex justify-center gap-2" key={index}>
                        {index % 2 === 0 ? (
                            <>
                                <div className="lg:w-1/2">
                                    <div className="h-96 overflow-hidden hover:overflow-auto lg:h-[40vh] rounded-b-none border lg:rounded-lg">
                                        <img
                                            src={project.imgSrc}
                                            className="project_screenshot"
                                            alt="Project Screenshot"
                                        />
                                    </div>
                                </div>
                                <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                                    <h2 className="text-3xl text-lightTxt dark:text-darkTxt font-bold">
                                        {project.title}
                                    </h2>
                                    <p className="mt-4 text-lightP dark:text-darkP">
                                        {project.description}
                                    </p>
                                    <div className="mt-8 flex justify-center gap-40">
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            href={project.githubLink}
                                            className="flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                                        >
                                            <img src={github} alt="github" />
                                        </a>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            href={project.liveLink}
                                            className="flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                                        >
                                            <img src={live} alt="live demo" />
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                                    <h2 className="text-3xl text-lightTxt dark:text-darkTxt font-bold">
                                        {project.title}
                                    </h2>
                                    <p className="mt-4 text-lightP dark:text-darkP">
                                        {project.description}
                                    </p>
                                    <div className="mt-8 flex justify-center gap-40">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={project.githubLink}
                                            className="flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                                        >
                                            <img src={github} alt="github" />
                                        </a>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            href={project.liveLink}
                                            className="flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                                        >
                                            <img src={live} alt="live demo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="h-96 overflow-hidden hover:overflow-auto lg:h-[40vh] rounded-b-none border lg:rounded-lg">
                                        <img
                                            src={project.imgSrc}
                                            className="project_screenshot"
                                            alt="Project Screenshot"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
