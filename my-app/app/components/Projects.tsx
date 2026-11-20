import ProjectCard from "./ProjectCard";
import Project from "../types/project";
import projects from "../data.json";

export default function Projects() {
    return (
        <>
            <div>
                <h2>Projects</h2>
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>
                            <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}