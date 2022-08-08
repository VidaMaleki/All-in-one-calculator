import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Dropdown from "react-dropdown";
import currenciesDictionary from "./currenciesCodes.js";
import "./CurrencyConverter.css";

function CurrencyConverter() {
  function getObjKey(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  }

  const [fromCurr, setFromCurr] = useState("");
  const [toCurr, setToCurr] = useState("");
  const [exRate, setExRate] = useState("0");
  const [amount, setAmount] = useState("0");
  const [info, setInfo] = useState("Previous");
  const totalAmount = exRate * amount;

  const exchInfo = () => {
    const URL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurr}&to_currency=${toCurr}&apikey=S6OUYUH5FUD5HOY6`;
    axios
      .get(URL)
      .then((response) => {
        setInfo(allInfo);
         return response.data;
      }).then((response) => {
        const newResponse =
          response["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        
        setExRate(newResponse);
        console.log(allInfo)
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="Amount">
        <label>Amount</label>
        <input
          defaultValue={0}
          type="text"
          onChange={(e) => {
            setAmount(e.target.value);
            exchInfo();
            console.log(exRate)
          }}
        />
      </div>
      <div className="from">
        <h3>From</h3>
        <Dropdown
          options={Object.values(currenciesDictionary)}
          onChange={(e) => {
            setFromCurr(String(getObjKey(currenciesDictionary, e.value)));
            exchInfo();
            console.log(exRate)
          }}
          placeholder="Select"
        />
      </div>
      <div className="To">
        <h3>To</h3>
        <Dropdown
          options={Object.values(currenciesDictionary)}
          onChange={(e) => {
            setToCurr(String(getObjKey(currenciesDictionary, e.value)));
            exchInfo();
            console.log(exRate)
          }}
          placeholder="Select"
        />
      </div>
      <p> The total amount is </p>
      <p defaultValue={0}> {totalAmount} </p>
      <p>****</p>
      <p> exchange rate </p>
      <p defaultValue={0}> {exRate} </p>
      <button onClick={exchInfo}>get exchange rate</button>
    </div>
  );
}

export default CurrencyConverter;
