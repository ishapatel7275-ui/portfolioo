import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <p className="section-label">Contact Me</p>
        <h2>Let’s build something amazing together</h2>
        <p>Feel free to reach out for collaborations, projects, or just a friendly hello.</p>

        <div className="contact-info">
          <a href="mailto:ishapatel7275@gmail.com">ishapatel7275@gmail.com</a>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;