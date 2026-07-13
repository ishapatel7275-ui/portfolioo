import "./Skills.css";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import javascriptIcon from "../../assets/javascript.svg";
import reactIcon from "../../assets/react-icon.svg";
import javaIcon from "../../assets/java.svg";
import pythonIcon from "../../assets/python.svg";
import gitIcon from "../../assets/git.svg";

function Skills() {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Java", icon: javaIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Git", icon: gitIcon },
  ];

  return (
    <section id="skills" className="skills-section">
      <p className="section-label">My Skills</p>
      <h2>Tools and technologies I enjoy using</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;