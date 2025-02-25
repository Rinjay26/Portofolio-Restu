import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }} // Start from transparent and below
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
        viewport={{ once: false }} // Animate only once
        transition={{ duration: 0.8 }} // Animation duration
      >
        <motion.h2
          initial={{ opacity: 0, x: -100 }} // Start from left (off-screen)
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
          transition={{ duration: 0.8 }} // Duration for the fade-in and movement
        >
          About Me
        </motion.h2>
        <p>
          Hi, I'm Restu Putra Rinjani, a passionate web developer specializing
          in creating beautiful and functional websites. I hate coding, but i
          love designing, so i do both.
        </p>
      </motion.div>
    </section>
  );
}
