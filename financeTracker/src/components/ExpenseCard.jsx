import React, { useState } from "react";

export default function ExpenseCard() {
  const [isEditingExpenses, setIsEditingExpenses] = useState(false);
  const [expenses, setExpenses] = useState("1234.56");
  const [tempExpenses, setTempExpenses] = useState(expenses);

// Allow for expenses input
  const handleEditExpenses = () => {
    setIsEditingExpenses(true);
    setTempExpenses(expenses); 
  };

  const handleSaveExpenses = () => {
    setExpenses(tempExpenses);
    setIsEditingExpenses(false);
  };

  const handleCancelExpenses = () => {
    setIsEditingExpenses(false);
    setTempExpenses(expenses); 
  };

 // Only allows for 2 decimal places
  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setTempExpenses(value);
    }
  };

  // Keybinds "Escape" key to trigger the "Cancel" key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveExpenses(); 
    } else if (e.key === "Escape") {
      handleCancelExpenses();
    }
  };

  // Format Card
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 h-[300px] w-[800px] flex flex-col justify-between">
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-3">
          This Month's Expenses:
        </label>
        {isEditingExpenses ? (
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={tempExpenses}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} 
              className="flex-1 px-3 py-2 text-lg border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={handleSaveExpenses}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              onClick={handleCancelExpenses}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-gray-800">${expenses}</span>
            <button
              onClick={handleEditExpenses}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <img
                src="/summaryPage/editButton.png"
                alt="Edit"
                className="w-6 h-6"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
