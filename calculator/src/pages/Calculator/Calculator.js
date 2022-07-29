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
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("")
  const[sign, setSign] = useState("")

  //  {
  //   num: "",
  //   sign: "",
  //   result: 0,
  // }
  // handeling the click
  const numClick = (e) => {
    // preventDefault will prevent a browser reload/refresh
    //e.preventDefault();
    
    const value = e.target.innerHTML
    setCalc(calc.concat(value))
    console.log(`pressed ${value}`)
    
    // if (calc.length < 16) {
    //   if (calc === 0 && value === "0") {
    //     setCalc("0");
    //   } else if (calc % 1 === 0) {
    //     setCalc(calc + value);
    //   } else {
    //     setCalc(calc + value);
    //   }
      
    // }else{
    //   if (!calc.sign){
    //     setCalc((calc = 0))
    //   }else{
    //     setCalc(calc)
    //   }
    // }
  };

  
  const commaClick = (e) => {
    //e.preventDefault();
    const value = e.target.innerHTML;
    if(calc){
      if (!calc.includes(".")) {
      setCalc(calc + value);
      }else {
        setCalc(calc);
      }
    }else{
      setCalc("0" + value);
    }
  };


  const signClick = (e) => {
    //e.preventDefault();
    const value = e.target.innerHTML;
    //No effect when press a sign more than once
    console.log(`pressed sign`)
    
    if (!sign ){
      setSign(value);
      setResult(calc);
      setCalc("")
      console.log(calc, result, sign)
      
    }
    else{
      console.log(calc, result, Number(result))
      setResult(mathOperation(value, Number(result), Number(calc)));
      setSign(value);
      setCalc("")
      console.log(result,calc, sign, "a")
    }
    
  };


  //Helper function for equalsClick function
  const mathOperation = (s, r, c) => {
    
    if (s === "+") {
      return r + c;
    } else if (s === "-") {
      return r - c;
    } else if (s === "×") {
      return r * c;
    } else if (s === "÷") {
      return r / c;
    }
  };

  //eguals function and checking for no zero division
  const equalsClick = (e) => {
    console.log("equals pressed!")
    
    if (sign && calc) {
      if (calc === "0" && sign === "÷") {
        setResult("No zero division");
      } else {
        setResult(mathOperation(Number(result),Number(calc),sign));
        setCalc("");
        setSign("");
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
    setCalc(calc ? -calc : calc)
  };

  const resetClick = ()=>{
    console.log("pressed reset!");
    setCalc("")
    setResult("")
    setSign("")
  }

  return (
    <div className="calculator">
      <section className="calctitle">
        <h1>Calculator</h1>
        <div className="wrapper">
          <Textfit className="screen" mode="single" max={70} 
          value={calc}>{calc? calc:result}</Textfit>
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
