import React, { useState } from "react";

export default function SavingCard() {
  const [savings, setSavings] = useState(1234.56);

  const handleClick = () => {
    console.log("Edit button clicked");
  };

  return (
    <div className="p-4 h-full bg-white shadow-md rounded-md flex flex-col justify-between">
      <div className="items-center flex justify-between">
        <h1 className="text-lg md:text-xl lg:text-2xl" id="card-header">Savings:</h1>
        <button className="bg-transparent border-none focus:outline-none" onClick={handleClick}>
          <img
            src="./summaryPage/editButton.png"
            alt="Edit Button"
            className="h-7 w-7 md:h-9 md:w-9 object-contain flex-shrink-0"
          />
        </button>
      </div>
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold p-2">${savings}</h2>
    </div>
  );
}