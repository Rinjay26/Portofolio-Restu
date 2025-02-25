import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }} // Start from transparent and above
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
        viewport={{ once: false }} // Animate only once
        transition={{ duration: 0.8 }} // Animation duration
      >
        <h2>Welcome to My Portofolio</h2>
        <p>Showcasing Nothing, dont expect too much.</p>
      </motion.div>
    </section>
  );
}
