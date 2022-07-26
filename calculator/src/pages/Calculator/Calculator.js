import React from "react";
import CalculatorBox from "./CalculatorBox";
import Button from "./Button";
import { Textfit } from "react-textfit";

function Calculator() {
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <CalculatorBox>
        <Textfit value="0" className="screen" mode="single" max={70}>
          {/* {value='0'} */}
        </Textfit>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked");
          }}
        />
      </CalculatorBox>
    </div>
  );
}

export default Calculator;
