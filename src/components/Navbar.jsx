import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import "styles/Navbar.scss";

function Navbar(props) {
  return (
    <div className="navbar">
      <p className="navbar-hero-name">Omar Hamid</p>
      <div className="hamburger-menu">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
          <li className="nav-handler" onClick={props.openMenu}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
