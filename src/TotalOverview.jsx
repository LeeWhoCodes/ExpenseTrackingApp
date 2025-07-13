import BalanceBar from "./BalanceBar";

function TotalOverview() {

    let categoryName = "Total";
    let budgeted = 200;

  return (
    <div className="outline-8 bg-amber-200">
        <p className="p-4 text-center">{categoryName} : ${budgeted}</p>
        <BalanceBar />
    </div>
  )
}

export default TotalOverview
