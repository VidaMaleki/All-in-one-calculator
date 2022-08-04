import React from "react";
import axios from "axios";
import { useState } from "react";
import Dropdown from "react-dropdown";
import currenciesDictionary from "./currenciesCodes.js";

function CurrencyConverter() {
  function getObjKey(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  }

  const [fromCurr, setFromCurr] = useState("");
  const [toCurr, setToCurr] = useState("");
  const [exRate, setExRate] = useState();
  const [amount, setAmount] = useState("0");
  const [info, setInfo] = useState("Previous");
  const [toAmount, setToAmount] = useState("0");

  const convertAmount = () => {
    setToAmount(exRate * amount);
    return exRate * amount;
  };

  const exchInfo = () => {
    const URL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurr}&to_currency=${toCurr}&apikey=S6OUYUH5FUD5HOY6`;
    axios
      .get(URL)
      .then((response) => {
        const allInfo = response.data;
        const newResponse =
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        setInfo(allInfo);
        setExRate(newResponse);
        console.log("start");
        console.log(newResponse);
        console.log(allInfo);
        console.log(exRate);
        console.log("hola");
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <form>
        <div className="CurrAmount">
          <label>Amount</label>
          <input
            defaultValue={0}
            type="text"
            onChange={(e) => {
              setAmount(e.target.value);
              convertAmount();
            }}
          />
          <Dropdown
            options={Object.values(currenciesDictionary)}
            onChange={(e) => {
              setFromCurr(String(getObjKey(currenciesDictionary, e.value)));
            }}
          />
        </div>

        <div className="CurrAmount">
          <Dropdown
            options={Object.values(currenciesDictionary)}
            onChange={(e) => {
              setToCurr(String(getObjKey(currenciesDictionary, e.value)));
              exchInfo();
            }}
          />
        </div>
        <input
          defaultValue={exRate * amount}
          type="text"
          onChange={(e) => {
            setAmount(e.target.value);
            convertAmount();
          }}
        />
        <p> {exRate * amount} </p>
        <p> exchange rate </p>
        <p defaultValue={0}> {exRate} </p>
      </form>
      <button onClick={exchInfo}>get exchange rate</button>
    </div>
  );
}

export default CurrencyConverter;
