import React from "react";

export default function Displaybox(props) {
  const {
    reset,
    result,
    resultValue,
    tipAmountPerPerson,
    zeroText,
    percentageValue,
  } = props;

  return (
    <div className="right-results">
      <div className="results">
        <div className="tip-amount-display">
          <div className="left-tip-amount">
            <h4 className="tip-person-h">Tip Amount</h4>
            <p className="tip-person">/ person</p>
          </div>
          {percentageValue > 0 && zeroText !== 0 ? (
            <h2
              className={
                tipAmountPerPerson > 999
                  ? "tip-amount-result-min"
                  : "tip-amount-result"
              }
            >
              ${tipAmountPerPerson}
            </h2>
          ) : (
            <h2 className="tip-amount-result">$0.00</h2>
          )}
        </div>
        <div className="tip-amount-display">
          <div className="left-tip-amount">
            <h4 className="tip-person-h">Total</h4>
            <p className="tip-person">/ person</p>
          </div>
          {resultValue > 0 && zeroText > 0 ? (
            <h2
              className={
                result > 999 ? "total-person-result-min" : "total-person-result"
              }
            >
              ${result}
            </h2>
          ) : (
            <h2 className="total-person-result">$0.00</h2>
          )}
        </div>
      </div>
      <button
        className="reset-button"
        onClick={() => {
          reset();
        }}
      >
        RESET
      </button>
    </div>
  );
}
