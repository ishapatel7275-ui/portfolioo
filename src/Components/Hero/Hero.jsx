import "./Hero.css";
import profile from "../../assets/Photo.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Hello, I’m</p>
        <h1>Isha Patel</h1>
        <h2>Frontend Developer & Creative Web Designer</h2>
        <p>
          I’m passionate about turning ideas into beautiful, responsive websites that feel
          smooth, modern, and memorable. I enjoy creating interfaces that are not only
          visually appealing but also thoughtful and easy to use.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
          <a href="/resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
          <a href="https://github.com/ishapatel7275-ui/portfolio.git" target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitHub
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/isha-patel-5b8a11361" target="_blank" rel="noreferrer" className="social-link">
            in/isha-patel-5b8a11361
          </a>
          <a href="mailto:ishapatel7275@gmail.com" className="social-link">
            ishapatel7275@gmail.com
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow"></div>
        <img src={profile} alt="Isha Patel" className="hero-img" />
      </div>
    </section>
  );
}

export default Hero;
