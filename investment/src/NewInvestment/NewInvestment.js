import InvestmentForm from "./InvestmentForm";

const NewInvestment = (props) => {


    const saveInvestmentDataHandler =(enteredInvestmentData)=>{
        const expenseData={
          ...enteredInvestmentData,
          id: Math.random().toString()
        }
        props.objectInvestment(expenseData)
        // console.log(expenseData)
    };
    return (
        <div className={"new-expense"}>
            <InvestmentForm onSaveInvestmentData={saveInvestmentDataHandler}/>
        </div>
    )
}
export default NewInvestment