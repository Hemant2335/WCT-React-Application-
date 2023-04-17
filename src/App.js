import './App.css';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import HomeCard from './components/HomeCard';
import Weather from './components/Weather';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { useState } from 'react';

function App() {

  const [state , setstate] = useState({
    progress : 0
  })

  const setprogress=(prog)=>
  {
    setstate({
      progress : prog
    }) 
  }

  return (
    <div>
      <Router>
      <Navbar/>
      <LoadingBar
        height={4}
        color='#7F00FF'
        progress={state.progress}/>
      <Routes>
        <Route exact path = "/" element  = {<HomeCard/>}/>
        <Route exact path = "/weather" element  = {<Weather setprogress = {setprogress}/>}/>
      </Routes>
      <Fotter/>
      </Router>
      
      
    </div>
  );
}

export default App;
