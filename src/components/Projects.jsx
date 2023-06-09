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
          img='Wish.png'
          description="Wish Whisper is a social networking platform focused on event organization.
           With features like event creation, integrated fundraising, and group/private live chats"
          stack={["React", "Express.js", "PostgreSQL", "SCSS"]}
          github="https://github.com/Heaven664/final-project"
          demo="https://youtu.be/tgCG9Fb9ORQ"
        />
        <ProjectItem
          title="Scheduler"
          img='Scheduler.png'
          description="The Interview Scheduler is a application for scheduling job interviews.
          With the Interview Scheduler,
          users can easily create and manage interview schedules and track candidate availability."
          stack={["React", "Express.js", "PostgreSQL", "SCSS"]}
          github="https://github.com/Heaven664/scheduler"
          demo="https://youtu.be/h_KxW8L2O90"
        />
        <ProjectItem
          title="My Blog"
          img='Blog.png'
          description="This project is a versatile blog application that allows users to read and create posts, 
          while also providing the ability to enhance their content by attaching images."
          stack={["Flask", "Jinja", "SQLite"]}
          github="https://github.com/Heaven664/my-blog"
          demo="https://youtu.be/r8cbJpA9-bQ"
        />
      </div>
    </div>
  );
}

export default Projects;
