import React, { useContext } from "react";
import { Context } from "../context";

import PollRow from "./PollRow";
import PollInfo from "./PollPage";

const PollList = () => {
  const [state] = useContext(Context);
  const { polls } = state;
  console.log("polls..", polls);
  if (polls === undefined || polls.length === 0) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return polls.map(poll => (
      <React.Fragment>
        <PollRow key={poll.id} poll={poll} />
      </React.Fragment>
    ));
  }
};

export default PollList;
