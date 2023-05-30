import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "styles/Intro.scss";

function About() {
  const skillsIcons = [
    {
      img: "js-icon",
      title: "JavaScript",
    },
    {
      img: "python-icon",
      title: "Python",
    },
    {
      img: "ruby-icon",
      title: "Ruby",
    },
    {
      img: "c-icon",
      title: "C",
    },
    {
      img: "react-icon",
      title: "React",
    },
    {
      img: "nodejs-icon",
      title: "Node.js",
    },
    {
      img: "sqlite-icon",
      title: "SQLite",
    },
    {
      img: "psql-icon",
      title: "PostgreSQL",
    },
    {
      img: "expressjs-icon",
      title: "Express",
    },
    {
      img: "flask-icon",
      title: "Flask",
    },
    {
      img: "rails-icon",
      title: "Rails",
    },
    {
      img: "jquery-icon",
      title: "jQuery",
    },
    {
      img: "jest-icon",
      title: "Jest",
    },
    {
      img: "mocha-icon",
      title: "Mocha",
    },
    {
      img: "cypress-icon",
      title: "Cypress",
    },
    {
      img: "html-icon",
      title: "HTML5",
    },
    {
      img: "css-icon",
      title: "CSS3",
    },
    {
      img: "sass-icon",
      title: "SCSS",
    },
  ];

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
            Hi, I'm Omar Hamid. A passionate Full-Stack Web Developer based in
            Calgary, Alberta 📍
          </p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/omarhamid664/"
              target="_blank"
              id="linkedIn-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Heaven664"
              target="_blank"
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
                    // style={{width: "48px"}}
                    src={`/${icon.img}.png`}
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
