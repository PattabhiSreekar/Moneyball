import React from 'react';
import logo from '../assets/logo.svg'
import '../css/toolbar.css'
function Toolbar(props) {
  return (
    <div className="toolbar">
      <img style={{width:"70px",height:"50px"}} src={logo} alt="Logo"></img>
      <button onClick={props.onTeamsClick}>Teams</button>
      <button onClick={props.onMatchesClick}>Matches</button>
      <button>Logout</button>
    </div>
  );
}

export default Toolbar;
