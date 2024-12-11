#BudgetBuddy
Finace Tracker helps users manage their finance and expand thieir savings

#Project Build & Deployment Instructions
Prerequisites: 
  - Node.js (v16 or higher)
  - Python (v3.9 or higher)
  - npm
  - web browser

#Deployment Instructions

git clone <https://github.com/CS4800Group/CS4800-project-personal-finance-tracker.git>

Backend:
cd backend
pip install -r requirements.txt
python app.py

Frontend:
cd financeTracker
npm install
npm run dev

#Project Release Notes
Features:
  Expense Logging: Users can manually log and categorize their expenses.
  Scanner: Users can upload their receipts and the OCR API key will scan it for data and add it to the entries.
  Budget Diagram: Pie chart of expenses vs earnings for users to visual see their finances.
  Responsive Design: Styled using Tailwind CSS for seamless usage on various devices.
  Budget Bot AI: An interactive chatbot providing budgeting tips and insights.
  
Technology Stack:
  Frontend: React.js, Tailwind CSS, JavaScript, HTML
  Backend: SQL, Python


