import "./Navbar.css";

function Navbar({ isDark, onToggle }) {
  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        Isha Patel
      </a>

      <div className="nav-actions">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="theme-toggle" onClick={onToggle} type="button">
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;