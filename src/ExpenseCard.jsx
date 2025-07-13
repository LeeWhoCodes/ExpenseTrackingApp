function ExpenseCard() {

    let categoryName = "food";
    let budgeted = 200;

  return (
    <div className="outline bg-white">
        <button className="absolute right-0 text-xs m-1">edit</button>
        <div className="flex mb-4 mr-4 pt-4">
            <p className="mx-4">${budgeted}</p>
            <p className="ml-auto">Reason for expense</p>
        </div>
        <div className="flex mx-4 pb-4">
            <div className="flex">
                {/* lil map icon */}
                <p>Name of Location</p>
            </div>
            <div className="flex ml-auto">
                {/* lil calendar icon */}
                <p>the date of the transaction</p>
            </div>
        </div>
    </div>
  )
}

export default ExpenseCard