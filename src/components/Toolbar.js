import React from 'react';
import logo from '../assets/logo.svg'
import '../css/toolbar.css'

import {  useNavigate } from "react-router-dom";


function Toolbar(props) {
  

  const navigate = useNavigate()
  const handleTeamsClick = () => {
    navigate('/teams')
  };

  const handleMatchesClick = () => {
    navigate('/matches')
  };

  const logout = () =>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className="toolbar">
      <img style={{width:"70px",height:"50px"}} src={logo} alt="Logo"></img>
      <button onClick={handleTeamsClick}>Teams</button>
      <button onClick={handleMatchesClick}>Matches</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Toolbar;
