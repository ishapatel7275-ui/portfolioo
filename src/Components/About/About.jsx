import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <p className="section-label">About Me</p>
        <h2>Creating thoughtful digital experiences with creativity and purpose</h2>
        <p>
          I’m Isha Patel, a frontend developer who loves blending design, technology, and
          storytelling to build websites that leave a lasting impression. I enjoy crafting
          clean interfaces, writing thoughtful code, and turning ideas into experiences that
          feel both elegant and effortless.
        </p>

        <div className="about-highlights">
          <div className="about-item">
            <strong>Design-Focused</strong>
            <span>Clean visuals with strong user experience</span>
          </div>
          <div className="about-item">
            <strong>User-Centered</strong>
            <span>Built for clarity, comfort, and engagement</span>
          </div>
          <div className="about-item">
            <strong>Always Learning</strong>
            <span>Growing with modern web technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;