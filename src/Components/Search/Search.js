import { Context } from "../../Store/context";
import React, { useState, useContext, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const { allPolls, setFilteredPolls, setSelectedFilter } = useContext(Context);
  const handleOnChange = (event) => {
    debugger;
    setFilteredPolls(
      allPolls.filter((poll) =>
        poll.pollster.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    setSelectedFilter("All");
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="search poll" onChange={handleOnChange} />
      <i id="icon" className="search"></i>
    </div>
  );
};

export default Search;
