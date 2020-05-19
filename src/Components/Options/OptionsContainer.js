import React, { useState, useContext } from "react";
import { Context } from "../../Store/context";

import "./OptionsContainer.css";
import OptionButton from "./OptionButton";

const OptionsContainer = () => {
  const { allPolls, dispatch, setSelectedFilter } = useContext(Context);

  const showAll = () => {
    dispatch({ type: "SHOW_ALL", payload: allPolls });
    setSelectedFilter("All");
  };
  const showApproval = () => {
    dispatch({ type: "SHOW_APPROVAL", payload: allPolls });
    setSelectedFilter("Trump Approval");
  };
  const showDPrimary = () => {
    dispatch({ type: "SHOW_DPRIMARY", payload: allPolls });
    setSelectedFilter("Democratic Party");
  };
  const showGenElection = () => {
    dispatch({ type: "SHOW_GEN_ELECTION", payload: allPolls });
    setSelectedFilter("Trump vs. Biden");
  };

  return (
    <div className="options-container">
      <OptionButton text="All" handleOnClick={showAll} />
      <OptionButton text="Trump Approval" handleOnClick={showApproval} />
      <OptionButton text="Democratic Party" handleOnClick={showDPrimary} />
      <OptionButton text="Trump vs. Biden" handleOnClick={showGenElection} />
    </div>
  );
};

export default OptionsContainer;
