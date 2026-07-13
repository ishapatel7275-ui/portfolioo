import "./Projects.css";
import portfolioPreview from "../../assets/project-portfolio.svg";
import todoPreview from "../../assets/project-todo.svg";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern and fully responsive personal portfolio built with React, HTML, CSS, and JavaScript.",
      tags: ["React", "CSS", "UI"],
      image: portfolioPreview,
    },
    {
      title: "Todo App",
      description:
        "A clean task manager that helps users add, edit, and organize daily tasks with ease.",
      tags: ["React", "State", "Responsive"],
      image: todoPreview,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <p className="section-label">My Projects</p>
      <h2>Selected work I’m proud of</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;