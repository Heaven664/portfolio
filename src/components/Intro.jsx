import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "styles/Intro.scss";

function About() {
  return (
    <div className="about">
      <div
        className="image"
        style={{ backgroundImage: "url(/my-photo.jpg)" }}
      />
      <div className="about-text">
        <div className="about-title">
          <h1>Full-Stack Developer</h1>
          <img src="/hand.png" alt="waving-hand" />
        </div>
        <p>
          Hi, I'm Omar Hamid. A passionate Full-Stack Web Developer based in
          Calgary, Alberta 📍
        </p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/omarhamid664/" target="_blank" id="linkedIn-link">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon"/>
          </a>
          <a href="https://github.com/Heaven664" target="_blank" id="github-link">
          <FontAwesomeIcon icon={faGithubSquare} className="social-icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
