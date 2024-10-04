import React from "react";

// This button is meant to overwrite the default button style
const CustomButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-none focus:outline-none"
    >
      {children}
    </button>
  );
};

export default CustomButton;
