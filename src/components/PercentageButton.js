import React from "react";
import buttonCSS from "./PercentageButton.module.css";

export default function PercentageButton(props) {
  const {
    itemNumber,
    clicked,
    setClicked,
    setPercentageValue,
    setCustomInputValue,
    percentageResult,
    content,
  } = props;

  return (
    <div className="Percentage-div">
      <button
        className={
          clicked === itemNumber
            ? buttonCSS.buttonFixedClicked
            : buttonCSS.buttonFixed
        }
        onClick={() => {
          setClicked(itemNumber);
          setPercentageValue(percentageResult);
          setCustomInputValue("");
        }}
      >
        {content}
      </button>
    </div>
  );
}
