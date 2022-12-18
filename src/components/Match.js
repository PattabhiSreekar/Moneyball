import React from 'react';

function Match(props) {
  return (
    <div className="match">
      <h2>{props.TeamA} vs. {props.TeamB}</h2>
      <p>Date: {props.Date}</p>
      <p>Winner: {props.Winner}</p>
      <p>Points: {props.Points}</p>
    </div>
  );
}

export default Match;
