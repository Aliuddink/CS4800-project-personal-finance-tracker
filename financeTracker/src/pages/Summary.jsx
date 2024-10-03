import React from "react";

export default function Summary() {
  return (
    // W-[100vw] is to cover the whole screen with white background, overlapping the black bg in app.css
    <div className="h-screen flex flex-row justify-start w-[100vw] bg-neutral-200 relative">
      {/* Sidebar */}
      <div className="flex flex-col w-44 fixed left-0 top-0 h-full items-center bg-black">
        {/* Icon */}
        <div className="pt-3">
          <img
            src="./logoIcon.png"
            alt="Company Logo"
            className="h-[70px] w-[70px] object-center"
          />
        </div>
        {/* Navigation */}
        <nav className="pt-10">
          <ul className="flex flex-col">
            <li className="flex gap-2 items-center">
              <img
                src={"./summaryPage/homeNavIcon.png"}
                alt="Home Icon"
                className="h-[35px] w-[35px] object-center"
              />
              <a href="/home">Home</a>
            </li>
            <li className="flex gap-2 items-center">
              <img
                src={"./summaryPage/summaryNavIcon.png"}
                alt="Summary Icon"
                className="h-[35px] w-[35px] object-center"
              />
              <a href="#">Summary</a>
            </li>
            <li className="flex gap-2 items-center">
              <img
                src={"./summaryPage/budgetBotNavIcon.png"}
                alt="BudgetBot Icon"
                className="h-[35px] w-[35px] object-center"
              />
              <a href="#">BudgetBot</a>
            </li>
            <li className="flex gap-2 items-center">
              <img
                src={"./summaryPage/settingNavIcon.png"}
                alt="Setting Icon"
                className="h-[35px] w-[35px] object-center"
              />
              <a href="#">Setting</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Summary content */}
      <div className="flex-1 ml-48 w-full h-full flex text-black overflow-y-scroll">
        {/* Summary Card Container */}
        <div className="pt-10 flex flex-wrap w-full h-full gap-10 justify-evenly">
          {/* Expense Card */}
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

          {/* Savings Card */}
          <div className="w-1/3 h-1/5 bg-white p-4">
            <div className="items-center flex justify-between">
              <h1 className="text-lg">Savings:</h1>
              <img
                src="./summaryPage/editButton.png"
                alt="Edit Button"
                className="h-10 w-10"
              />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold p-2">$1234.56</h2>
          </div>

          {/* Earnings/Expense Monthly Comparison Card */}
          <div className="w-[80%] h-[40vh] bg-white p-4">
            <h1 className="text-lg">Earnings/Expenses Monthly Comparison</h1>
            <div className="w-full h-full pt-2">...Insert graph here</div>
          </div>

          {/* Expenses Breakdown Card */}
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
        </div>
      </div>
    </div>
  );
}
