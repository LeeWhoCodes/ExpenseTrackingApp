import TotalOverview from "./TotalOverview";
import ExpenseCard from "./ExpenseCard";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function ExpensesView() {

  const location = useLocation();
  const receivedData = location.state;
  
  let param = useParams();

  console.log(param);

  //   const [categoryList, setCategoryList] = useState({});
    
  //       useEffect(() => {
  //           const fetchData = async () => {
  //               try {
  //                   const response = await fetch('http://localhost:3000/week/1');
  //                   if (!response.ok) {
  //                       throw new Error(`HTTP error! status: ${response.status}`);
  //                   }
  //                   const result = await response.json();
  //                   console.log("just result")
  //                   console.log(result);
  //                   setCategoryList(result);
  //                   console.log("this is the state right after updating it")
  //                   console.log(categoryList);
  //               } catch (error) {
  //                   console.log(error)
  //               }
  //           };
    
  //           fetchData();

            

  //           const specificCategory = categoryList

  //           // const specificCategory = categoryList.categories.find(item => item.title === param);


  //           console.log("this should be the category that is in the param")
  //           console.log(categoryList);

  //       }, []);

  return (
    <div>

      <p className="text-4xl font-bold text-center">{param.categoryName}</p>

        <button className="w-full outline">Add Expense</button>



        {receivedData.expenses.map((expense) => <ExpenseCard 
          value={expense.value}
          reason={expense.reason}
          location={expense.location}
          date={expense.date}
        />)}

        <div className="fixed w-full bottom-0">
            <TotalOverview 
              value={receivedData.value}
              spent={receivedData.spent}
            />
        </div>

    </div>
  )
}

export default ExpensesView