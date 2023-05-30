import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import "styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar-hero-name">Omar Hamid</p>
      <div>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </div>
    </div>
  );
}

export default Navbar;
