import React from "react";

export default function ComparisonCard() {
  return (
    <div className={`h-[40vh] p-4 bg-white shadow-md rounded-md md:col-span-2`}>
      <h1 className="text-lg" id="card-header">Earnings/Expenses Monthly Comparison</h1>
      <div className="w-full h-full pt-2">...Insert graph here</div>
    </div>
  );
}
