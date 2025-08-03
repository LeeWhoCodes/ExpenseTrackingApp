import BalanceBar from "./BalanceBar";

function BudgetOverview({title, value, spent, expenses}) {

  return (
    <div className="outline bg-white">
        <div className="flex mb-4 pt-4">
            <p className="mx-4">{title} : ${value}</p>
            <button className="mx-4 ml-auto bg-blue-400">add expense</button>
        </div>
        <BalanceBar 
          value={value}
          spent={spent}
        />
    </div>
  )
}

export default BudgetOverview
