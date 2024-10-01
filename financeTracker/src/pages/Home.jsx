import React from 'react';
import {BrowserRouter, Routes, Route} from 'react'
function App() {
  return (
    <div>

      <header>
        <div className="logo-container">
          <img src="/logoIcon.png" alt="Company Logo" className="logo" />
          <span className="logo-text">Finance Company</span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Summary</a></li>
            <li><a href="#">BudgetBot</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className="motto">
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
      </footer>
    </div>
  
  );
}

export default App;