import React from 'react';

// TableHeader Component
export function TableHeader() {
  return (
    <thead>
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 tracking-wider">
          Title
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 tracking-wider">
          Tags
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 tracking-wider">
          Savings
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 tracking-wider">
          Date
        </th>
      </tr>
    </thead>
  );
}

// TableRow Component
// Usage: <TableRow title="Chipotle" tagName="food" savings="$724.47" date="09/19/2024" />
export function TableRow({ title, tagName, savings, date }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
        {title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        <TableTag tagName={tagName} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {savings}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {date}
      </td>
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
        <div className={`text-center py-0.5 px-2 md:px-6 text-black ${color}`}>
            {tagName.toUpperCase()}
        </div>
    );
}