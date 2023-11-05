import logo from './assets/investment-calculator-logo.png';
import NewInvestment from "./NewInvestment/NewInvestment";
import TableInvestments from "./TableInvestments/TableInvestments";
import {useState} from "react";

function App() {

  const yearlyData = []; // per-year results
  const calculateHandler = (userInput) => {

    // Should be triggered when form is submitted
    let currentSavings = +userInput['currant_saving']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly_saving']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['excepted_interest'] / 100;
    const duration = +userInput['investment_duration'];


    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
      console.log(yearlyData)
    }
  };

  return (
      <div>
        <header className="header">
          <img src={logo} alt="logo" />
          <h1>Investment Calculator</h1>
        </header>
        <NewInvestment objectInvestment={calculateHandler}/>
        <TableInvestments items={yearlyData}/>
      </div>
  );
}

export default App;
