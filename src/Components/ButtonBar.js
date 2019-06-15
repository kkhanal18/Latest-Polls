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
      </button>
    </div>
  );
};

export default ButtonBar;
