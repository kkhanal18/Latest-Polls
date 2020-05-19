import React, { useContext } from "react";
import { Context } from "../../Store/context";
import "./OptionButton.css";

const OptionButton = (props) => {
  const { selectedFilter } = useContext(Context);

  const getClassName = (text) => {
    if (text === selectedFilter) {
      return true;
    }
    return false;
  };

  const { text, handleOnClick } = props;
  return (
    <div
      className={
        getClassName(text) ? "option-button selected" : "option-button"
      }
      onClick={handleOnClick}
    >
      <span className="option-text">{props.text}</span>
    </div>
  );
};

export default OptionButton;
