import { useState } from "react";
import "./CurrencyConverter.css";

const ExchangeForm = (props) => {
  const [fromCurr, setFromCurr] = useState("");
  const [toCurr, settoCurr] = useState("");
  // const submitExchange = (event) => {
  //   event.preventDefault();
  return (
    <div className="formContainer">
      <form>
        <div className="CurrAmount">
          <label>Currency Amount</label>
          <input type="text" />
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
