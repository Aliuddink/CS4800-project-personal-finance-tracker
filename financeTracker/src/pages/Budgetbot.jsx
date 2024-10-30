import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const genAI = new GoogleGenerativeAI('AIzaSyDzSTXab-1xDNFF56CxNjv8WxcPb8hgLzU');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    const result = await model.generateContent(inputValue);
    setSubmittedValue(result.response.text());
    setInputValue(''); // Optionally clear the input after submission
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px', margin: 'auto' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{ padding: '10px', width: '100%', marginBottom: '10px', color: 'black' }}
      />
      <button onClick={handleSubmit} style={{ padding: '10px', width: '100%' }}>
        Submit
      </button>
      {submittedValue && (
        <div style={{ marginTop: '10px', color: 'green' }}>
          <strong>Output:</strong> {submittedValue}
        </div>
      )}
    </div>
  );
};

export default InputBox;
