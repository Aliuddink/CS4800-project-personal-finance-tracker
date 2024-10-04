import React from "react";
import CardButton from "../components/CardButton";

export default function SavingCard() {
  return (
    <div className="w-1/3 h-1/5 bg-white p-4">
      <div className="items-center flex justify-between">
        <h1 className="text-lg" id="card-header">Savings:</h1>
        <CardButton>
          <img
            src="./summaryPage/editButton.png"
            alt="Edit Button"
            className="h-10 w-10"
          />
        </CardButton>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold p-2">$1234.56</h2>
    </div>
  );
}
