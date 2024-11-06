import React from "react";
import { TableHeader, TableRow, FilterDropdown } from "./TableComponents";

export default function BreakdownCard() {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [isAddItemOn, setIsAddItemOn] = React.useState(false);
  const [isDeleteItemOn, setIsDeleteItemOn] = React.useState(false);
  const [items, setItems] = React.useState([
    {
      title: "Chipotle",
      tagName: "food",
      savings: "724.47",
      date: "2024-09-19",
    },
    {
      title: "Housing",
      tagName: "rent",
      savings: "734.56",
      date: "2024-09-12",
    },
  ]);

  const [newItem, setNewItem] = React.useState({
    title: "",
    tagName: "",
    savings: "",
    date: "",
  });

  const predefinedTags = [
    "Food",
    "Rent",
    "Utilities",
    "Transportation",
    "Healthcare",
    "Leisure",
    "Other",
  ];

  const [errors, setErrors] = React.useState({});

  const handleAddItemClick = () => {
    setIsAddItemOn(!isAddItemOn);
  };

  const handleRemoveItemClick = () => {
    setIsDeleteItemOn(!isDeleteItemOn);
  };


  // Add Item Logic----------------------------------------------
  const validateFields = (name, value) => {
    const errorMsgs = { ...errors };

    if (name === "title" || name === "tagName") {
      if (!value.trim()) {
        errorMsgs[name] = `${name} cannot be empty`;
      } else {
        delete errorMsgs[name];
      }
    }

    if (name === "savings") {
      if (!/^\d+(\.\d{1,2})?$/.test(value)) {
        errorMsgs[name] = "Savings should be a valid number";
      } else {
        delete errorMsgs[name];
      }
    }

    if (name === "date") {
      if (!value) {
        errorMsgs[name] = "Please select a date";
      } else {
        delete errorMsgs[name];
      }
    }

    setErrors(errorMsgs);
  };

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
    validateFields(name, value);
  };

  const handleAddNewItem = () => {
    const isValid = Object.keys(newItem).every(
      (key) => !errors[key] && newItem[key].trim()
    );

    if (isValid) {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem({ title: "", tagName: "", savings: "", date: "" });
      setIsAddItemOn(false);
      setErrors({});
    } else {
      alert(
        "The input box is empty or invalid. Please fill in the correct information."
      );
    }
  };


  // Delete Item Logic----------------------------------------------
  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };


  // Sort Logic-----------------------------------------------------
  const handleSortLogic = (type) => {
    if (type === "newest") {
      setItems((prevItems) =>
        [...prevItems].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    } else if (type === "oldest") {
      setItems((prevItems) =>
        [...prevItems].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
    } else if (type === "alphabetically") {
      setItems((prevItems) =>
        [...prevItems].sort((a, b) => a.title.localeCompare(b.title))
      );
    }

    setIsFilterOpen(false);
  };

  return (
    <div className={`p-4 h-[40vh] bg-white shadow-md rounded-md md:col-span-2`}>
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Title */}
        <h1 className="text-lg md:text-xl font-bold">
          Earning/Expenses Breakdown:
        </h1>

        {/* Right Buttons */}
        <div className="relative flex">
          <button className="bg-transparent border-none focus:outline-none" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <img
              src="./summaryPage/filterIcon.png"
              alt="Filter Icon"
              className="w-4 h-4 object-contain flex-shrink-0"
            />
          </button>
          <button className="bg-transparent border-none focus:outline-none" onClick={handleRemoveItemClick}>
            <img
              src="./summaryPage/removeItemIcon.png"
              alt="Add Item Button"
              className="w-4 h-4 object-contain flex-shrink-0"
            />
          </button>
          <button className="bg-transparent border-none focus:outline-none" onClick={handleAddItemClick}>
            <img
              src="./summaryPage/addItemIcon.png"
              alt="Add Item Button"
              className="w-4 h-4 object-contain flex-shrink-0"
            />
          </button>
          {isFilterOpen && <FilterDropdown onSort={handleSortLogic} />}
        </div>
      </div>

      {/* Error Message (Displayed during add item mode) */}
      {Object.keys(errors).length > 0 && isAddItemOn && (
        <div className="bg-red-100 text-red-700 p-2 rounded-md my-4">
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index} className="text-sm">
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto flex md:justify-center">
        <table className="min-w-[95%] mt-4 px-4">
          <TableHeader />
          <tbody className="bg-white">
            {items.map((item, index) => (
              <TableRow
                key={index}
                title={item.title}
                tagName={item.tagName}
                savings={`$${item.savings}`}
                date={item.date}
                isDeleteOn={isDeleteItemOn}
                onDelete={() => handleDeleteItem(index)}
              />
            ))}

            {isAddItemOn && (
              <tr className="w-auto">
                <td className="">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full bg-white h-8 px-2 border border-gray-300 text-center"
                    value={newItem.title}
                    onChange={handleNewItemChange}
                  />
                </td>
                <td className="">
                  <select
                    name="tagName"
                    className="w-full bg-white h-8 px-2 border border-gray-300 text-center"
                    value={newItem.tagName}
                    onChange={handleNewItemChange}
                  >
                    <option value="">Select Tag</option>
                    {predefinedTags.map((tag, index) => (
                      <option key={index} value={tag.toUpperCase()}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="">
                  <input
                    type="text"
                    name="savings"
                    placeholder="Savings"
                    className="w-full bg-white h-8 px-2 border border-gray-300 text-center"
                    value={newItem.savings}
                    onChange={handleNewItemChange}
                  />
                </td>
                <td className="">
                  <input
                    type="date"
                    name="date"
                    className="w-full bg-white h-8 px-2 border border-gray-300 text-center"
                    value={newItem.date}
                    onChange={handleNewItemChange}
                  />
                </td>
                <td className="">
                  {Object.values(newItem).every(
                    (value) => value.trim() === ""
                  ) ? (
                    <button
                      onClick={() => {
                        handleAddItemClick();
                        setErrors({});
                      }}
                      className="bg-red-500 text-white px-4 py-1 rounded-md"
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      onClick={handleAddNewItem}
                      className="bg-green-500 text-white px-4 py-1 rounded-md"
                    >
                      Add
                    </button>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
