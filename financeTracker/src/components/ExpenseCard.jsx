import React, { useState } from "react";
import CardButton from "../components/CardButton";

export default function ExpenseCard() {
  const [expenses, setExpenses] = useState(1234.56);

  const handleClick = () => {
    console.log("Edit button clicked");
  };

  return (
    <div className={`p-4 h-[20vh] bg-white shadow-md rounded-md`}>
      <div className="items-center flex justify-between">
        <h1 className="text-lg" id="card-header">This month's expenses:</h1>
        <CardButton onClick={handleClick}>
          <img
            src="./summaryPage/editButton.png"
            alt="Edit Button"
            className="h-7 w-7 md:h-10 md:w-10 object-contain flex-shrink-0"
          />
        </CardButton>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold p-2">${expenses}</h2>
    </div>
  );
}
