import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import "styles/Navbar.scss";

function Navbar(props) {
  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <p className="navbar-hero-name">Omar Hamid</p>
      <div className="hamburger-menu">
        <ul>
          <li className="nav-item" onClick={(e) => handleSectionClick(e, "home")}>
            Home
          </li>
          <li className="nav-item" onClick={(e) => handleSectionClick(e, "about")}>
            About
          </li>
          <li className="nav-item" onClick={(e) => handleSectionClick(e, "projects")}>
            Projects
          </li>
          <li className="nav-item" onClick={(e) => handleSectionClick(e, "contact")}>
            Contact
          </li>
          <li className="nav-handler" onClick={props.openMenu}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
