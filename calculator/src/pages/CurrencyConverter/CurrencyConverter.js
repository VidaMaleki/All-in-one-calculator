import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
import currenciesDictionary from "./currenciesCodes.js";
import "./CurrencyConverter.css";
import numeral from 'numeral';

function CurrencyConverter() {
  function getObjKey(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  }

  const [fromCurr, setFromCurr] = useState("");
  const [toCurr, setToCurr] = useState("");
  const [exRate, setExRate] = useState("0");
  const [amount, setAmount] = useState("0");
  const rate = fromCurr.concat("_", toCurr);
  //const [info, setInfo] = useState("Previous");
  //const totalAmount = exRate * amount;

  //useEffect => {axios call}
  //[fromCurr, toCurr]

  const exchInfo = () => {
    const URL = `https://free.currconv.com/api/v7/convert?q=${rate}&compact=ultra&apiKey=a65b004b2bc49df06ae5`;
    axios
      .get(URL)
      .then((response) => {
        // const allInfo = response.data;
        console.log(response.data);
        const newResponse = response.data[rate];
        //setInfo(allInfo);
        setExRate(newResponse);
        console.log(newResponse);
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(exchInfo, [fromCurr, rate, toCurr]);

  return (
    <div className="currencyCunvertor">
      <div>
        <h1 id="title">Currency Converter</h1>
      </div>
      <div className="container">
        <div className="Amount">
          <label>Amount</label>
          <input
            type="text"
            onChange={(e) => {
              setAmount(e.target.value);
              //console.log(exRate);
            }}
          />
        </div>
        <div>
          <h3>From</h3>
          <Dropdown
            className="fromCurr"
            options={Object.values(currenciesDictionary)}
            onChange={(e) => {
              setFromCurr(String(getObjKey(currenciesDictionary, e.value)));
              exchInfo();
              console.log(exRate);
              console.log(amount);
            }}
            placeholder="Select"
          />
        </div>
        <div>
          <h3>To</h3>
          <Dropdown
            className="ToCurr"
            options={Object.values(currenciesDictionary)}
            onChange={(e) => {
              setToCurr(String(getObjKey(currenciesDictionary, e.value)));
              exchInfo();
              console.log(exRate);
              console.log(amount);
            }}
            placeholder="Select"
          />
        </div>
      </div>
      <div className="infoDisplay">
        <p> Converted Amount: </p>
        <p defaultValue={0}> {numeral(exRate * amount).format("$0,0.00")} </p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
