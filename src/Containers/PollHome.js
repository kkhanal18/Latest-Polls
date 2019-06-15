import React from "react";
import PollList from "../Components/PollsList";
import ButtonBar from "../Components/ButtonBar";

const PollHome = () => {
  return (
    <div>
      <ButtonBar />
      <PollList />
    </div>
  );
};

export default PollHome;
