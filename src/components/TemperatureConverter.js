import React, { useState } from 'react';
import backgroundImage from '../images/TemperatureConverter.avif';
import slimImage from '../images/temperature_white.png';

function TemperatureConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('celsius');
  const [toUnit, setToUnit] = useState('fahrenheit');
  const [convertedValue, setConvertedValue] = useState(null);
  const [roundOutput, setRoundOutput] = useState(false);

  const convertTemperature = () => {
    const inputTemperature = parseFloat(inputValue);
    if (!isNaN(inputTemperature)) {
      let convertedTemp;
      if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedTemp = (inputTemperature * 9) / 5 + 32;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedTemp = ((inputTemperature - 32) * 5) / 9;
      } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        convertedTemp = inputTemperature + 273.15;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        convertedTemp = ((inputTemperature - 32) * 5) / 9 + 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        convertedTemp = inputTemperature - 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        convertedTemp = ((inputTemperature - 273.15) * 9) / 5 + 32;
      } else {
        convertedTemp = inputTemperature;
      }
      if (roundOutput) {
        setConvertedValue(convertedTemp.toFixed(2));
      } else {
        setConvertedValue(convertedTemp.toString());
      }
    } else {
      setConvertedValue('Invalid input');
    }
  };

  const clearInput = () => {
    setInputValue('');
    setConvertedValue(null);
  };

  return (
    <div>
      <img src={slimImage} alt="Slim temperature icon" style={{ width: '100%', height: 'auto' }} />
      <div className="converter-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'lightblue', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '24px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', marginBottom: '20px' }}>Temperature Converter</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '18px', color: 'white' }}>Temperature:</span>
          <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter temperature" style={{ fontSize: '16px', width: '200px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '18px', marginBottom: '10px', color: 'white' }}>From:</span>
            <div>
              <input type="radio" name="fromUnit" value="celsius" checked={fromUnit === 'celsius'} onChange={() => setFromUnit('celsius')} />
              <label htmlFor="celsius" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Celsius</label>
            </div>
            <div>
              <input type="radio" name="fromUnit" value="fahrenheit" checked={fromUnit === 'fahrenheit'} onChange={() => setFromUnit('fahrenheit')} />
              <label htmlFor="fahrenheit" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Fahrenheit</label>
            </div>
            <div>
              <input type="radio" name="fromUnit" value="kelvin" checked={fromUnit === 'kelvin'} onChange={() => setFromUnit('kelvin')} />
              <label htmlFor="kelvin" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Kelvin</label>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '18px', marginBottom: '10px', color: 'white' }}>To:</span>
            <div>
              <input type="radio" name="toUnit" value="celsius" checked={toUnit === 'celsius'} onChange={() => setToUnit('celsius')} />
              <label htmlFor="celsius" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Celsius</label>
            </div>
            <div>
              <input type="radio" name="toUnit" value="fahrenheit" checked={toUnit === 'fahrenheit'} onChange={() => setToUnit('fahrenheit')} />
              <label htmlFor="fahrenheit" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Fahrenheit</label>
            </div>
            <div>
              <input type="radio" name="toUnit" value="kelvin" checked={toUnit === 'kelvin'} onChange={() => setToUnit('kelvin')} />
              <label htmlFor="kelvin" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Kelvin</label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button className="convert-button" onClick={convertTemperature} style={{ fontSize: '16px', backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '4px', marginRight: '10px' }}>Convert</button>
          <button className="clear-button" onClick={clearInput} style={{ fontSize: '16px', backgroundColor: 'red', color: 'white', padding: '8px 16px', borderRadius: '4px' }}>Clear</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', color: 'white' }}>
          <input type="checkbox" id="roundOutput" checked={roundOutput} onChange={() => setRoundOutput(!roundOutput)} style={{ marginRight: '10px' }} />
          <label htmlFor="roundOutput" style={{ fontSize: '16px' }}>Round Output</label>
        </div>
        <div className="converted-result" style={{ fontSize: '18px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', marginTop: '20px' }}>Converted Temperature: {convertedValue}</div>
      </div>
    </div>
  );
}

export default TemperatureConverter;
