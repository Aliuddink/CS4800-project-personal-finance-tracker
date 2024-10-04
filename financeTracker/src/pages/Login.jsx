import React from 'react';
function Login() {
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
      <div className="flex justify-center items-center h-screen w-screen">
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
          <div className="bg-white w-full max-w-2xl h-96 p-12 rounded-lg shadow-lg z-10 relative">
            <h1 className="text-green-500 text-4xl font-bold mb-2 text-center">Login</h1> {/* Green Login Text */}
            {/* Two Gray Boxes */}
            <div className="flex flex-col items-center space-y-4 w-full">
              <div className="bg-gray-500 w-96 h-20 rounded-lg shadow-md flex items-center p-4"> {/* Increased width */}
                <img
                  src="logoIcon.png" // Replace with your image path
                  alt="Image"
                  className="w-12 h-12 object-cover rounded-full mr-4" // Adjust image size and margin
                />
                <input
                  type="text"
                  placeholder="Usernames"
                  className="bg-gray-500 w-full h-full rounded-lg pl-1 outline-none text-white placeholder-white text-xl" // Updated className
                />
              </div>
              <div className="bg-gray-500 w-96 h-20 rounded-lg shadow-md flex items-center p-4"> {/* Increased width */}
                <img
                  src="logoIcon.png" // Replace with your image path
                  alt="Image"
                  className="w-12 h-12 object-cover rounded-full mr-4" // Adjust image size and margin
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="bg-gray-500 w-full h-full rounded-lg pl-1 outline-none text-white placeholder-white text-xl" // Updated className
                />
              </div>
            </div>
            <div className="flex-1 flex justify-end"> {/* Use flex to align text on the right */}
              <span className="text-sm text-blue-500 cursor-pointer">Forgot Username/Password?</span>
            </div>
            <div className="flex justify-center mt-4"> {/* Center the button below the text */}
              <div className="bg-green-500 w-48 h-12 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-semibold">Login</span>
              </div>
            </div>
            <div className="flex justify-center"> {/* Center the text */}
              <span className="text-sm text-gray-600">Don't have an account? <span className="text-blue-500 cursor-pointer">Join Now</span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;