import SignIn from './pages/SignIn';
import SignUp  from './pages/SignUp';
import Home from './pages/Home';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route  path="/" element={<SignIn/>} />
            <Route  path="/signup" element={<SignUp/>} />
            <Route  path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

  export default App;
