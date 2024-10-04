import React from 'react';
function Home() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-20 bg-gray-800 flex items-center justify-between p-2 text-white z-50">
        {/* Logo Container */}
        <div className="flex items-center">
          <img src="./logoIcon.png" alt="Company Logo" className="h-8 mr-2" />
          <span className="text-lg font-bold">Finance Company</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/home" className="hover:text-green-300">Home</a></li>
            <li><a href="#" className="hover:text-green-300">Summary</a></li>
            <li><a href="#" className="hover:text-green-300">BudgetBot</a></li>
            <li><a href="/login" className="hover:text-green-300">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* <section className="motto">
        <h1>Manage Your Finance,<br/>Expand Your Savings</h1>
        <p>Track your savings and expenses effortlessly with our finance tool.<br/>Visualize your financial health through interactive charts, helping you stay on top of your budget</p>
        <button className="reg-button">Register Now →</button> 
      </section>

      <section className="preview-section">
        <div className="preview-post" id="post1">
          <img src="/savingsIcon.png" alt="icon 1" />
          <h2>Savings</h2>
          <p>Easily track your savings and watch your progress over time. Visualize your growth with clear charts to stay motivated and reach your financial goals.</p>
        </div>
        <div className="preview-post" id="post2">
          <img src="/summaryIcon.png" alt="icon 2" />
          <h2>Summary</h2>
          <p>See a complete snapshot of your finances with a comparison of your savings and expenses. Use interactive charts to quickly assess your budget and adjust as needed.</p>
        </div>
        <div className="preview-post" id="post3">
          <img src="/expensesIcon.png" alt="icon 3" />
          <h2>Expenses</h2>
          <p>Manage your spending by tracking all your expenses in one place. Get detailed breakdowns to identify areas for improvement and stay in control of your finances.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Finance Company. All Rights Reserved.</p>
      </footer> */}
    </div>
  
  );
}

export default Home;