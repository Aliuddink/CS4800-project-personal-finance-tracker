import React from "react";
import homeNavIcon from "../../public/summaryPage/homeNavIcon.png";
import summaryNavIcon from "../../public/summaryPage/summaryNavIcon.png";
import settingNavIcon from "../../public/summaryPage/settingNavIcon.png";
import budgetBotNavIcon from "../../public/summaryPage/budgetBotNavIcon.png";


export default function Summary() {
    return (
        // W-[100vw] is to cover the whole screen due to the original css styling
        <div className="h-screen flex flex-row justify-start w-[100vw] bg-neutral-50 relative">
            {/* Sidebar */}
            <div className="flex flex-col w-48 fixed left-0 top-0 h-full items-center bg-black">
                <img
                    src="./logoIcon.png"
                    alt="Company Logo"
                    className="h-[75px] w-[75px] object-center"
                />
                <nav className="pt-10">
                    <ul className="flex flex-col">
                        <li className="flex gap-2 items-center">
                            <img
                                src={homeNavIcon}
                                alt="Home Icon"
                                className="h-[35px] w-[35px] object-center"
                            />
                            <a href="/home">Home</a>
                        </li>
                        <li className="flex gap-2 items-center">
                            <img
                                src={summaryNavIcon}
                                alt="Summary Icon"
                                className="h-[35px] w-[35px] object-center"
                            />
                            <a href="#">Summary</a>
                        </li>
                        <li className="flex gap-2 items-center">
                            <img
                                src={budgetBotNavIcon}
                                alt="BudgetBot Icon"
                                className="h-[35px] w-[35px] object-center"
                            />
                            <a href="#">BudgetBot</a>
                        </li>
                        <li className="flex gap-2 items-center">
                            <img
                                src={settingNavIcon}
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
                <div className="pt-10 flex flex-wrap w-full h-full gap-10 justify-evenly">
                    <div className="w-1/3 h-1/5 bg-white shadow-md rounded-lg p-4">
                        <h1 className="text-lg md:text-2xl lg:text-3xl">This month's expenses:</h1>
                        <h2 className="text-3xl font-bold md:text-xl lg:text-2xl p-2">$1234.56</h2>
                    </div>
                    <div className="w-1/3 h-1/5 bg-white shadow-md rounded-lg p-4">
                        <h1 className="text-lg md:text-2xl lg:text-3xl">Savings:</h1>
                        <h2 className="text-3xl font-bold md:text-xl lg:text-2xl p-2">$1234.56</h2>
                    </div>
                    <div className="w-[80%] h-[40vh] bg-white shadow-md rounded-lg p-4">
                        <h1 className="text-lg md:text-2xl lg:text-3xl">Earnings/Expenses Monthly Comparison</h1>
                        <div className="w-full h-full">
                            ...Insert graph here
                        </div>
                    </div>
                    <div className="w-[80%] h-[40vh] bg-white shadow-md rounded-lg p-4">
                        <h1 className="text-lg md:text-2xl lg:text-3xl">Expenses Breakdown:</h1>
                        <div className="w-full h-full">
                            ...Insert table here
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
