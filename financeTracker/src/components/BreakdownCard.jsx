import React from "react";
import CardButton from "../components/CardButton";

export default function BreakdownCard() {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  }

  const handleRemoveItemClick = () => {
    console.log('Remove item clicked');
    // Include Remove item logic here
  }

  const handleAddItemClick = () => {
    console.log('Add item clicked');
    // Include Add item logic here
  }

  const handleSortLogic = (type) => {
    if (type === 'newest') {
      console.log('Sorting by newest');
      // Add sorting logic here
    } else if (type === 'oldest') {
      console.log('Sorting by oldest');
      // Add sorting logic here
    }
    else if (type === 'alphabetically') {
      console.log('Sorting alphabetically');
      // Add sorting logic here
    }

    // Close filter dropdown
    setIsFilterOpen(false);
  }

  return (
    <div className={`p-4  h-[40vh] bg-white shadow-md rounded-md md:col-span-2`}>
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-lg md:text-xl font-bold" id='card-header'>Expenses Breakdown:</h1>
        <div className="relative flex" id="filter-icons">
          <CardButton onClick={handleFilterClick}>
            <img
              src="./summaryPage/filterIcon.png"
              alt="Filter Icon"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </CardButton>
          <CardButton onClick={handleRemoveItemClick}>
            <img
              src="./summaryPage/removeItemIcon.png"
              alt="Remove Item Icon"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </CardButton>
          <CardButton onClick={handleAddItemClick}>
            <img
              src="./summaryPage/addItemIcon.png"
              alt="Add Item Button"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </CardButton>
          { isFilterOpen && (
            <div className="absolute mr-10 bg-white shadow-lg rounded p-2 z-10 text-center md:right-0">
              <ul>
                <li className="p-1 hover:bg-gray-200 cursor-pointer" onClick={() => handleSortLogic('newest')}>Newest</li>
                <li className="p-1 hover:bg-gray-200 cursor-pointer" onClick={() => handleSortLogic('oldest')}>Oldest</li>
                <li className="p-1 hover:bg-gray-200 cursor-pointer" onClick={() => handleSortLogic('alphabetically')}>Alphabetically</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-full pt-2">...Insert table here</div>
    </div>
  );
}
