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
      savings: "13.47",
      date: "2024-09-19",
      type: "expense",
    },
    {
      title: "Salary",
      tagName: "income",
      savings: "2000.00",
      date: "2024-09-10",
      type: "earning",
    },
    {
      title: "Rent",
      tagName: "rent",
      savings: "800.00",
      date: "2024-09-01",
      type: "expense",
    },
  ]);

  const [newItem, setNewItem] = React.useState({
    title: "",
    tagName: "",
    savings: "",
    date: "",
    type: "expense",
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

  // Add Item Click Handlers
  const handleAddItemClick = () => setIsAddItemOn(!isAddItemOn);
  const handleRemoveItemClick = () => setIsDeleteItemOn(!isDeleteItemOn);

  // Add Item Validation
  const validateFields = (name, value) => {
    const errorMsgs = { ...errors };

    if (name === "title" || name === "tagName") {
      errorMsgs[name] = value.trim() ? "" : `${name} cannot be empty`;
    }

    if (name === "savings") {
      if (value.trim() === "") {
        errorMsgs[name] = "Amount cannot be empty";
      } else if (!/^\d+(\.\d{1,2})?$/.test(value)) {
        errorMsgs[name] = "Amount should be a valid number";
      } else {
        delete errorMsgs[name];
      }
    }

    if (name === "date") {
      errorMsgs[name] = value ? "" : "Please select a date";
    }

    setErrors(errorMsgs);
  };

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
    validateFields(name, value);
  };

  // Add New Item
  const handleAddNewItem = () => {
    const isValid =
      Object.values(newItem).every((value) => value.trim() !== "") &&
      Object.keys(errors).every((key) => !errors[key]);

    if (isValid) {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem({ title: "", tagName: "", savings: "", date: "", type: "expense" });
      setIsAddItemOn(false);
      setErrors({});
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  // Delete Item
  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Sort Items
  const handleSortLogic = (type) => {
    if (type === "newest") {
      setItems((prevItems) => [...prevItems].sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else if (type === "oldest") {
      setItems((prevItems) => [...prevItems].sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else if (type === "alphabetically") {
      setItems((prevItems) => [...prevItems].sort((a, b) => a.title.localeCompare(b.title)));
    }
    setIsFilterOpen(false);
  };

  return (
    <div className="p-4 h-[40vh] bg-white shadow-md rounded-md md:col-span-2">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-lg md:text-xl font-bold">Earnings/Expenses Breakdown:</h1>

        <div className="relative flex">
          <button onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <img src="./summaryPage/filterIcon.png" alt="Filter" className="w-4 h-4" />
          </button>
          <button onClick={handleRemoveItemClick}>
            <img src="./summaryPage/removeItemIcon.png" alt="Remove" className="w-4 h-4" />
          </button>
          <button onClick={handleAddItemClick}>
            <img src="./summaryPage/addItemIcon.png" alt="Add" className="w-4 h-4" />
          </button>
          {isFilterOpen && <FilterDropdown onSort={handleSortLogic} />}
        </div>
      </div>

      {Object.keys(errors).length > 0 && isAddItemOn && (
        <div className="bg-red-100 text-red-700 p-2 rounded-md my-4">
          <ul>{Object.values(errors).map((error, index) => <li key={index}>{error}</li>)}</ul>
        </div>
      )}

      <div className="overflow-x-auto flex md:justify-center">
        <table className="min-w-[95%] mt-4 px-4">
          <TableHeader />
          <tbody>
            {items.map((item, index) => (
              <TableRow
                key={index}
                title={item.title}
                tagName={item.tagName}
                savings={`$${item.savings}`}
                date={item.date}
                type={item.type}
                isDeleteOn={isDeleteItemOn}
                onDelete={() => handleDeleteItem(index)}
              />
            ))}

            {isAddItemOn && (
              <tr>
                <td><input type="text" name="title" placeholder="Title" onChange={handleNewItemChange} /></td>
                <td>
                  <select name="tagName" onChange={handleNewItemChange}>
                    <option value="">Select Tag</option>
                    {predefinedTags.map((tag, index) => (
                      <option key={index} value={tag.toLowerCase()}>{tag}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <input type="text" name="savings" placeholder="Amount" onChange={handleNewItemChange} />
                </td>
                <td><input type="date" name="date" onChange={handleNewItemChange} /></td>
                <td>
                  <select name="type" onChange={handleNewItemChange}>
                    <option value="expense">Expense</option>
                    <option value="earning">Earning</option>
                  </select>
                </td>
                <td><button onClick={handleAddNewItem}>Add</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
