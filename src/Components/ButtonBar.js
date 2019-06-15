import React, { useContext, useState, useEffect, useReducer } from "react";
import { Context, filterReducer } from "../Store/context";

const ButtonBar = () => {
  const { allPolls, dispatch } = useContext(Context);

  const showAll = () => {
    dispatch({ type: "SHOW_ALL", payload: allPolls });
  };
  const showApproval = () => {
    dispatch({ type: "SHOW_APPROVAL", payload: allPolls });
  };
  console.log("in button bar");
  return (
    <div class="mb-2">
      <button class="btn btn-primary btn-sm" name="all" onClick={showAll}>
        All
      </button>{" "}
      <button
        class="btn btn-primary btn-sm"
        name="trump approval"
        onClick={showApproval}
      >
        Trump Approval
      </button>
    </div>
  );
};

export default ButtonBar;
