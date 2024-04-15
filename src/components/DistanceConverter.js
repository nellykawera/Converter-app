import React, { useState } from 'react';
import backgroundImage from '../images/DistanceConverter.jpeg';
import '../';

function DistanceConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [convertedValue, setConvertedValue] = useState(null);

  const convertDistance = () => {
    const inputValueFloat = parseFloat(inputValue);
    if (!isNaN(inputValueFloat)) {
      let convertedDist;
      if (fromUnit === 'meter' && toUnit === 'kilometer') {
        convertedDist = inputValueFloat / 1000;
      } else if (fromUnit === 'meter' && toUnit === 'mile') {
        convertedDist = inputValueFloat * 0.000621371;
      } else if (fromUnit === 'kilometer' && toUnit === 'meter') {
        convertedDist = inputValueFloat * 1000;
      } else if (fromUnit === 'kilometer' && toUnit === 'mile') {
        convertedDist = inputValueFloat * 0.621371;
      } else if (fromUnit === 'mile' && toUnit === 'meter') {
        convertedDist = inputValueFloat / 0.000621371;
      } else if (fromUnit === 'mile' && toUnit === 'kilometer') {
        convertedDist = inputValueFloat / 0.621371;
      } else {
        convertedDist = inputValueFloat;
      }
      setConvertedValue(convertedDist.toFixed(3));
    } else {
      setConvertedValue('Invalid input');
    }
  };

  return (
    <div className="converter-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'green' }}>
      <h2 style={{ fontSize: '24px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px' }}>Distance Converter</h2>
      <label htmlFor="inputValue" style={{ fontSize: '18px', color: 'white' }}>Distance:</label>
      <input type="number" id="inputValue" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter distance" style={{ fontSize: '16px' }} />

      <div className="unit-selectors" style={{ fontSize: '18px', color: 'white' }}>
        <label htmlFor="fromUnit">From:</label>
        <select id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={{ fontSize: '16px' }}>
          <option value="meter">Meter</option>
          <option value="kilometer">Kilometer</option>
          <option value="mile">Mile</option>
        </select>

        <label htmlFor="toUnit">To:</label>
        <select id="toUnit" value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={{ fontSize: '16px' }}>
          <option value="meter">Meter</option>
          <option value="kilometer">Kilometer</option>
          <option value="mile">Mile</option>
        </select>
      </div>

      <button className="convert-button" onClick={convertDistance} style={{ fontSize: '16px', backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '4px', marginTop: '10px' }}>Convert</button>

      <div className="converted-result" style={{ fontSize: '18px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', marginTop: '10px' }}>Converted Distance: {convertedValue}</div>
    </div>
  );
}

export default DistanceConverter;
