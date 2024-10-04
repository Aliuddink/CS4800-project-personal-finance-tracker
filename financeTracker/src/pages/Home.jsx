import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div>
      {/* Navbar/Header */}
      <header className="fixed top-0 left-0 w-full h-20 bg-black flex items-center justify-between p-4 text-white z-50">
        <div className="flex items-center">
          <img src="./logoIcon.png" alt="Company Logo" className="h-8 mr-2" />
          <span className="text-lg font-bold">Finance Company</span>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-[#1FC978]">Home</Link></li>
            <li><Link to="/summary" className="hover:text-[#1FC978]">Summary</Link></li>
            <li><Link to="/budgetbot" className="hover:text-[#1FC978]">BudgetBot</Link></li>
            <li><Link to="/login" className="hover:text-[#1FC978]">Login</Link></li>
          </ul>
        </nav>
      </header>

      <section className="pt-28 pb-18 px-4 bg-black w-full">
        <div className="container mx-auto max-w-screen-lg flex flex-col items-start">
          <div className="flex items-start w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 pt-6 text-left flex-1">
              Manage Your Finance,<br />
              Expand Your Savings
              <img
                src="/increaseIcon.png"
                alt="arrow increasing"
                className="w-50 h-50 inline ml-5"  
              />
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white mb-8 text-left">
            Track your savings and expenses effortlessly with our finance tool. <br />
            Visualize your financial health through interactive charts, helping you stay on top of your budget.
          </p>

          <Link to="/signup">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition duration-300 mb-0">
              Register Now →
            </button>
          </Link>

          <img
            src="/pigMoneyIcon.png"
            alt="Pig logo with money"
            className="mt-1 ml-auto w-1/3 max-w-xs rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
            <img src="/savingsIcon.png" alt="Savings Icon" className="h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Savings</h2>
            <p className="text-gray-600">
              Easily track your savings and watch your progress over time. Visualize your growth with clear charts to stay motivated and reach your financial goals.
            </p>
          </div>

          {/* Post 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
            <img src="/summaryIcon.png" alt="Summary Icon" className="h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
            <p className="text-gray-600">
              See a complete snapshot of your finances with a comparison of your savings and expenses. Use interactive charts to quickly assess your budget and adjust as needed.
            </p>
          </div>

          {/* Post 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
            <img src="/expensesIcon.png" alt="Expenses Icon" className="h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Expenses</h2>
            <p className="text-gray-600">
              Manage your spending by tracking all your expenses in one place. Get detailed breakdowns to identify areas for improvement and stay in control of your finances.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-black py-6 text-center">
        <p>&copy; 2024 Finance Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
