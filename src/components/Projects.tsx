import { useState, useEffect } from "react";
import Card from "./uiComponents/ProjectCard";
import projectData from "../../public/Projects.json"; // Import the JSON file

export default function Projects() {
    type Project = {
        title: string;
        description: string;
        imgSrc: string;
        githubLink: string;
        liveLink: string;
    };
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Simulate fetching data from the JSON file
        setProjects(projectData);
    }, []);
    return (
        <section
            id="projects"
            className="bg-lightBg dark:bg-darkBg py-20 px-10 md:px-20 lg:px-40 gap-20 font-[Poppins]"
        >
            <div className="flex items-center justify-between gap-4 gap-y-8 w-full p-4 flex-wrap">
                {projects.map((project, index) => (
                    <Card key={index} data={project} />
                ))}
            </div>
        </section>
    );
}
