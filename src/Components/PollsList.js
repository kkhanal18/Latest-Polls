import React, { useContext, useEffect } from "react";
import { Context } from "../Store/context";

import PollRow from "./PollRow";
import PollInfo from "./PollPage";

const PollList = () => {
  const { filteredPolls } = useContext(Context);

  // useEffect(() => {
  //   dispatch({ type: "SHOW_ALL", payload: allPolls });
  // });

  console.log("filtered polls in poll list ->", filteredPolls);
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
