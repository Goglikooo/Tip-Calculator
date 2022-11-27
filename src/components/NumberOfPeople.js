import React from "react";

export default function NumberOfPeople(props) {
  const {
    zeroText,
    person,
    setZeroText,
    numberOfPeopleMessage,
    setNumberOfPeopleMessage,
  } = props;
  return (
    <div>
      <div className="number-of-people">
        <div className="people-number">
          <p className="data-font">Number of People</p>
          {zeroText === 0 ? (
            <p className="data-font-error">Can't be zero</p>
          ) : null}
        </div>
        <img src={person} className="person-icon" alt="person-icon" />
        <input
          type="number"
          className="input-field"
          placeholder="0"
          value={numberOfPeopleMessage}
          onChange={(e) => {
            if (e.target.value > 0) {
              setZeroText(e.target.value);
              setNumberOfPeopleMessage(e.target.value);
            } else {
              setZeroText(0);
              setNumberOfPeopleMessage(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
}
