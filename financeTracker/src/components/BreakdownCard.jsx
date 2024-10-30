import React from "react";
import CardButton from "../components/CardButton";
import { TableHeader, TableRow, FilterDropdown } from "./TableComponents";

export default function BreakdownCard() {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    {
      title: "Chipotle",
      tagName: "food",
      savings: "$724.47",
      date: "09/19/2024",
    },
    {
      title: "Housing",
      tagName: "rent",
      savings: "$734.56",
      date: "09/12/2024",
    },
  ]);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleRemoveItemClick = () => {
    console.log("Remove item clicked");
    // Include Remove item logic here
  };

  const handleAddItemClick = () => {
    console.log("Add item clicked");
    // Include Add item logic here
  };

  const handleSortLogic = (type) => {
    if (type === "newest") {
      console.log("Sorting by newest");
      setItems((prevItems) =>
        [...prevItems].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    } else if (type === "oldest") {
      console.log("Sorting by oldest");
      setItems((prevItems) =>
        [...prevItems].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
    } else if (type === "alphabetically") {
      console.log("Sorting alphabetically");
      setItems((prevItems) =>
        [...prevItems].sort((a, b) => a.title.localeCompare(b.title))
      );
    }

    // Close filter dropdown
    setIsFilterOpen(false);
  };

  return (
    <div
      className={`p-4  h-[40vh] bg-white shadow-md rounded-md md:col-span-2`}
    >
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-lg md:text-xl font-bold" id="card-header">
          Earning/Expenses Breakdown:
        </h1>
        <div className="relative flex" id="filter-icons">
          <CardButton onClick={handleFilterClick}>
            <img
              src="./summaryPage/filterIcon.png"
              alt="Filter Icon"
              className="w-4 h-4 object-contain flex-shrink-0"
            />
          </CardButton>
          <CardButton onClick={handleRemoveItemClick}>
            <img
              src="./summaryPage/removeItemIcon.png"
              alt="Remove Item Icon"
              className="w-4 h-4 object-contain flex-shrink-0"
            />
          </CardButton>
          <CardButton onClick={handleAddItemClick}>
            <img
              src="./summaryPage/addItemIcon.png"
              alt="Add Item Button"
              className="w-4 h-4 object-contain flex-shrink-0"
            />
          </CardButton>
          {isFilterOpen && <FilterDropdown onSort={handleSortLogic} />}
        </div>
      </div>

      {/* Table content */}
      <div className="overflow-x-auto items-center justify-center flex">
        <table className="min-w-[95%] mt-4 px-4">
          <TableHeader />
          <tbody className="bg-white">
            {items.map((item, index) => (
              <TableRow
                key={index}
                title={item.title}
                tagName={item.tagName}
                tagColor={item.tagColor}
                savings={item.savings}
                date={item.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
