import './App.css';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import HomeCard from './components/HomeCard';
import Weather from './components/Weather';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element  = {<HomeCard/>}/>
        <Route exact path = "/weather" element  = {<Weather/>}/>
      </Routes>
      <Fotter/>
      </Router>
      
      
    </div>
  );
}

export default App;
