import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProblemSolving from "./components/ProblemSolving";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ProblemSolving />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
