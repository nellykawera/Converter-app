// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DistanceConverter from './components/DistanceConverter';
import TemperatureConverter from './components/TemperatureConverter';
import MassConverter from './components/MassConverter';
import Navbar from './components/reusable/navbar';
import './App.css';

function App() {
  const routes = [
    { path: '/', element: <DistanceConverter /> },
    { path: '/mass', element: <MassConverter /> },
    { path: '/temperature', element: <TemperatureConverter /> }
  ]

  return (
    <main>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </div>
      
    </main>
  );
}

export default App;
