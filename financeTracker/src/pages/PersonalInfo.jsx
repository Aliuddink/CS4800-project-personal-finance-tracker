import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserProvider";
import axios from "axios"
import Sidebar from "../components/Sidebar";

function PersonalInfo() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { resetUser } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
      resetUser(); 
      navigate("/home"); 
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      alert("Logout failed. Please try again.");
    }
  };
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar />

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
