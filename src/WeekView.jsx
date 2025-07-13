import { useEffect, useState } from "react";
import BudgetOverview from "./BudgetOverview";
import TotalOverview from "./TotalOverview";

function WeekView() {

    const [categoryList, setCategoryList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/week/1');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setCategoryList(result);
            } catch (error) {
                console.log(error)
            }
        };
    }, []);

    let categoryName = "food";
    let budgeted = 200;

  return (
    <>
    <BudgetOverview />
    <BudgetOverview />


    <div className="fixed w-full bottom-0">
        <TotalOverview />
    </div>
    </>
  )
}

export default WeekView
