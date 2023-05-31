import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "styles/Sidebar.scss";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="exit-button" onClick={props.closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Intro</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
