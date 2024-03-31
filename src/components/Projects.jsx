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
          title="Messenger"
          img="/Messenger.png"
          description="Messenger allows users to create accounts, communicate with each other in real-time, upload images and customize their privacy settings"
          stack={["TypeScript", "Nest.js", "Next.js", "MongoDB"]}
          github="https://github.com/Heaven664/messenger"
          demo="https://messenger664.vercel.app/"
        />
        <ProjectItem
          title="Nutrimeals"
          img="/Meals.avif"
          description="A fully responsive e-commerce website for purchasing various meals."
          stack={["TypeScript", "Next.js", "React.js", "MongoDB"]}
          github="https://github.com/Heaven664/nutrimeals"
          demo="https://nutrimeals.vercel.app/"
        />
        <ProjectItem
          title="Scheduler"
          img="/Scheduler.png"
          description="The Interview Scheduler is a application for scheduling job interviews.
          With the Interview Scheduler,
          users can easily create and manage interview schedules and track candidate availability."
          stack={["React", "Express.js", "PostgreSQL", "SCSS"]}
          github="https://github.com/Heaven664/scheduler"
          demo="https://youtu.be/h_KxW8L2O90"
        />
        <ProjectItem
          title="My Blog"
          img="/Blog.png"
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
