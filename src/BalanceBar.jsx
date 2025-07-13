
function PosOrNeg({ budgeted, spent}) {

    // let width = "w-" + spent + "/" + (budgeted / 2);
    // let width = "w-50/200"
    // let width = `w-${spent}/${budgeted}`
    let width = ((budgeted - spent) / budgeted) * 100;

    console.log(width)

    if((budgeted - spent) > 0){
        return (
        <>
            <div className="bg-slate-300 mx-4">
                <div className="ml-[50%]">
                    <div style={{width: `${width}%`}} className={`h-4 bg-green-500`}></div>
                </div>
            </div>
            <p className="text-center py-4">{budgeted - spent}</p>
        </>
        );
    } else if ((budgeted - spent) < 0) {
        return (
            <>
            <div className="bg-slate-300 mx-4">
            <div className="mr-[50%]">
                <div style={{width: `${width*(-1)}%`}} className={`h-4 bg-red-500 ml-auto`}></div>
            </div>
            </div>
            <p className="text-center py-4">{budgeted - spent}</p>
            </>
        );
    } else {
        return (
            <>
            <div className="bg-slate-300 mx-4">
            <div className={`h-4`}></div>
            </div>
            <p className="text-center py-4">{budgeted - spent}</p>
            </>
        );
    }
}

function BalanceBar() {

    // let budgeted = 200;
    // let spent = 50;

  return (
    <div>
        <PosOrNeg
            budgeted={200}
            spent={100}
        />
    </div>
  )
}

export default BalanceBar
