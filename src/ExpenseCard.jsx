function ExpenseCard({value, reason, location, date}) {


  return (
    <div className="outline bg-white">
        <button className="absolute right-0 text-xs m-1">edit</button>
        <div className="flex mb-4 mr-4 pt-4">
            <p className="mx-4">{value}</p>
            <p className="ml-auto">{reason}</p>
        </div>
        <div className="flex mx-4 pb-4">
            <div className="flex">
                {/* lil map icon */}
                <p>{location}</p>
            </div>
            <div className="flex ml-auto">
                {/* lil calendar icon */}
                <p>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default ExpenseCard