import React from "react";
import PollList from "../Components/PollsList";
import ButtonBar from "../Components/ButtonBar";
import Search from "../Components/Search";

// Poll home

const PollHome = () => {
  return (
    <div>
      <Search />
      <ButtonBar />
      <PollList />
    </div>
  );
};

export default PollHome;
