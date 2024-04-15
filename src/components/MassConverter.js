import React, { useState } from 'react';
import massConverterBackgroundImage from '../images/MassConverter.jpeg';

function MassConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('kilogram');
  const [toUnit, setToUnit] = useState('pound');
  const [convertedValue, setConvertedValue] = useState(null);

  const convertMass = () => {
    const inputValueFloat = parseFloat(inputValue);
    if (!isNaN(inputValueFloat)) {
      let convertedMass;
      if (fromUnit === 'kilogram' && toUnit === 'pound') {
        convertedMass = inputValueFloat * 2.20462;
      } else if (fromUnit === 'pound' && toUnit === 'kilogram') {
        convertedMass = inputValueFloat / 2.20462;
      } else {
        convertedMass = inputValueFloat;
      }
      setConvertedValue(convertedMass.toFixed(2));
    } else {
      setConvertedValue('Invalid input');
    }
  };

  return (
    <div className="converter-container" style={{ backgroundImage: `url(${massConverterBackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'green' }}>
      <h2 style={{ fontSize: '24px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px' }}>Mass Converter</h2>
      <label htmlFor="inputValue" style={{ fontSize: '18px', color: 'white' }}>Mass:</label>
      <input type="number" id="inputValue" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter mass" style={{ fontSize: '16px' }} />

      <div className="unit-selectors" style={{ fontSize: '18px', color: 'white' }}>
        <label htmlFor="fromUnit">From:</label>
        <select id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={{ fontSize: '16px' }}>
          <option value="kilogram">Kilogram</option>
          <option value="pound">Pound</option>
        </select>

        <label htmlFor="toUnit">To:</label>
        <select id="toUnit" value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={{ fontSize: '16px' }}>
          <option value="kilogram">Kilogram</option>
          <option value="pound">Pound</option>
        </select>
      </div>

      <button className="convert-button" onClick={convertMass} style={{ fontSize: '16px', backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '4px', marginTop: '10px' }}>Convert</button>

      <div className="converted-result" style={{ fontSize: '18px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', marginTop: '10px' }}>Converted Mass: {convertedValue}</div>
    </div>
  );
}

export default MassConverter;
