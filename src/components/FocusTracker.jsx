import React, { useState, useRef } from 'react';

export default function FocusTracker() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  
  const inputRef = useRef(null);
  const historyRef = useRef([]); 
  const focusCountRef = useRef(0);
  
  const [displayFocusCount, setDisplayFocusCount] = useState(0);

  const handleFocus = () => {
    focusCountRef.current += 1;
    setDisplayFocusCount(focusCountRef.current);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, inputValue]);
    historyRef.current.push(inputValue);
    
    setInputValue("");
    inputRef.current.focus();
  };

  const triggerFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Focus Tracker & Message History</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          ref={inputRef}
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocus}
          placeholder="Type message..."
          style={{ padding: '8px', flexGrow: 1, maxWidth: '250px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSubmit} style={{ padding: '8px 16px', cursor: 'pointer' }}>Submit</button>
        <button onClick={triggerFocus} style={{ padding: '8px 16px', cursor: 'pointer' }}>Focus Input</button>
      </div>

      <p style={{ fontWeight: 'bold' }}>Focus count: {displayFocusCount}</p>

      <h3 style={{ marginTop: '20px' }}>Messages:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {messages.map((msg, index) => <li key={index} style={{ padding: '4px 0' }}>- {msg}</li>)}
      </ul>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#555' }}>
          History in Ref (no re-render): 
          <span style={{ fontWeight: 'normal' }}> {historyRef.current.join(", ") || "None yet"}</span>
        </p>
      </div>
    </div>
  );
}