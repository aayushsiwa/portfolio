// import screenshot from "../static/screenshot.png";
import github from "../assets/github.svg";
import live from "../assets/live.svg";

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-[#f9f9f9] py-60 px-60 gap-20 font-[Poppins]"
        >
            <div>
                {/* card container */}
                <div className="px-2 py-20 w-full flex justify-center gap-2">
                    <div className="lg:w-1/2">
                        <div className=" h-96 overflow-hidden hover:overflow-auto lg:h-[40vh] rounded-b-none border lg:rounded-lg">
                            <img
                                src="https://raw.githubusercontent.com/aayushsiwa/jovian/master/api/static/screenshot.png"
                                className="project_screenshot"
                                alt="Project Screenshot"
                            />
                        </div>
                    </div>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl text-gray-800 font-bold">
                            Jovian Careers Website
                        </h2>
                        <p className="mt-4 text-gray-600">
                            A Job Offerings application for Jovian using Flask,
                            with MySQL on Aiven. This app streamlines the job
                            application process, making it easier for job
                            seekers to find and apply for positions, and for
                            companies to manage applications efficiently. By
                            integrating email notifications and hCaptcha for
                            security, it ensures a smooth and secure experience.
                            This application supports job seekers in finding
                            employment opportunities, thus contributing to
                            reducing unemployment and aiding in career growth,
                            ultimately benefiting society by connecting talent
                            with opportunities.
                        </p>
                        <div className="mt-8 flex justify-center gap-40">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/aayushsiwa/jovian"
                                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                            >
                                {/* <span>Code</span> */}
                                <img src={github} alt="github" />
                            </a>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://jovian-alpha.vercel.app"
                                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                            >
                                {/* <span>Live Demo</span> */}
                                <img src={live} alt="live demo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-2 py-20 w-full flex justify-center gap-2">
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl text-gray-800 font-bold">
                            Python Tutorials Website
                        </h2>
                        <p className="mt-4 text-gray-600">
                            A Tutorials application for new learners using
                            Django, with PostgresSQL on Render. This app
                            provides users with basic tutorials to various
                            fields in python programming.
                        </p>
                        <div className="mt-8 flex justify-center gap-40">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/aayushsiwa/python-tutorials"
                                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                            >
                                {/* <span>Code</span> */}
                                <img src={github} alt="github" />
                            </a>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://python-tutorials.vercel.app"
                                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                            >
                                {/* <span>Live Demo</span> */}
                                <img src={live} alt="live demo" />
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className=" h-96 overflow-hidden hover:overflow-auto lg:h-[40vh] rounded-b-none border lg:rounded-lg">
                            <img
                                src="https://raw.githubusercontent.com/aayushsiwa/python-tutorials/master/screenshot.png"
                                className="project_screenshot"
                                alt="Project Screenshot"
                            />
                        </div>
                    </div>
                </div>
                <div className="px-2 py-20 w-full flex justify-center gap-2">
                    <div className="lg:w-1/2">
                        <div className=" h-96 overflow-hidden hover:overflow-auto lg:h-[40vh] rounded-b-none border lg:rounded-lg">
                            <img
                                src="https://raw.githubusercontent.com/aayushsiwa/genietalks/master/screenshot.jpeg"
                                className="project_screenshot"
                                alt="Project Screenshot"
                            />
                        </div>
                    </div>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl text-gray-800 font-bold">
                            GenieTalks Chatbot
                        </h2>
                        <p className="mt-4 text-gray-600">
                            This project is a chat application that integrates
                            with Google's Generative AI model for intelligent
                            responses. Users can ask questions, receive
                            responses, and view their chat history. The project
                            demonstrates how to use Vite for the frontend and
                            Express.js for the backend, leveraging Google's
                            Generative AI for conversational capabilities.
                        </p>
                        <div className="mt-8 flex justify-center gap-40">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/aayushsiwa/genietalks"
                                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                            >
                                {/* <span>Code</span> */}
                                <img src={github} alt="github" />
                            </a>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://genietalks.vercel.app"
                                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
                            >
                                {/* <span>Live Demo</span> */}
                                <img src={live} alt="live demo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
