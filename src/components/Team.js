import React from 'react';

import { useNavigate } from "react-router-dom";

function Team(props) {
  const navigate = useNavigate()
  const getplayers =()=>{
    navigate('/players',{ state: { team:props.name } })
  }

  return (
    <div className="team-card" onClick={getplayers}>
      <h2>{props.name}</h2>
      <h3>{props.captain}</h3>
      <p>
        <strong>Coach:</strong> {props.coach}
      </p>
      <p>
        <strong>Sponsor:</strong> {props.sponsor}
      </p>
      <p>
        <strong>Continent:</strong> {props.continent}
      </p>
    </div>
  );
}

export default Team;
