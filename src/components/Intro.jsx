import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import skillsIcons from "helpers/skills";

import "styles/Intro.scss";

function About() {
  return (
    <div className="intro-container">
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
            Hi, I'm Omar. A passionate Full-Stack Web Developer based in
            Calgary, Alberta 📍
          </p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/omarhamid664/"
              target="_blank"
              rel="noreferrer"
              id="linkedIn-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Heaven664"
              target="_blank"
              rel="noreferrer"
              id="github-link"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </div>
          <div className="tech-stack">
            <p>Tech Stack</p>
            <ul>
              {skillsIcons.map((icon) => (
                <li key={icon.title}>
                  <img
                    src={`/skills/${icon.img}.png`}
                    title={icon.title}
                    alt={icon.img}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
