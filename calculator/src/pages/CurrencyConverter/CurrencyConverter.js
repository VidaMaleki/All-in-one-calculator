import React from "react";
import axios from "axios";
import { useState } from "react";

function CurrencyConverter() {
  const fromCurr = "IDR";
  const toCurr = "JPY";
  const accesKey = "API_KEY_GOES_HERE";
  const [exRate, setExRate] = useState("");
  const URL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurr}&to_currency=${toCurr}&apikey=${accesKey}`;
  const exchInfo = () => {
    axios
      .get(URL)
      .then((response) => {
        const newResponse = response.data;
        setExRate(newResponse);
        console.log(newResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <p>`Hola esta es la info`</p>
      <button onClick={exchInfo}>get exchange rate</button>
      <p>`esto es {exRate.data}`</p>
    </div>
  );
}

export default CurrencyConverter;
