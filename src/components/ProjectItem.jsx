import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "styles/ProjectItem.scss";

function ProjectItem(props) {
  return (
    <div className="project-container">
      <img
        src="/project-dummy.jpeg"
        className="project-image"
        alt={props.title}
      />
      <div className="project-info">
        <h4 className="project-title">{props.title}</h4>
        <p className="project-description">{props.description}</p>
        <div className="project-stack">
          {props.stack.map((element) => (
            <p key={element}> {element}</p>
          ))}
        </div>
        <div className="project-links">
          <a href={props.github} target="_blank" rel="noreferrer">
            <p>Code</p>
            <FontAwesomeIcon icon={faGithub} className="github-repo" />
          </a>
          <a href="" rel="noreferrer" target="_blank">
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
