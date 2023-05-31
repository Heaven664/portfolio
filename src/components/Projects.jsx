import ProjectItem from "components/ProjectItem";

import "styles/Projects.scss";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-content">
        <h3 className="projects-title">Portfolio</h3>
        <h4 className="projects-more-description">
          Each project is a unique piece of development 🧩
        </h4>
        <ProjectItem
          title="Wish Whisper"
          description="Wish Whisper is a social networking platform focused on event organization.
           With features like event creation, integrated fundraising, and group/private live chats"
          stack={["React", "Express.js", "PostgreSQL", "SCSS"]}
          github="https://github.com/Heaven664/final-project"
        />
        <ProjectItem
          title="Scheduler"
          description="The Interview Scheduler is a application for scheduling job interviews.
          With the Interview Scheduler,
          users can easily create and manage interview schedules and track candidate availability."
          stack={["React", "Express.js", "PostgreSQL", "SCSS"]}
          github="https://github.com/Heaven664/scheduler"
        />
        <ProjectItem
          title="My Blog"
          description="This project is a versatile blog application that allows users to read and create posts, 
          while also providing the ability to enhance their content by attaching images."
          stack={["Flask", "Jinja", "SQLite"]}
          github="https://github.com/Heaven664/my-blog"
        />
      </div>
    </div>
  );
}

export default Projects;
