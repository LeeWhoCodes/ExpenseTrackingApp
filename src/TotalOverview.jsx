import BalanceBar from "./BalanceBar";

function TotalOverview({value, spent}) {

  return (
    <div className="outline-8 bg-amber-200">
        <p className="p-4 text-center">Total Budget: ${value}</p>
        <BalanceBar 
          value={value}
          spent={spent}
        />
    </div>
  )
}

export default TotalOverview
