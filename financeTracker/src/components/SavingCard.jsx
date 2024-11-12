import React, { useState } from "react";

export default function SavingCard() {
  const [savings, setSavings] = useState(1234.56);
  const [expenses, setExpenses] = useState(1234.56);
  const [isEditing, setIsEditing] = useState(false);
  const [newSavings, setNewSavings] = useState(savings);
  const [newExpenses, setNewExpenses] = useState(expenses);

  const handleEditClick = () => {
    setIsEditing(true);
    setNewSavings(savings); // Reset newSavings when editing starts
    setNewExpenses(expenses); // Reset newExpenses when editing starts
  };

  const handleSaveClick = () => {
    setSavings(newSavings);
    setExpenses(newExpenses);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center space-x-4">
      {/* Expenses Field */}
      <div className="p-4 h-full bg-white shadow-md rounded-md flex flex-col justify-between">
        <div className="items-center flex justify-between">
          <h1 className="text-lg md:text-xl lg:text-2xl">This month's expenses:</h1>
          <button
            className="bg-transparent border-none focus:outline-none"
            onClick={handleEditClick}
          >
            <img
              src="./summaryPage/editButton.png"
              alt="Edit Button"
              className="h-7 w-7 md:h-9 md:w-9 object-contain flex-shrink-0"
            />
          </button>
        </div>
        {isEditing ? (
          <input
            type="number"
            value={newExpenses}
            onChange={(e) => setNewExpenses(parseFloat(e.target.value))}
            className="text-3xl md:text-4xl 2xl:text-5xl font-bold p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ) : (
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold p-2">${expenses.toFixed(2)}</h2>
        )}
      </div>

      {/* Savings Field */}
      <div className="p-4 h-full bg-white shadow-md rounded-md flex flex-col justify-between">
        <div className="items-center flex justify-between">
          <h1 className="text-lg md:text-xl lg:text-2xl">Savings:</h1>
          <button
            className="bg-transparent border-none focus:outline-none"
            onClick={handleEditClick}
          >
            <img
              src="./summaryPage/editButton.png"
              alt="Edit Button"
              className="h-7 w-7 md:h-9 md:w-9 object-contain flex-shrink-0"
            />
          </button>
        </div>
        {isEditing ? (
          <input
            type="number"
            value={newSavings}
            onChange={(e) => setNewSavings(parseFloat(e.target.value))}
            className="text-3xl md:text-4xl 2xl:text-5xl font-bold p-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ) : (
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold p-2">${savings.toFixed(2)}</h2>
        )}
      </div>

      {/* Save and Cancel Buttons */}
      {isEditing && (
        <div className="flex space-x-4 mt-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
