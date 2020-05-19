import React from "react";
import "./Navbar.css";

const Navbar = () => {
  // Will contain the navs
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-3">
        <span className="navbar-brand mb-0 h1 mx-auto">
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Latest Polls
          </a>
        </span>
      </nav>
      <div className="mx-auto" align="center">
        <span role="img" aria-label="builder">
          👷🏽‍
        </span>
        Built by <a href="https://github.com/kkhanal18">kkhanal18</a> |{" "}
        <span role="img" aria-label="plug">
          🔌
        </span>
        Powered by{" "}
        <a href="https://projects.fivethirtyeight.com/polls/polls.json">
          FiveThirtyEight
        </a>
      </div>
    </div>
  );
};

export default Navbar;
