import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import '../css/matches.css'
import {Match as MatchT} from '../endpoints/types'
import {getMatches,addMatches} from '../endpoints/matches'

function Matches() {
  useEffect(() => {
    const fetchData = async () => {
      const response:any = await getMatches();
      console.log('fetch matches')
      let data:any = []
      response.forEach((doc:any) => {
        console.log(`${doc.data()}`);
        data = [...data,doc.data()]
      });
      setMatches([...matches,...data])
    };
    fetchData();
  }, []);
  const [matches, setMatches] = useState<MatchT[]>([
  ]);
  const [newMatch, setNewMatch] = useState({
    TeamA: '',
    TeamB: '',
    Date: '',
    Winner: '',
    Points: '',
  });

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // console.log(newMatch)
    addMatches(newMatch)
    setMatches([...matches, newMatch]);
    setNewMatch({ TeamA: '', TeamB: '', Date: '', Winner: '', Points: '' });
    
  }
  return (
    <div className='matches'>
      <form onSubmit={handleSubmit}>
      <label>
        Team A:
        <input type="text" value={newMatch.TeamA} onChange={(event) => setNewMatch({ ...newMatch, TeamA: event.target.value })} />
      </label>
      <br />
      <label>
        Team B:
        <input type="text" value={newMatch.TeamB} onChange={(event) => setNewMatch({ ...newMatch, TeamB: event.target.value })} />
      </label>
      <br />
      <label>
        Date:
        <input type="Date" value={newMatch.Date} onChange={(event) => setNewMatch({ ...newMatch, Date: event.target.value })} />
      </label>
      <br />
      <label>
        Winner:
        <input type="text" value={newMatch.Winner} onChange={(event) => setNewMatch({ ...newMatch, Winner: event.target.value })} />
      </label>
      <br />
      <label>
        Points:
        <input type="text" value={newMatch.Points} onChange={(event) => setNewMatch({ ...newMatch, Points: event.target.value })} />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
      <ul>
      {matches.map((match, index) => (
          <li key={index}>
            <Match
              TeamA={match.TeamA}
              TeamB={match.TeamB}
              Date={match.Date}
              Winner={match.Winner}
              Points={match.Points}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Matches
