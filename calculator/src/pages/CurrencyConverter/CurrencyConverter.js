import React from "react";
import axios from "axios";
import { useState } from "react";
import Dropdown from "react-dropdown";
import currenciesDictionary from "./DropDown.js";

function CurrencyConverter() {
  function getObjKey(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  }

  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("JPY");
  const [exRate, setExRate] = useState("");
  const [info, setInfo] = useState("Previous");
  const URL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurr}&to_currency=${toCurr}&apikey=S6OUYUH5FUD5HOY6`;

  const exchInfo = () => {
    axios
      .get(URL)
      .then((response) => {
        const newResponse = response.data;
        setExRate(newResponse);
        setInfo(newResponse);
        console.log(newResponse);
        console.log("hola");
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <form>
        <div className="CurrAmount">
          <label>Currency Amount</label>
          <input type="text" />
          <Dropdown
            options={Object.values(currenciesDictionary)}
            onChange={(e) => {
              setFromCurr(String(getObjKey(currenciesDictionary, e.value)));
            }}
          />
        </div>

        <div className="CurrAmount">
          <label>Currency Amount</label>
          <input type="text" />
          <Dropdown
            options={Object.values(currenciesDictionary)}
            onChange={(e) => {
              setToCurr(String(getObjKey(currenciesDictionary, e.value)));
            }}
          />
        </div>
      </form>
      <button onClick={exchInfo}>get exchange rate</button>
    </div>
  );
}

export default CurrencyConverter;
