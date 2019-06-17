import React, { useContext } from "react";
import { Context } from "../Store/context";

const ButtonBar = () => {
  const { allPolls, dispatch } = useContext(Context);

  const showAll = () => {
    dispatch({ type: "SHOW_ALL", payload: allPolls });
  };
  const showApproval = () => {
    dispatch({ type: "SHOW_APPROVAL", payload: allPolls });
  };
  const showDPrimary = () => {
    dispatch({ type: "SHOW_DPRIMARY", payload: allPolls });

    console.log("clicked showDPrimary");
  };
  const showGenElection = () => {
    dispatch({ type: "SHOW_GEN_ELECTION", payload: allPolls });

    console.log("clicked showGenElection");
  };
  return (
    <div className="mb-2">
      <button className="btn btn-primary btn-sm" name="all" onClick={showAll}>
        All
      </button>{" "}
      <button
        className="btn btn-primary btn-sm"
        name="trump approval"
        onClick={showApproval}
      >
        Trump Approval
      </button>{" "}
      <button
        className="btn btn-primary btn-sm"
        name="democratic primary"
        onClick={showDPrimary}
      >
        Democratic Primary
      </button>{" "}
      <button
        className="btn btn-primary btn-sm"
        name="general election"
        onClick={showGenElection}
      >
        General Election
      </button>
    </div>
  );
};

export default ButtonBar;
