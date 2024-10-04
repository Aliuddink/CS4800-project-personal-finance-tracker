import React from "react";

export default function ExpenseCard() {
  return (
    <div className="w-1/3 h-1/5 bg-white p-4">
      <div className="items-center flex justify-between">
        <h1 className="text-lg">This month's expenses:</h1>
        <img
          src="./summaryPage/editButton.png"
          alt="Edit Button"
          className="h-10 w-10"
        />
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold p-2">$1234.56</h2>
    </div>
  );
}
