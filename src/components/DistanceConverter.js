import React, { useState } from 'react';
import backgroundImage from '../images/DistanceConverter.jpeg';
import slimImage from '../images/distance_white.png';

function DistanceConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [convertedValue, setConvertedValue] = useState(null);
  const [roundOutput, setRoundOutput] = useState(false);

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
      if (roundOutput) {
        setConvertedValue(convertedDist.toFixed(2));
      } else {
        setConvertedValue(convertedDist.toString());
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
      <img src={slimImage} alt="Slim distance icon" style={{ width: '100%', height: 'auto' }} /> 
      <div className="converter-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'green', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '24px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', marginBottom: '20px' }}>Distance Converter</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '18px', color: 'white' }}>Distance:</span>
          <input type="number" id="inputValue" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter distance" style={{ fontSize: '16px', width: '200px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '18px', marginBottom: '10px', color: 'white' }}>From:</span>
            <div>
              <input type="radio" id="meter" name="fromUnit" value="meter" checked={fromUnit === 'meter'} onChange={() => setFromUnit('meter')} />
              <label htmlFor="meter" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Meter</label>
            </div>
            <div>
              <input type="radio" id="kilometer" name="fromUnit" value="kilometer" checked={fromUnit === 'kilometer'} onChange={() => setFromUnit('kilometer')} />
              <label htmlFor="kilometer" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Kilometer</label>
            </div>
            <div>
              <input type="radio" id="mile" name="fromUnit" value="mile" checked={fromUnit === 'mile'} onChange={() => setFromUnit('mile')} />
              <label htmlFor="mile" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Mile</label>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '18px', marginBottom: '10px', color: 'white' }}>To:</span>
            <div>
              <input type="radio" id="toMeter" name="toUnit" value="meter" checked={toUnit === 'meter'} onChange={() => setToUnit('meter')} />
              <label htmlFor="toMeter" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Meter</label>
            </div>
            <div>
              <input type="radio" id="toKilometer" name="toUnit" value="kilometer" checked={toUnit === 'kilometer'} onChange={() => setToUnit('kilometer')} />
              <label htmlFor="toKilometer" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Kilometer</label>
            </div>
            <div>
              <input type="radio" id="toMile" name="toUnit" value="mile" checked={toUnit === 'mile'} onChange={() => setToUnit('mile')} />
              <label htmlFor="toMile" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Mile</label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button className="convert-button" onClick={convertDistance} style={{ fontSize: '16px', backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '4px', marginRight: '10px' }}>Convert</button>
          <button className="clear-button" onClick={clearInput} style={{ fontSize: '16px', backgroundColor: 'red', color: 'white', padding: '8px 16px', borderRadius: '4px' }}>Clear</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', color: 'white' }}>
          <input type="checkbox" id="roundOutput" checked={roundOutput} onChange={() => setRoundOutput(!roundOutput)} style={{ marginRight: '10px' }} />
          <label htmlFor="roundOutput" style={{ fontSize: '16px' }}>Round Output</label>
        </div>
        <div className="converted-result" style={{ fontSize: '18px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', marginTop: '20px' }}>Converted Distance: {convertedValue}</div>
      </div>
    </div>
  );
}

export default DistanceConverter;

