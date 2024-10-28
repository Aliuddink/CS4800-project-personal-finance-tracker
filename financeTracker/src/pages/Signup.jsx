import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <header className="bg-black w-full fixed top-0 left-0 z-50">
        <div className="flex items-center p-4">
          <img
            src="logoIcon.png"
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          <span className="ml-4 text-lg font-semibold text-white">Finance Name</span>
        </div>
      </header>
      <div className="flex justify-center items-center h-screen w-screen mt-12">
        <div className="relative">
          {/* Circle behind the box */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-56 h-56 rounded-full z-0 flex items-center justify-center"
          >
            <img
              src="logoIcon.png" // Add your image path here
              alt="Circle Image"
              className="w-32 h-32 object-cover rounded-full -mt-24"
            />
          </div>

          {/* White Box */}
          <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg z-10 relative"> {/* Adjusted padding */}
            <h1 className="text-green-500 text-4xl font-bold mb-6 text-center">Create an Account</h1> {/* Increased margin-bottom */}
            {/* Input Fields */}
            <div className="flex flex-col items-center space-y-4 w-full">
              <div className="bg-gray-200 w-96 h-20 rounded-lg shadow-md flex items-center p-4">
                <img
                  src="personIcon.png" // Replace with your image path
                  alt="Image"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-gray-200 w-full h-full rounded-lg pl-1 outline-none text-black placeholder-black text-xl"
                />
              </div>
              <div className="bg-gray-200 w-96 h-20 rounded-lg shadow-md flex items-center p-4">
                <img
                  src="emailIcon.png" // Replace with your image path
                  alt="Image"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-200 w-full h-full rounded-lg pl-1 outline-none text-black placeholder-black text-xl"
                />
              </div>
              <div className="bg-gray-200 w-96 h-20 rounded-lg shadow-md flex items-center p-4">
                <img
                  src="passwordIcon.png" // Replace with your image path
                  alt="Image"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-200 w-full h-full rounded-lg pl-1 outline-none text-black placeholder-black text-xl"
                />
              </div>
              <div className="bg-gray-200 w-96 h-20 rounded-lg shadow-md flex items-center p-4">
                <img
                  src="passwordIcon.png" // Replace with your image path
                  alt="Image"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-gray-200 w-full h-full rounded-lg pl-1 outline-none text-black placeholder-black text-xl"
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="bg-green-500 w-48 h-12 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-semibold">Login</span>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <span className="text-sm text-gray-600">Have an account?
                <Link to="/Login">
                  <span className="text-green-500 cursor-pointer"> Sign in</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;