import "styles/About.scss";

function About() {
  return (
    <div className="about-container" id='about'>
      <div className="about-content">
        <div className="image-side">
          <img src="/about-image.jpeg" alt="my-workspace" id="about-image" />
        </div>
        <div className="text-side">
          <h3>ABOUT ME</h3>
          <h4>
            A dedicated Front-end Developer <br /> based in Calgary, Alberta 📍
          </h4>
          <p>
            After graduating as a mechanical engineering student, I made a
            career change to computer science driven by my passion for a more
            creative and dynamic field of study. With a commitment to
            continuously improve my skills and knowledge, I am eager to
            contribute to the computer science community.{" "}
          </p>{" "}
          <p>
            {" "}
            Currently, I focus on web technologies like JavaScript, Python,
            React, and Next.js. Improving the comprehensive understanding of
            advanced data structures to enhance code efficiency and gain a
            comprehensive understanding latest web technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
