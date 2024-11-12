import React, { useState } from 'react';

function SavingCard() {
  const [isEditingExpenses, setIsEditingExpenses] = useState(false);
  const [isEditingSavings, setIsEditingSavings] = useState(false);
  const [expenses, setExpenses] = useState('1234.56');
  const [savings, setSavings] = useState('1234.56');
  const [tempExpenses, setTempExpenses] = useState(expenses);
  const [tempSavings, setTempSavings] = useState(savings);

  const handleEditExpenses = () => {
    setIsEditingExpenses(true);
    setTempExpenses(expenses); // Set temp value in case of cancel
  };

  const handleEditSavings = () => {
    setIsEditingSavings(true);
    setTempSavings(savings); // Set temp value in case of cancel
  };

  const handleSaveExpenses = () => {
    setExpenses(tempExpenses);
    setIsEditingExpenses(false);
  };

  const handleSaveSavings = () => {
    setSavings(tempSavings);
    setIsEditingSavings(false);
  };

  const handleCancelExpenses = () => {
    setIsEditingExpenses(false);
    setTempExpenses(expenses); // Reset temp value to saved value
  };

  const handleCancelSavings = () => {
    setIsEditingSavings(false);
    setTempSavings(savings); // Reset temp value to saved value
  };

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {/* Expenses Card */}
      <div className="border border-gray-300 rounded-lg p-4 min-w-[250px] shadow-md flex-1">
        <div className="flex flex-col items-start">
          <label className="text-gray-700 font-semibold mb-1">This month's expenses:</label>
          {isEditingExpenses ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tempExpenses}
                onChange={(e) => setTempExpenses(e.target.value)}
                className="w-full px-2 py-1 text-lg border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSaveExpenses}
                className="bg-white text-blue-500 hover:text-blue-700 p-2 rounded-md border border-gray-300"
              >
                Save
              </button>
              <button
                onClick={handleCancelExpenses}
                className="bg-white text-gray-500 hover:text-gray-700 p-2 rounded-md border border-gray-300"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${expenses}</span>
              <button onClick={handleEditExpenses} className="bg-white p-1 rounded-full">
                <img src="/summaryPage/editButton.png" alt="Edit" className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Savings Card */}
      <div className="border border-gray-300 rounded-lg p-4 min-w-[250px] shadow-md flex-1">
        <div className="flex flex-col items-start">
          <label className="text-gray-700 font-semibold mb-1">Savings:</label>
          {isEditingSavings ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tempSavings}
                onChange={(e) => setTempSavings(e.target.value)}
                className="w-full px-2 py-1 text-lg border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSaveSavings}
                className="bg-white text-blue-500 hover:text-blue-700 p-2 rounded-md border border-gray-300"
              >
                Save
              </button>
              <button
                onClick={handleCancelSavings}
                className="bg-white text-gray-500 hover:text-gray-700 p-2 rounded-md border border-gray-300"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${savings}</span>
              <button onClick={handleEditSavings} className="bg-white p-1 rounded-full">
                <img src="/summaryPage/editButton.png" alt="Edit" className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SavingCard;
