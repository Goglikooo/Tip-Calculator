import React from "react";

export default function CustomButton(props) {
  const {
    setCustomInputValue,
    setPercentageValue,
    setClicked,
    customInputValue,
  } = props;
  return (
    <div>
      <input
        type="number"
        className="button-custom"
        placeholder="Custom"
        min="1"
        step="any"
        value={customInputValue}
        onChange={(e) => {
          setClicked(0);
          setPercentageValue(e.target.value);
          setCustomInputValue(e.target.value);
        }}
      />
    </div>
  );
}
