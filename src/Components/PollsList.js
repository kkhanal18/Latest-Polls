import React, { useContext } from "react";
import { Context } from "../Store/context";

import PollRow from "./PollRow";

const PollList = () => {
  const { filteredPolls } = useContext(Context);

  // useEffect(() => {
  //   dispatch({ type: "SHOW_ALL", payload: allPolls });
  // });

  // console.log("filtered polls in poll list ->", filteredPolls);
  if (filteredPolls === undefined || filteredPolls.length === 0) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
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
