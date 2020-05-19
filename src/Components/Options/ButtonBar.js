import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Store/context";

import "./ButtonBar.css";
import OptionButton from "./OptionButton";
import Search from "../Search/Search";

const ButtonBar = () => {
  const {
    allPolls,
    dispatch,
    setSelectedFilter,
    selectedFilter,
    setFilteredPolls,
  } = useContext(Context);

  const handleOnClick = (str) => {
    if (str === "All") {
      setFilteredPolls(allPolls);
      setSelectedFilter("All");
    }
    if (str === "Trump Approval") {
      setFilteredPolls(allPolls.filter((e) => e.type === "trump-approval"));
      setSelectedFilter("Trump Approval");
    }
    if (str === "Democratic Party") {
      setFilteredPolls(
        allPolls.filter((e) => e.type === "president-primary-d")
      );
      setSelectedFilter("Democratic Party");
    }
    if (str === "Trump vs. Biden") {
      setFilteredPolls(allPolls.filter((e) => e.type === "generic-ballot"));
      setSelectedFilter("Trump vs. Biden");
    }
    sethide(true);
  };

  const [hide, sethide] = useState(true);

  return (
    <div className="bar-container">
      <div className="dropdown-container">
        <span>
          view: <span id="filter">{selectedFilter}</span>
        </span>
        <span className="icon">
          <i
            className="fas fa-sort-down"
            onClick={() => {
              sethide(!hide);
            }}
          ></i>
        </span>

        <div className={`button-bar-container ${hide ? "hide" : ""}`}>
          <OptionButton text="All" handleOnClick={() => handleOnClick("All")} />
          <OptionButton
            text="Trump Approval"
            handleOnClick={() => handleOnClick("Trump Approval")}
          />
          <OptionButton
            text="Democratic Party"
            handleOnClick={() => handleOnClick("Democratic Party")}
          />
          <OptionButton
            text="Trump vs. Biden"
            handleOnClick={() => handleOnClick("Trump vs. Biden")}
          />
        </div>
      </div>

      <Search />
    </div>
  );
};

export default ButtonBar;
