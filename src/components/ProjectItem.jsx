import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "styles/ProjectItem.scss";

function ProjectItem(props) {
  return (
    <div className="project-container">
      <a href={props.demo} target="_blank" rel="noreferrer">
        <img src={props.img} className="project-image" alt={props.title} />
      </a>
      <div className="project-info">
        <h4 className="project-title">{props.title}</h4>
        <p className="project-description">{props.description}</p>
        <ul className="project-stack">
          {props.stack.map((element) => (
            <li key={element}>
              <p> {element}</p>
            </li>
          ))}
        </ul>
        <div className="project-links">
          <a href={props.github} target="_blank" rel="noreferrer">
            <p>Code</p>
            <FontAwesomeIcon icon={faGithub} className="github-repo" />
          </a>
          <a href={props.demo} rel="noreferrer" target="_blank">
            <p>Demo</p>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="live-demo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
