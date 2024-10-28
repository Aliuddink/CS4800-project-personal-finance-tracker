import ollama from 'ollama'
import React, { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await ollama.chat({
        model: 'mistral',
        messages: [{ role: 'user', content: inputValue }],
        temperature: 0.9, // Adjust for creativity
        top_p: 0.9, // Adjust for diversity
    })
    console.log(response)
    setSubmittedValue(response.message.content);
    setInputValue(''); // Optionally clear the input after submission
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px', margin: 'auto' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
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
