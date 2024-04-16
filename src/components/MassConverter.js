import React, { useState } from 'react';
import backgroundImage from '../images/MassConverter.jpeg';
import slimImage from '../images/mass-white.png';

function MassConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('kilogram');
  const [toUnit, setToUnit] = useState('pound');
  const [convertedValue, setConvertedValue] = useState(null);
  const [roundOutput, setRoundOutput] = useState(false);

  const convertMass = () => {
    const inputMass = parseFloat(inputValue);
    if (!isNaN(inputMass)) {
      let convertedMass;
      if (fromUnit === 'kilogram' && toUnit === 'pound') {
        convertedMass = inputMass * 2.20462;
      } else if (fromUnit === 'pound' && toUnit === 'kilogram') {
        convertedMass = inputMass / 2.20462;
      } else if (fromUnit === 'kilogram' && toUnit === 'gram') {
        convertedMass = inputMass * 1000;
      } else if (fromUnit === 'gram' && toUnit === 'kilogram') {
        convertedMass = inputMass / 1000;
      } else if (fromUnit === 'pound' && toUnit === 'gram') {
        convertedMass = inputMass * 453.592;
      } else if (fromUnit === 'gram' && toUnit === 'pound') {
        convertedMass = inputMass / 453.592;
      } else {
        convertedMass = inputMass;
      }
      if (roundOutput) {
        setConvertedValue(convertedMass.toFixed(2));
      } else {
        setConvertedValue(convertedMass.toString());
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
      <img src={slimImage} alt="Slim mass icon" style={{ width: '100%', height: 'auto' }} />
      <div className="converter-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'lightgreen', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '24px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', marginBottom: '20px' }}>Mass Converter</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '18px', color: 'white' }}>Mass:</span>
          <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter mass" style={{ fontSize: '16px', width: '200px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '18px', marginBottom: '10px', color: 'white' }}>From:</span>
            <div>
              <input type="radio" name="fromUnit" value="kilogram" checked={fromUnit === 'kilogram'} onChange={() => setFromUnit('kilogram')} />
              <label htmlFor="kilogram" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Kilogram</label>
            </div>
            <div>
              <input type="radio" name="fromUnit" value="pound" checked={fromUnit === 'pound'} onChange={() => setFromUnit('pound')} />
              <label htmlFor="pound" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Pound</label>
            </div>
            <div>
              <input type="radio" name="fromUnit" value="gram" checked={fromUnit === 'gram'} onChange={() => setFromUnit('gram')} />
              <label htmlFor="gram" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Gram</label>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '18px', marginBottom: '10px', color: 'white' }}>To:</span>
            <div>
              <input type="radio" name="toUnit" value="kilogram" checked={toUnit === 'kilogram'} onChange={() => setToUnit('kilogram')} />
              <label htmlFor="kilogram" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Kilogram</label>
            </div>
            <div>
              <input type="radio" name="toUnit" value="pound" checked={toUnit === 'pound'} onChange={() => setToUnit('pound')} />
              <label htmlFor="pound" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Pound</label>
            </div>
            <div>
              <input type="radio" name="toUnit" value="gram" checked={toUnit === 'gram'} onChange={() => setToUnit('gram')} />
              <label htmlFor="gram" style={{ fontSize: '16px', marginLeft: '5px', color: 'white' }}>Gram</label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button className="convert-button" onClick={convertMass} style={{ fontSize: '16px', backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '4px', marginRight: '10px' }}>Convert</button>
          <button className="clear-button" onClick={clearInput} style={{ fontSize: '16px', backgroundColor: 'red', color: 'white', padding: '8px 16px', borderRadius: '4px' }}>Clear</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', color: 'white' }}>
          <input type="checkbox" id="roundOutput" checked={roundOutput} onChange={() => setRoundOutput(!roundOutput)} style={{ marginRight: '10px' }} />
          <label htmlFor="roundOutput" style={{ fontSize: '16px' }}>Round Output</label>
        </div>
        <div className="converted-result" style={{ fontSize: '18px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', marginTop: '20px' }}>Converted Mass: {convertedValue}</div>
      </div>
    </div>
  );
}

export default MassConverter;
