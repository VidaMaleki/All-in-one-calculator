import { useState } from "react";
import "./CurrencyConverter.css";
import Dropdown from "react-dropdown";
import currenciesDictionary from "./DropDown.js";

const ExchangeForm = (props) => {
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, settoCurr] = useState("JPY");
  const [exRate, setExRate] = useState("");

  return (
    <div className="formContainer">
      <form>
        <div className="CurrAmount">
          <label>Currency Amount</label>
          <input type="text" />
          <Dropdown options={Object.keys(currenciesDictionary)} />
        </div>

        <div className="CurrAmount">
          <label>Currency Amount</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default ExchangeForm;
