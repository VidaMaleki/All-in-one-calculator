import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator/Calculator';
import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';
import LoanCalculator from './pages/LoanCalculator/LoanCalculator';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/'  component={Home}/>
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/currencyconverter' component={CurrencyConverter} />
        <Route exact path='/loancalculator' component={LoanCalculator} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
