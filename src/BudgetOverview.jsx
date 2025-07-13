import BalanceBar from "./BalanceBar";

function BudgetOverview() {

    let categoryName = "food";
    let budgeted = 200;

  return (
    <div className="outline bg-white">
        <div className="flex mb-4 pt-4">
            <p className="mx-4">{categoryName} : ${budgeted}</p>
            <button className="mx-4 ml-auto bg-blue-400">add expense</button>
        </div>
        <BalanceBar />
    </div>
  )
}

export default BudgetOverview
