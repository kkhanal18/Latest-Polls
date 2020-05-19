import React from "react";
import PollList from "../Components/PollsList/PollsList";
import ButtonBar from "../Components/Options/ButtonBar";
import DataPlot from "../Components/DataPlot/DataPlot";

const PollHome = () => {
  return (
    <div>
      <DataPlot />
      <ButtonBar />
      <PollList />
    </div>
  );
};

export default PollHome;
