import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator/Calculator";
import CurrencyConverter from "./pages/CurrencyConverter/CurrencyConverter";
import LoanCalculator from "./pages/LoanCalculator/LoanCalculator";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/calculator" element={Calculator} />
          <Route path="/currencyconverter" element={CurrencyConverter} />
          <Route path="/loancalculator" element={LoanCalculator} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
