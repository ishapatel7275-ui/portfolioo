import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app-shell ${darkMode ? "" : "light-theme"}`}>
      <Navbar isDark={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;