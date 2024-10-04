import React from "react";
import CardButton from "../components/CardButton";

export default function BreakdownCard() {
  return (
    <div className="w-[80%] h-[40vh] bg-white p-4">
      <div className="items-center flex justify-between">
        <h1 className="text-2xl font-bold" id='card-header'>Expenses Breakdown:</h1>
        <div className="" id="filter-icons">
          <CardButton>
            <img
              src="./summaryPage/filterIcon.png"
              alt="Filter Icon"
              className="h-5 w-5"
            />
          </CardButton>
          <CardButton>
            <img
              src="./summaryPage/encloseIcon.png"
              alt="Enclose Icon"
              className="h-5 w-5"
            />
          </CardButton>
          <CardButton>
            <img
              src="./summaryPage/openIcon.png"
              alt="Open Button"
              className="h-5 w-5"
            />
          </CardButton>
        </div>
      </div>
      <div className="w-full h-full pt-2">...Insert table here</div>
    </div>
  );
}
