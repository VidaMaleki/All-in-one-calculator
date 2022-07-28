import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";
import { Textfit } from "react-textfit";

const ButtonsName = [
  ["AC", "+/-", "%", "÷"],
  [7, 8, 9, "×"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [ 0, ".", "="],
];
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Calculator = () => {
  const [calc, setCalc] = useState({
    num: 0,
    sign: "",
    result: 0,
  });
  // handeling the click
  const numClick = (e) => {
    // preventDefault will prevent a browser reload/refresh
    e.preventDefault();
    // Target will get element that triggered a specific event
    // The innerHTML property sets or returns the HTML content
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
    // if (calc.num.length < 16) {
    //   const calcCopy = { ...calc };
    //   console.log(calcCopy)
    //   if (calc.num === 0 && value === "0") {
    //     setCalc((calcCopy.num = "0"));
    //   } else if (calcCopy.num % 1 === 0) {
    //     setCalc((calcCopy.num = Number(calc.num + value)));
    //   } else {
    //     setCalc((calcCopy.num = calc.num + value));
    //   }
    //   !calc.sign
    //     ? setCalc((calcCopy.result = 0)): setCalc((calcCopy.result = calc.result));
    // }
  };

  const commaClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    const calcCopy = { ...calc };
    if (!calc.num.toString().includes(".")) {
      setCalc((calcCopy.num = calc.num + value));
      console.log(calc.num);
    } else {
      setCalc((calcCopy.num = calc.num));
    }
  };

  const signClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    //No effect when press a sign more than once
    const calcCopy = { ...calc };
    setCalc((calcCopy.sign = value));

    if (!calc.result && calc.num) {
      setCalc((calcCopy.result = calc.num));
    }
    setCalc((calcCopy.num = 0));
  };

  //Helper function for equalsClick function
  const mathOperation = (result, num, sign) => {
    if (sign === "+") {
      return result + num;
    } else if (sign === "-") {
      return result - num;
    } else if (sign === "×") {
      return result * num;
    } else if (sign === "÷") {
      return result / num;
    }
  };

  //eguals function and checking for no zero division
  const equalsClick = (e) => {
    console.log(`${e}`)
    if (calc.sign && calc.num) {
      const calcCopy = { ...calc };

      if (calc.num === "0" && calc.sign === "÷") {
        setCalc((calcCopy.result = "No zero division"));
      } else {
        setCalc(
          (calcCopy.result = mathOperation(
            Number(calc.result),
            Number(calc.num),
            calc.sign
          ))
        );
        setCalc((calcCopy.num = 0));
        setCalc((calcCopy.sign = ""));
      }
    }
  };

  const percentClick = () => {
    const calcCopy = {...calc}
    console.log(calcCopy)
    if (calc.num && !calc.result){
      setCalc(calcCopy.num = calc.num /100) 
    }else if(!calc.num && calc.result){
      setCalc(calcCopy.result = calc.result /100)
    }else if(calc.num && calc.result){
      setCalc(calcCopy.num = (calc.num * calc.result)/100)
    }
    console.log("pressed percent!");
  };

  const invertClick = () => {
    console.log("pressed invert!");
  };

  const resetClick = ()=>{
    console.log("pressed reset!");
  }

  return (
    <div className="calculator">
      <section className="calctitle">
        <h1>Calculator</h1>
        <div className="wrapper">
          <Textfit
            className="screen"
            mode="single"
            max={70}
            value={calc.num ? calc.num : calc.result}
          >
            0
          </Textfit>
          <div className="buttonBox">
            {ButtonsName.flat().map((item, index) => {
              return (
                <Button
                  key={index}
                  className={
                    item === 'AC'||item === '+/-'||item === '%'? "firstRow"
                    :item === 0 ? "zero"
                    :item === '÷'||item === '×'||item === '-'||item === '+'|| item === '='? "colorButton" : ""
                  }
                  value={item}
                  onClick={
                        item === "AC"? resetClick
                      : item === "+/-"? invertClick
                      : item === "%"? percentClick
                      : item === "="? equalsClick 
                      : item === "/"||item === "×"||item === "-"||item === "+"? signClick
                      : item === "."? commaClick : numClick
                      
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
