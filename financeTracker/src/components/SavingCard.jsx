import React, { useState } from "react";

export default function SavingCard() {
  const [isEditingSavings, setIsEditingSavings] = useState(false);
  const [savings, setSavings] = useState("1234.56");
  const [tempSavings, setTempSavings] = useState(savings);

// Allow for savings input
  const handleEditSavings = () => {
    setIsEditingSavings(true);
    setTempSavings(savings); 
  };

  const handleSaveSavings = () => {
    setSavings(tempSavings);
    setIsEditingSavings(false);
  };

  const handleCancelSavings = () => {
    setIsEditingSavings(false);
    setTempSavings(savings); 
  };

  // Only allows for 2 decimal places
  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setTempSavings(value);
    }
  };

  // Keybinds "Enter" key to trigger the "Save" key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveSavings(); 
    } else if (e.key === "Escape") {
      handleCancelSavings(); 
    }
  };


  // Format Card
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 h-[300px] w-[800px] flex flex-col justify-between">
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-3">
          Savings:
        </label>
        {isEditingSavings ? (
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={tempSavings}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}  
              className="flex-1 px-3 py-2 text-lg border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={handleSaveSavings}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              onClick={handleCancelSavings}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-gray-800">${savings}</span>
            <button
              onClick={handleEditSavings}
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
