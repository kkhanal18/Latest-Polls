import React, { useContext } from "react";
import { Context } from "../context";

import PollRow from "./PollRow";
import PollInfo from "./PollPage";

const PollList = () => {
  const { filteredPolls } = useContext(Context);
  console.log("filtered polls ->", filteredPolls);
  if (filteredPolls === undefined || filteredPolls.length === 0) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return filteredPolls.map(poll => (
      <React.Fragment>
        <PollRow key={poll.id} poll={poll} />
      </React.Fragment>
    ));
  }
};

export default PollList;
