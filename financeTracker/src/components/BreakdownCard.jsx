import React from "react";

export default function BreakdownCard() {
  return (
    <div className="w-[80%] h-[40vh] bg-white p-4">
      <div className="items-center flex justify-between">
        <h1 className="text-lg font-bold">Expenses Breakdown:</h1>
        <div className="flex gap-2" id="filter-icons">
          {/* Has yet to add icon tags due to CSS file conflicting */}
          <img
            src="./summaryPage/filterIcon.png"
            alt="Filter Icon"
            className="h-5 w-5"
          />
          <img
            src="./summaryPage/encloseIcon.png"
            alt="Enclose Icon"
            className="h-5 w-5"
          />
          <img
            src="./summaryPage/openIcon.png"
            alt="Open Button"
            className="h-5 w-5"
          />
        </div>
      </div>
      <div className="w-full h-full pt-2">...Insert table here</div>
    </div>
  );
}
