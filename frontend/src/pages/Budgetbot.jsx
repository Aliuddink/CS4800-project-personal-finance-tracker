import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const genAI = new GoogleGenerativeAI('AIzaSyDzSTXab-1xDNFF56CxNjv8WxcPb8hgLzU');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (inputValue.trim() === '') return;

    // Add user input to chat history
    setChatHistory([...chatHistory, { sender: 'User', text: inputValue }]);
    setInputValue(''); // Clear input after submission

    // Generate response from the AI
    try {
      const result = await model.generateContent(inputValue);
      setChatHistory(prev => [...prev, { sender: 'AI', text: result.response.text() }]);
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Title section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img 
          src="botIcon.png" 
          alt="Bot Icon" 
          style={{ width: '50px', height: '50px', marginRight: '10px' }}
        />
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>BudgetBot</h1>
      </div>

      {/* Chat container */}
      <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
          {chatHistory.map((message, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <div style={{ fontWeight: 'bold', color: message.sender === 'User' ? '#0078D4' : '#28a745' }}>
                {message.sender}:
              </div>
              <div style={{ backgroundColor: message.sender === 'User' ? '#e0f7fa' : '#e8f5e9', padding: '10px', borderRadius: '8px', color: 'black' }}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
            color: 'black'
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#1FC978',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default InputBox;
