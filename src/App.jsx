import React, { useState } from 'react';
import UserDirectory from './components/UserDirectory';
import CharacterCounter from './components/CharacterCounter';
import TemperatureConverter from './components/TemperatureConverter';
import FocusTracker from './components/FocusTracker';

const App = () => {
  
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Demo application.jsx</h1>
      
      {}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setActiveTab(1)}>Problem 1: User Directory</button>
        <button onClick={() => setActiveTab(2)}>Problem 2: Char Counter</button>
        <button onClick={() => setActiveTab(3)}>Problem 3: Temp Converter</button>
        <button onClick={() => setActiveTab(4)}>Problem 4: Focus Tracker</button>
      </div>

      {}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        {activeTab === 1 && <UserDirectory />}
        {activeTab === 2 && <CharacterCounter />}
        {activeTab === 3 && <TemperatureConverter />}
        {activeTab === 4 && <FocusTracker />}
      </div>
    </div>
  );
};

export default App;