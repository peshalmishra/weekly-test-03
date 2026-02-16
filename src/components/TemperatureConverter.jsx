import React, { useState, useEffect } from 'react';


const useTemperatureSync = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [lastChanged, setLastChanged] = useState(null); 

  useEffect(() => {
    if (lastChanged === 'c') {
      const f = celsius === "" ? "" : (parseFloat(celsius) * 9/5 + 32).toFixed(2);
      setFahrenheit(f);
    } else if (lastChanged === 'f') {
      const c = fahrenheit === "" ? "" : ((parseFloat(fahrenheit) - 32) * 5/9).toFixed(2);
      setCelsius(c);
    }
  }, [celsius, fahrenheit, lastChanged]);

  const handleCelsiusChange = (e) => {
    setLastChanged('c');
    setCelsius(e.target.value);
  };

  const handleFahrenheitChange = (e) => {
    setLastChanged('f');
    setFahrenheit(e.target.value);
  };

  return { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange };
};


const TemperatureInputs = ({ celsius, fahrenheit, onCChange, onFChange }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px', maxWidth: '300px' }}>
    <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      Celsius: 
      <input type="number" value={celsius} onChange={onCChange} style={{ padding: '8px', width: '60%', borderRadius: '4px', border: '1px solid #ccc' }} />
    </label>
    <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      Fahrenheit: 
      <input type="number" value={fahrenheit} onChange={onFChange} style={{ padding: '8px', width: '60%', borderRadius: '4px', border: '1px solid #ccc' }} />
    </label>
  </div>
);


export default function TemperatureConverter() {
  const { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange } = useTemperatureSync();

  return (
    <div>
      <h2>Temperature Converter</h2>
      <TemperatureInputs 
        celsius={celsius} 
        fahrenheit={fahrenheit} 
        onCChange={handleCelsiusChange} 
        onFChange={handleFahrenheitChange} 
      />
    </div>
  );
}