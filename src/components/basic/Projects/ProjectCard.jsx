import { PortfolioProjectHeading, PortfolioText, PortfolioButton } from "components/Reuse.Components";
import ProjectSubDescriptionCard from "./ProjectSubDescriptionCard";

const ProjectCard = ({ projectHeading, projectDescription, projectSubDescription, projectLink, projImg1, projImg2, mb0 }) => {
  return (
    <li className={(mb0) ? `projectCard row p-0 mb-0` : `projectCard row p-0`}>

      {/* text box */}
      <div className="col">
        <PortfolioProjectHeading class='projectCard__heading'>{projectHeading}</PortfolioProjectHeading>
        <PortfolioText class='projectCard__description'>{projectDescription}</PortfolioText>
        <ProjectSubDescriptionCard data={projectSubDescription} />
        <PortfolioButton externalLink class='projectCard__linkBtn' link={projectLink}>project link</PortfolioButton>
      </div>

      {/* img box */}
      <div className="col projectCard__imgBox">
        <img src={projImg1} className='projectCard__img projectCard__imgOne' alt="" />
        <img src={projImg2} className='projectCard__img projectCard__imgTwo' alt="" />
      </div>
    </li>
  )
}
export default ProjectCard;
