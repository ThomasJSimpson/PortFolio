import educationIcon from "../assets/icones/education-white.png";

const ProjectType = ({ type }) => {
  return (
    <div className="project-type">
      <img className="icon" src={educationIcon} />
      <p>{type}</p>
    </div>
  );
};

export default ProjectType;
