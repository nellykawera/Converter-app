import React, { useState } from 'react';
import temperatureBackgroundImage from '../images/TemperatureConverter.jpeg';

function TemperatureConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('celsius');
  const [toUnit, setToUnit] = useState('fahrenheit');
  const [convertedValue, setConvertedValue] = useState(null);

  const convertTemperature = () => {
    const inputValueFloat = parseFloat(inputValue);
    if (!isNaN(inputValueFloat)) {
      let convertedTemp;
      if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedTemp = (inputValueFloat * 9/5) + 32;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedTemp = (inputValueFloat - 32) * 5/9;
      } else {
        convertedTemp = inputValueFloat;
      }
      setConvertedValue(convertedTemp.toFixed(2));
    } else {
      setConvertedValue('Invalid input');
    }
  };

  return (
    <div className="converter-container" style={{ backgroundImage: `url(${temperatureBackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'lightblue' }}>
      <h2 style={{ fontSize: '24px', padding: '10px' }}>Temperature Converter</h2>
      <label htmlFor="inputValue" style={{ fontSize: '18px' }}>Temperature:</label>
      <input type="number" id="inputValue" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter temperature" style={{ fontSize: '16px' }} />

      <div className="unit-selectors" style={{ fontSize: '18px' }}>
        <label htmlFor="fromUnit">From:</label>
        <select id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={{ fontSize: '16px' }}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>

        <label htmlFor="toUnit">To:</label>
        <select id="toUnit" value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={{ fontSize: '16px' }}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>

      <button className="convert-button" onClick={convertTemperature} style={{ fontSize: '16px', padding: '8px 16px', borderRadius: '4px', marginTop: '10px', backgroundColor: 'black', color: 'white' }}>Convert</button>

      <div className="converted-result" style={{ fontSize: '18px', padding: '10px', marginTop: '10px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>Converted Temperature: {convertedValue}</div>
    </div>
  );
}

export default TemperatureConverter;
