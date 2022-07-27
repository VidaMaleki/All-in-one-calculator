import React, {useState}  from "react";
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
  const [calc, setCalc] = useState({
    num: 0,
    sign:"",
    result:0
  });
    // handeling the click 
    const numClick = (e) =>{
      // preventDefault will prevent a browser reload/refresh
      e.preventDefault();
      // Target will get element that triggered a specific event
      // The innerHTML property sets or returns the HTML content
      const value =e.target.innerHTML;

      if (calc.num.length <16){
        const calcCopy = {...calc}
        if (calc.num === 0 && value === "0"){
          setCalc(calcCopy.num = "0")
        }else if(calcCopy.num %1 === 0){
          setCalc(calcCopy.num = Number(calc.num + value))
        }else {
          setCalc(calcCopy.num = calc.num + value)
        }
        !calc.sign ? setCalc(calcCopy.result = 0) : setCalc(calcCopy.result = calc.result)
      }
    };

    const commaClick = (e) =>{
      e.preventDefault();
      const value =e.target.innerHTML;
      
      const calcCopy = {...calc};
      if(!calc.num.toString.includes(".")){
        setCalc(calcCopy.num = calc.num + value)
        console.log(calc.num)
      }else{
        setCalc(calcCopy.num = calc.num)
      }
    }


    const signClick = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
      //No effect when press a sign more than once
      const calcCopy = {...calc};
      setCalc(calcCopy.sign = value);

      if (calc.result === 0 && calc.num){
        setCalc(calcCopy.result = calc.num)
      }
      setCalc(calcCopy.num = 0)
    }
    

    // const equalClick = (e) => {
    //   console.log("pressed equal!")
    // }
      // if(value === "÷"){
      //   setCalc(calcCopy.sign = "/")
      // }else if (value === "-"){
      //   setCalc(calcCopy.sign = "-")
      // }else if (value === "×"){
      //   setCalc(calcCopy.sign = "×")
      // }else if (value === "+"){
      //   setCalc(calcCopy.sign = "+")
      // }
      // if (calc.sign === "÷"){
      //     setCalc(calcCopy.num = calc.num)
      // }


  return (
    <div className="calculator">
      <section className="calctitle">
      <h1>Calculator</h1>
      <div className="wrapper">
      <Textfit className="screen" mode="single" max={70} value={calc.num ? calc.num: calc.result}>0</Textfit>
      <div className="buttonBox">
          {
            ButtonsName.flat().map((item, index) => {
                return (
                  <Button
                  key={index}
                  className={item === 'AC'? 
                    item === '÷'||item === '×'||item === '-'||item === '+'|| item === '='? "colorButton" : ""
                  }
                  value={item}
                  onClick={() => {
                  item === "AC"? resetClick:
                  item === "+/-"? invertClick:
                  item === "%"? percentClick:
                  item === "="? equalsClick:
                  item === "/" || item === "×"|| item === "-"|| item === "+"? signClick:
                  item === "."? commaClick : numClick

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
