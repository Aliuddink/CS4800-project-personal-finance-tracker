import React, { useState } from "react";
import CardButton from "../components/CardButton";

export default function SavingCard() {
  const [savings, setSavings] = useState(1234.56);

  const handleClick = () => {
    console.log("Edit button clicked");
  };


  return (
    <div className={`p-4 bg-white shadow-md rounded-md h-[20vh]`}>
      <div className="items-center flex justify-between">
        <h1 className="text-lg" id="card-header">Savings:</h1>
        <CardButton>
          <img
            src="./summaryPage/editButton.png"
            alt="Edit Button"
            className="h-7 w-7 md:h-10 md:w-10"
          />
        </CardButton>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold p-2">${savings}</h2>
    </div>
  );
}
