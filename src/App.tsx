import SignIn from './pages/SignIn';
import SignUp  from './pages/SignUp';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Matches from './pages/Matches';
import Player from './pages/Players';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState }  from 'react';
import Toolbar from './components/Toolbar';

function App() {
  const [currentView, setCurrentView] = useState('teams');
  const token = localStorage.getItem('token')
  

  return (
    <div>
      
      <Router>
      {token?<Toolbar  />:null}
        <Routes>
            <Route  path="/" element={<SignIn/>} />
            <Route  path="/signup" element={<SignUp/>} />
            <Route  path="/home" element={<Home/>} />
            <Route  path="/teams" element={<Teams/>} />
            <Route  path="/matches" element={<Matches/>} />
            <Route  path="/players" element={<Player/>}/>
        </Routes>
      </Router>
    </div>
  );
}

  export default App;
