import React from 'react';
import Dropdown from "react-dropdown";
import currenciesDictionary from "./currenciesCodes.js";

export default function CurrencyRow() {
  return (
    <div>
      <input type='number'className='input'/>
      <Dropdown
            options={Object.values(currenciesDictionary)}
      />
    </div>
  )
}