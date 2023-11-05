
import "./TableInvestments.css"
const TableInvestments=(props)=>{
    console.log(props.items)

    return(
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((yearData)=>(
                <tr>
                    <td>{yearData.year}</td>
                    <td>{yearData.savingsEndOfYear}</td>
                    <td>{yearData.yearlyInterest}</td>
                    <td>{yearData.yearly_saving-yearData.yearlyContribution*yearData.year}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default TableInvestments