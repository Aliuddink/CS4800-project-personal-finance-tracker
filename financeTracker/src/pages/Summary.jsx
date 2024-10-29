import React from "react";
import Sidebar from "../components/Sidebar";
import ExpenseCard from "../components/ExpenseCard";
import SavingCard from "../components/SavingCard";
import ComparisonCard from "../components/ComparisonCard";
import BreakdownCard from "../components/BreakdownCard";

export default function Summary() {
  return (
    // W-[100vw] is to cover the whole screen with white background, overlapping the black bg in app.css
    <div className="h-screen flex flex-row justify-start w-[100vw] bg-neutral-200 relative">
      <Sidebar />

      {/* Summary content */}
      <div className="flex-1 ml-48 w-full h-full flex text-black overflow-y-scroll">
        {/* Summary Card Container */}
        <div className="pt-10 flex flex-wrap w-full h-full justify-evenly md:gap-10">
          <ExpenseCard />
          <SavingCard />
          <ComparisonCard />
          <BreakdownCard />
        </div>
      </div>
    </div>
  );
}
