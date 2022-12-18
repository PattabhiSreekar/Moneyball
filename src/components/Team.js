import React from 'react';

function Team(props) {
  return (
    <div className="team">
      <h2>{props.name}</h2>
      <p>Captain: {props.captain}</p>
      <p>Coach: {props.coach}</p>
      <p>Sponsor: {props.sponsor}</p>
      <p>Continent: {props.continent}</p>
    </div>
  );
}

export default Team;
