import Project from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}