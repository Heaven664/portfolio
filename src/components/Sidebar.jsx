import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "styles/Sidebar.scss";

function Sidebar(props) {
  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    props.closeMenu();
  };

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="exit-button" onClick={props.closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul>
          <li onClick={(e) => handleSectionClick(e, "home")}>Home</li>
          <li onClick={(e) => handleSectionClick(e, "about")}>About</li>
          <li onClick={(e) => handleSectionClick(e, "projects")}>Projects</li>
          <li onClick={(e) => handleSectionClick(e, "contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
