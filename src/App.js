import "./App.css";
import person from "./icon-person.svg";
import { useState } from "react";
import PercentageButton from "./components/PercentageButton.js";
import Input from "./components/Input.js";
import dollar from "./icon-dollar.svg";
import Displaybox from "./components/Displaybox";
import NumberOfPeople from "./components/NumberOfPeople";
import CustomButton from "./components/CustomButton";

function App() {
  const [clicked, setClicked] = useState(null);
  const [zeroText, setZeroText] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const [percentageValue, setPercentageValue] = useState(0);
  const [customInputValue, setCustomInputValue] = useState("");
  const [numberOfPeopleMessage, setNumberOfPeopleMessage] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const tipAmount = ((resultValue * percentageValue) / 100).toFixed(2);
  const items = [
    { itemNumber: 1, percentageResult: 5, content: "5%" },
    { itemNumber: 2, percentageResult: 10, content: "10%" },
    { itemNumber: 3, percentageResult: 15, content: "15%" },
    { itemNumber: 4, percentageResult: 25, content: "25%" },
    { itemNumber: 5, percentageResult: 50, content: "50%" },
  ];

  const tipAmountPerPerson = (tipAmount / zeroText).toFixed(2);
  const result = (
    (parseInt(resultValue) + parseInt(tipAmount)) /
    parseInt(zeroText)
  ).toFixed(2);

  function reset() {
    setClicked(0);
    setCustomInputValue("");
    setResultValue(0);
    setZeroText(0);
    setNumberOfPeopleMessage("");
    setTotalAmount("");
  }

  return (
    <div className="main">
      <div className="box">
        <div className="data">
          <Input
            setResultValue={setResultValue}
            setClicked={setClicked}
            image={dollar}
            styleIcon={"dolarIcon"}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
          />
          <div>
            <p className="data-font">Select Tip %</p>
            <div className="tip-percentage">
              {items.map((item) => (
                <PercentageButton
                  key={item.itemNumber}
                  clicked={clicked}
                  setClicked={setClicked}
                  setPercentageValue={setPercentageValue}
                  setCustomInputValue={setCustomInputValue}
                  itemNumber={item.itemNumber}
                  percentageResult={item.percentageResult}
                  content={item.content}
                />
              ))}

              <CustomButton
                customInputValue={customInputValue}
                setClicked={setClicked}
                setPercentageValue={setPercentageValue}
                setCustomInputValue={setCustomInputValue}
              />
            </div>
            <NumberOfPeople
              zeroText={zeroText}
              person={person}
              setZeroText={setZeroText}
              setNumberOfPeopleMessage={setNumberOfPeopleMessage}
              numberOfPeopleMessage={numberOfPeopleMessage}
            />
          </div>
        </div>
        <div className="display-box">
          <Displaybox
            percentageValue={percentageValue}
            zeroText={zeroText}
            tipAmountPerPerson={tipAmountPerPerson}
            resultValue={resultValue}
            result={result}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
