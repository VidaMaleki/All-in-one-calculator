import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import currenciesDictionary from "./currenciesCodes.js";
import "./CurrencyConverter.css";

function CurrencyConverter() {
  function getObjKey(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  }
  const [amount, setAmount] = useState(0);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("JPY");
  const [exRate, setExRate] = useState("");
  const [info, setInfo] = useState("Previous");

  const exchInfo = () => {
    const URL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurr}&to_currency=${toCurr}&apikey=S6OUYUH5FUD5HOY6`;
    axios
      .get(URL)
      .then((response) => {
        const newResponse =
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        setExRate(newResponse);
        console.log(newResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   axios.get(URL).then((response) => {
  //     setInfo(response.data["Realtime Currency Exchange Rate"]);
  //   });
  // }, []);

  // const exchInfo = () => {
  //   axios
  //     .get(
  //       `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=S6OUYUH5FUD5HOY6`
  //     )
  //     .then((response) => {
  //       const newInfo = response.data;
  //       const newResponse =
  //         response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
  //       setExRate(newResponse);
  //       setInfo(newInfo);
  //       console.log(response.data);
  //       console.log(newResponse);
  //       console.log(newInfo);
  //       console.log("hola");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


  const convertAmount = () => {
    return exRate * amount;
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <form>
        <div className="CurrAmount">
          <label>Currency Amount</label>
          <input
            type="text"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <Dropdown
            options={Object.values(currenciesDictionary)}
            onChange={(e) => {
              setFromCurr(String(getObjKey(currenciesDictionary, e.value)));
            }}
            // value={fromCurr}
            placeholder="From"
          />
        </div>

        <div className="ToCurr">
          {/* <label>Currency Amount</label>
          <input
            type="text"
            placeholder="Enter the amount"
            onChange={(e) => {
              setAmount(e.value);
            }}
          /> */}
          <Dropdown
            options={Object.values(currenciesDictionary)}
            onChange={(e) => {
              setToCurr(String(getObjKey(currenciesDictionary, e.value)));
            }}
            // value={toCurr}
            placeholder="To"
          />
        </div>
        <div className="result">
          <button
            // onClick={() => {
            //   convertAmount();
            onClick={() => {
              console.log("hola");
            }}
          >
            Get exchange
          </button>
          <button onClick={exchInfo}>Probar API</button>
          <p>
            {fromCurr} {amount} = {toCurr} {convertAmount()}
          </p>
        </div>
      </form>
    </div>
  );
}

export default CurrencyConverter;
