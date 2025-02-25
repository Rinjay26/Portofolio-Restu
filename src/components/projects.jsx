import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "website pertama yang saya buat (responsive)",
      url: "https://portofolio1-mauve.vercel.app/",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Website yang dibuat untuk Program Kreativitas Mahasiswa",
      url: "https://pkm-rinjays-projects.vercel.app/",
    },
    {
      id: 3,
      name: "Project 3",
      description: "belom ada project nya kocak kwkwkwkw :D",
      url: "https://example3.com",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -100 }} // Start from left (off-screen)
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
          transition={{ duration: 0.8 }} // Duration for the fade-in and movement
        >
          My Projects
        </motion.h2>
        <div className="project-list">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              initial={{ opacity: 0, y: 50 }} // Start from transparent and below
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
              viewport={{ once: false }} // Animate only once
              transition={{ duration: 0.6, delay: project.id * 0.2 }} // Staggered animation
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
