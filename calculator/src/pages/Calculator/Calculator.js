import React  from "react";
import CalculatorBox from "./CalculatorBox";
import Button from "./Button";
import './Calculator.css';
import Screen from './Screen';
import Wrapper from './Wrapper';


const ButtonsName = [
  ["AC", "+/-", "%", "/"], 
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

const Calculator= ()=> {
  // const [calc, setCalc] = useState({
  //   num: 0,
  //   sign:"",
  //   result:0
  // });
  return (
    <div className="calculator">
      <section className="calctitle">
      <h1>Calculator</h1>
      <Wrapper className="main">
        <Screen value='0' />
        <CalculatorBox>
          {
            ButtonsName.flat().map((item, index) => {
                return (
                  <Button
                  key={index}
                  className={item === "=" ? "equals" : ""}
                  value={item}
                  onClick={() => {
                  console.log(`${item} clicked!`);
                }}
            />  
          );
        })
        }
      </CalculatorBox>
      </Wrapper>
      </section>
    </div>
  );
}

export default Calculator;
