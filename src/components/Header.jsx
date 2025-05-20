import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">RJ Terps</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/our-work">Research</Link></li>
          <li><Link to="/issues">Issues</Link></li>
          <li><Link to="/take-action">Take Action</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
