import React, {useState} from "react";
import "./InvestmentForm.css";

const InvestmentForm =(props)=>{
    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlyContribution, setYearlyContribution] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');


    const currentSavingHandler=(event)=>{
        setCurrentSavings(event.target.value)
    }
    const yearlyContributionHandler=(event)=>{
        setYearlyContribution(event.target.value)
    }
    const expectedReturnHandler=(event)=>{
        setExpectedReturn(event.target.value)
    }
    const durationHandler=(event)=>{
        setDuration(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()//this is automatically it stop the request to server when we press submit button and it will make those calculation above
        const investmentData = {
            currant_saving: currentSavings,
            yearly_saving: yearlyContribution,
            excepted_interest: expectedReturn,
            investment_duration:duration
        };
        // console.log(investmentData)

        props.onSaveInvestmentData(investmentData);
        setCurrentSavings("")
        setYearlyContribution("")
        setExpectedReturn("")
        setDuration("")
    }

    return(
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={currentSavingHandler} value={currentSavings}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={yearlyContributionHandler} value={yearlyContribution}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={expectedReturnHandler} value={expectedReturn}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={durationHandler} value={duration}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default InvestmentForm