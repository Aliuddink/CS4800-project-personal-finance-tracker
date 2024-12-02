import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserProvider";

function PersonalInfo() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);

    localStorage.removeItem("userToken"); 

    
    navigate("/home");
  };
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-48 fixed left-0 top-0 h-full items-center bg-black">
        <img
          src="./logoIcon.png"
          alt="Company Logo"
          className="h-[75px] w-[75px] object-center mt-4"
        />
        <nav className="pt-10">
          <ul className="flex flex-col gap-6">
            <li className="flex gap-2 items-center">
              <img
                src={"./summaryPage/homeNavIcon.png"}
                alt="Home Icon"
                className="h-[30px] w-[30px] object-center"
              />
              <a href="/home" className="text-white">Home</a>
            </li>
            <li className="flex gap-2 items-center">
              <img
                src={"./summaryPage/summaryNavIcon.png"}
                alt="Summary Icon"
                className="h-[30px] w-[30px] object-center"
              />
              <a href="/summary" className="text-white">Summary</a>
            </li>
            <li className="flex gap-2 items-center">
              <img
                src={"./summaryPage/budgetBotNavIcon.png"}
                alt="BudgetBot Icon"
                className="h-[30px] w-[30px] object-center"
              />
              <a href="#" className="text-white">BudgetBot</a>
            </li>
            <li className="flex gap-2 items-center">
              <img
                src={"./summaryPage/settingNavIcon.png"}
                alt="Setting Icon"
                className="h-[30px] w-[30px] object-center"
              />
              <a href="/personal-Info" className="text-white">Settings</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Profile Section */}
      <main className="flex-1 flex items-center justify-center bg-gray-200">
        <section className="bg-white p-8 rounded-lg shadow-md w-full h-full flex flex-col items-center justify-center">
          {/* Logo */}
          <img
            src="./logoIcon.png"
            alt="Company Logo"
            className="w-28 h-28 object-cover mb-6"
          />
          <h1 className="text-4xl font-semibold mb-6">Name</h1>
          <button className="bg-green-500 text-white py-4 px-10 text-xl rounded-full mb-8 hover:bg-green-600">
            Edit Profile
          </button>

          <div className="space-y-6 w-full max-w-lg flex flex-col items-center">
            {/* First Name Field */}
            <div className="flex items-center border border-gray-300 rounded p-4 w-full bg-white">
              <img
                src="./personIcon.png"
                alt="Person Icon"
                className="w-10 h-10"
              />
              <input
                type="text"
                placeholder="First Name"
                className="block w-full bg-white text-black text-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Last Name Field */}
            <div className="flex items-center border border-gray-300 rounded p-4 w-full bg-white">
              <img
                src="./personIcon.png"
                alt="Person Icon"
                className="w-10 h-10"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="block w-full bg-white text-black text-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border border-gray-300 rounded p-4 w-full bg-white">
              <img
                src="./emailIcon.png"
                alt="Email Icon"
                className="w-10 h-10"
              />
              <input
                type="email"
                placeholder="email@gmail.com"
                className="block w-full bg-white text-black text-lg p-3 border-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="bg-gray-500 text-white py-4 px-10 text-xl rounded-full mt-8 hover:bg-gray-600">
            Log Out
          </button>
        </section>
      </main>
    </div>
  );
}

export default PersonalInfo;
