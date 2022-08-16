import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator/Calculator";
import CurrencyConverter from "./pages/CurrencyConverter/CurrencyConverter";
import LoanCalculator from "./pages/LoanCalculator/LoanCalculator";
import UnitConverter from "./pages/UnitConverter/UnitConverter"

function App() {
    return (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/calculator" element={<Calculator/>} />
              <Route path="/currencyconverter" element={<CurrencyConverter/>} />
              <Route path="/loancalculator" element={<LoanCalculator/>} />
              <Route path="/unitconverter" element={<UnitConverter/>} />
            </Routes>
          </BrowserRouter>
        </>
    );
}

export default App;
