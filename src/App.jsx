import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
