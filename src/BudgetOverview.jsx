import BalanceBar from "./BalanceBar";
import { Link } from "react-router-dom";

function BudgetOverview({title, value, spent, expenses}) {

  console.log("here is the expenses")
  console.log(expenses);

  const obj = {value: value, spent: spent, expenses: expenses}

  return (
    <div className="outline bg-white">
        <div className="flex mb-4 pt-4">
            <p className="mx-4">{title} : ${value}</p>
            <button className="mx-4 ml-auto bg-blue-400">add expense</button>
        </div>
        <Link to={`/week/${title}`} state={obj}>
          <BalanceBar 
            value={value}
            spent={spent}
          />
        </Link>
    </div>
  )
}

export default BudgetOverview
