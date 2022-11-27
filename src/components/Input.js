import React from "react";
import InputCSS from "./Input.module.css";

export default function Input(props) {
  const {
    setResultValue,
    setClicked,
    image,
    styleIcon,
    totalAmount,
    setTotalAmount,
  } = props;
  return (
    <div>
      <p className={InputCSS.dataFont}>Bill</p>
      <img src={image} className={styleIcon} alt={`${image} icon`} />
      <input
        type="number"
        className={InputCSS.inputField}
        placeholder="0.00"
        min="1"
        step="any"
        required="required"
        value={totalAmount}
        onChange={(e) => {
          setResultValue(e.target.value);
          setClicked(0);
          setTotalAmount(e.target.value);
        }}
      />
    </div>
  );
}
