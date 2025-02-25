import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Rinjay</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
