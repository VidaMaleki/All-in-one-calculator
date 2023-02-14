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


const Calculator = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("")
  const[sign, setSign] = useState("")

  // handeling the click
  const numClick = (e) => {
    const value = e.target.innerHTML
    if (num.length < 16) {
      if (num === 0 && value === "0") {
        setNum("0");
      } else if (num % 1 === 0) {
        setNum(num.concat(value));
      } else {
        setNum(num.concat(value));
      }
    }else{
      setNum(num)
    }
  };

  //reset AC function
  const resetClick = () => {
    setNum("")
    setResult("")
    setSign("")
  }

  // invert +/- function
  const invertClick = () => {
    setNum(num ? -num : num)
  };


  // comma . function
  const commaClick = (e) => {
    const value = e.target.innerHTML;
    if (num) {
      if (!num.includes(".")) {
        setNum(num + value);
      } else {
        setNum(num);
      }
    } else {
      setNum("0" + value);
    }
  };

  //percent % function
  const percentClick = () => {
    if (num && !result){
      setNum(num/100) 
    } else if (!num && result){
      setResult(result /100)
    } else if (num && result){
      setNum((num* result)/100)
    }
  };

  // signs + - * / function
  const signClick = (e) => {
    const value = e.target.innerHTML;
    //No effect when press a sign more than once
    if (!sign ){
      setSign(value);
      setResult(num);
      setNum("")
    } else {
      setResult(mathOperation(sign, Number(result), Number(num)));
      setSign(value);
      setNum("")
    }
  };

  //eguals = function and checking for no zero division
  const equalsClick = () => {
    console.log(` pressed!`)
    if (sign && num && result) {
      if (num === "0" && sign === "÷") {
        setResult("Error");
        setNum("");
        setSign("");
      } else {
        setResult("");
        setNum(mathOperation(sign, Number(result), Number(num)));
        setSign("");
      }
    }
  };

  //Helper function for math operation 
  const mathOperation = (operation, answer, number) => {
    if ( operation === "+") {
      return answer + number;
    } else if (operation === "-") {
      return answer - number;
    } else if (operation === "×") {
      return answer * number;
    } else if (operation === "÷") {
      return answer / number;
    }
  };

  return (
    <div className="calculator">
      <section className="calctitle">
        <h1>Calculator</h1>
        <div className="wrapper">
          <Textfit className="screen" mode="single" max={70} 
            >{num? num : result}</Textfit>
          <div className="buttonBox">
            {ButtonsName.flat().map((item, index) => {
              return (
                <Button
                  key={index}
                  className={
                    item === 0 ? "zero"
                    :item === 'AC'||item === '+/-'||item === '%'? "firstRow"
                    :item === '÷'||item === '×'||item === '-'||item === '+'|| item === '='? "colorButton" : ""
                  }
                  value={item}
                  onClick={
                  item === "AC"? resetClick
                  : item === "+/-"? invertClick
                  : item === "%"? percentClick
                  : item === "="? equalsClick 
                  : item === "÷"||item === "×"||item === "-"||item === "+"? signClick
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
