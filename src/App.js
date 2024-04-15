// App.js
import React, { useState } from 'react';
import './App.css';
import DistanceConverter from './components/DistanceConverter';
import TemperatureConverter from './components/TemperatureConverter';
import MassConverter from './components/MassConverter';

function App() {
  const [currentPage, setCurrentPage] = useState('distance');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li className={currentPage === 'distance' ? 'active' : ''}><button onClick={() => handlePageChange('distance')}>Distance Converter</button></li>
          <li className={currentPage === 'temperature' ? 'active' : ''}><button onClick={() => handlePageChange('temperature')}>Temperature Converter</button></li>
          <li className={currentPage === 'mass' ? 'active' : ''}><button onClick={() => handlePageChange('mass')}>Mass Converter</button></li>
        </ul>
      </nav>

      <div className="content-container">
        {currentPage === 'distance' && <DistanceConverter />}
        {currentPage === 'temperature' && <TemperatureConverter />}
        {currentPage === 'mass' && <MassConverter />}
      </div>
    </div>
  );
}

export default App;
