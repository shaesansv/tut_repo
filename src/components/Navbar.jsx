import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ theme, setTheme }) => {
  const toogle_mood = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <div>
        <FontAwesomeIcon
          icon={faGraduationCap}
          style={{ color: "#050505", width: "100px", height: "100px" }}
        />
        <h1>Tutor Hub</h1>
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>Subjects</li>
          <li>Tutor</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="search-box">
        <input type="search" placeholder="Search" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#0a0a0a" }}
        />
      </div>

      <FontAwesomeIcon
        icon={theme === "light" ? faSun : faMoon}
        className="toggle_icon"
        onClick={() => {
          toogle_mood();
        }}
        style={{ color: "#0a0a0a" }}
      />
    </div>
  );
};

export default Navbar;
