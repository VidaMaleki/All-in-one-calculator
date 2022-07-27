import React  from "react";
// import CalculatorBox from "./CalculatorBox";
import Button from "./Button";
import './Calculator.css';
// import Screen from './Screen';
// import Wrapper from './Wrapper';
import { Textfit } from "react-textfit";

const ButtonsName = [
  ["AC", "+/-", "%", "÷"], 
  [7, 8, 9, "×"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  ["00",0,".", "="]
];
// const signs = ["/", "X", "-","+", "=" ]



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
      <div className="wrapper">
      <Textfit className="screen" mode="single" max={70} value='0'></Textfit>
      <div className="buttonBox">
          {
            ButtonsName.flat().map((item, index) => {
                return (
                  <Button
                  key={index}
                  className={item === '÷'||item === '×'||item === '-'||item === '+'|| item === '='? "colorButton" : ""}
                  value={item}
                  onClick={() => {
                  console.log(`${item} ${index}clicked!`);
                }}
            />  
          );
        })
        }
      </div>
      </div>
      </section>
    </div>
  );
}

export default Calculator;
