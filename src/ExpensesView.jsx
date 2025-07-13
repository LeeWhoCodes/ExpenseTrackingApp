import TotalOverview from "./TotalOverview";
import ExpenseCard from "./ExpenseCard";

function ExpensesView() {

    

  return (
    <div>
        <button className="w-full">Add Expense</button>
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />

        <div className="fixed w-full bottom-0">
            <TotalOverview />
        </div>

    </div>
  )
}

export default ExpensesView