import React, { useState, useEffect } from 'react';


const useCharacterLimit = (initialValue, limit) => {
  const [text, setText] = useState(initialValue);
  const [warning, setWarning] = useState(false);
  const remaining = limit - text.length;

  const handleChange = (e) => {
    const val = e.target.value;
    if (val.length <= limit) {
      setText(val);
    }
  };

  useEffect(() => {
    setWarning(remaining <= 10);
  }, [remaining]);

  return { text, remaining, warning, handleChange };
};


const CounterDisplay = ({ count, remaining, isWarning }) => (
  <div style={{ marginTop: '15px', lineHeight: '1.6' }}>
    <p>Characters: {count}</p>
    <p>Remaining: {remaining}</p>
    {isWarning && <p style={{ color: '#d9534f', fontWeight: 'bold' }}>⚠️ Only {remaining} characters left!</p>}
  </div>
);


export default function CharacterCounter() {
  const LIMIT = 50;
  const { text, remaining, warning, handleChange } = useCharacterLimit("", LIMIT);

  return (
    <div>
      <h2>Live charecter Counter</h2>
      <textarea 
        value={text} 
        onChange={handleChange} 
        rows="4" 
        style={{ width: '100%', maxWidth: '400px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }} 
        placeholder="Type a message..."
      />
      <CounterDisplay count={text.length} remaining={remaining} isWarning={warning} />
    </div>
  );
}