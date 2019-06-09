import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-3">
        <span className="navbar-brand mb-0 h1 mx-auto">Latest Polls</span>
      </nav>
      <div class="mx-auto" align="center">
        👷🏽‍Built by <a href="https://github.com/kkhanal18">kkhanal18</a> |{" "}
        🔌Powered by{" "}
        <a href="https://projects.fivethirtyeight.com/polls/polls.json">
          FiveThirtyEight
        </a>
      </div>
    </div>
  );
};

export default Navbar;
