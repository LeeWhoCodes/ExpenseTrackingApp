//category list should probably more accurately be week or something in that vain

import { useEffect, useState } from "react";
import BudgetOverview from "./BudgetOverview";
import TotalOverview from "./TotalOverview";
import { Link } from "react-router-dom";

function WeekView() {

    const [categoryList, setCategoryList] = useState({ categories: []});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/week/1');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log(result);
                setCategoryList(result);
                console.log(categoryList.toString());
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();

        console.log("the whole category list state")
                console.log(categoryList);
                console.log("just the categories array")
                console.log(categoryList.categories);
    }, []);

    let categoryName = "food";
    let budgeted = 200;

  return (
    <>

    {categoryList.categories.map((category) => <BudgetOverview 
        title={category.title}
        value={category.value}
        spent={category.spent}
        expenses={category.expenses}
    />
    )}

    <div className="fixed w-full bottom-0">
        <TotalOverview 
            value={categoryList.value}
            spent={categoryList.spent}
        />
    </div>
    </>
  )
}

export default WeekView
