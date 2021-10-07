import { Container, PortfolioMainHeading } from "components/Reuse.Components";
import ProjectCard from "./ProjectCard";
import projectsData from "./projects.data";

const Projects = () => {
    return (
        <section id="projects">
            <Container>
                <PortfolioMainHeading class='projects__mainHeading text-uppercase'>projects</PortfolioMainHeading>
                <ul className='projects__projectList px-0 mb-0'>
                    {projectsData.map((dataObj, index) => <ProjectCard mb0={(index === (projectsData.length - 1)) ? true : false} {...dataObj} />)}
                </ul>
            </Container>
        </section>
    )
}
export default Projects;
