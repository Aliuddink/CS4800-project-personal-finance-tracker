import React from 'react';

function PersonalInfo() {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-6 flex flex-col">
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full"></div>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li><a href="/home" className="hover:text-green-300">Home</a></li>
            <li><a href="#" className="hover:text-green-300">Summary</a></li>
            <li><a href="#" className="hover:text-green-300">BudgetBot</a></li>
            <li><a href="#" className="hover:text-green-300">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Profile Section */}
      <main className="flex-1 flex items-center justify-center bg-gray-200">
        <section className="bg-white p-8 rounded-lg shadow-md text-center w-11/12 md:w-3/4 lg:w-1/2">
          <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-6"></div>
          <h1 className="text-2xl font-semibold mb-4">Name</h1>
          <button className="bg-green-500 text-white py-2 px-6 rounded mb-4 hover:bg-green-600">
            Edit Profile
          </button>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name, Last Name"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="email@gmail.com"
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button className="bg-gray-600 text-white py-2 px-6 rounded mt-4 hover:bg-gray-700">
            Log Out
          </button>
        </section>
      </main>
    </div>
  );
}

export default PersonalInfo;
