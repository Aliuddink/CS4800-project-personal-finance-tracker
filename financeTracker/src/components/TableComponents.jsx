import React from 'react';

// TableHeader Component
export function TableHeader() {
  return (
    <thead className='text-center items-center border-b border-neutral-400'>
      <tr>
        <th scope="col" className="pt-2 py-3 text-xs font-bold text-gray-800 tracking-wider">
          Title
        </th>
        <th scope="col" className="pt-2 py-3 text-xs font-bold text-gray-800 tracking-wider">
          Tags
        </th>
        <th scope="col" className="pt-2 py-3 text-xs font-bold text-gray-800 tracking-wider">
          Savings
        </th>
        <th scope="col" className="pt-2 py-3 text-xs font-bold text-gray-800 tracking-wider">
          Date
        </th>
      </tr>
    </thead>
  );
}

// TableRow Component
// Usage: <TableRow title="Chipotle" tagName="food" savings="$724.47" date="09/19/2024" />
export function TableRow({ title, tagName, savings, date, isDeleteOn, onDelete }) {
  return (
    <tr className='text-center divide-x divide-neutral-400'>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap flex justify-center text-sm text-gray-800 ">
        <TableTag tagName={tagName} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {savings}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {date}
      </td>
      {isDeleteOn && (
        <td className='whitespace-nowrap text-sm text-gray-800 px-2'>
          <button onClick={onDelete} className="bg-neutral-100 text-red-500 hover:text-red-700 hover:border-neutral-500">
            X
          </button>
        </td>
      )}
    </tr>
  );
}

// FilterDropdown Component
// Usage: <FilterDropdown onSort={handleSortLogic} />
export function FilterDropdown({ onSort }) {
  return (
    <div className="absolute mr-10 bg-white shadow-lg rounded p-2 z-10 text-center md:right-0">
      <ul>
        <li className="p-1 hover:bg-gray-200 cursor-pointer" onClick={() => onSort('newest')}>
          Newest
        </li>
        <li className="p-1 hover:bg-gray-200 cursor-pointer" onClick={() => onSort('oldest')}>
          Oldest
        </li>
        <li className="p-1 hover:bg-gray-200 cursor-pointer" onClick={() => onSort('alphabetically')}>
          Alphabetically
        </li>
      </ul>
    </div>
  );
}

// TableTag Component
// Usage: <TableTag tagName="food" />
export function TableTag({ tagName }) {
    let color = '';
    switch (tagName.toUpperCase()) {
        case 'FOOD':
            color = 'bg-cyan-400';
            break;
        case 'RENT':
            color = 'bg-amber-500';
            break;
        // Add more tag colors here
        default:
            color = 'bg-gray-400';
    }

    return (
        <div className={`text-center py-0.5 px-3 md:px-6 md:w-28 text-black ${color}`}>
            {tagName.toUpperCase()}
        </div>
    );
}