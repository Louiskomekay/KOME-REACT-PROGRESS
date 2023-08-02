import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
    const { isloading, projects } = useFetchProjects();
    console.log(isloading, projects);
    return (
        <h2>Projects</h2>
    )
}

export default Projects;