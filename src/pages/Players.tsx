import React, { useState, useEffect } from "react";
import { Player as PlayerT } from "../endpoints/types";
import "../css/player.css";
import { useNavigate, useLocation } from "react-router-dom";
import { addPlayers, getPlayers } from "../endpoints/players";

function Player(props: any) {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state.team);

  const [players, setPlayers] = useState<PlayerT[]>([]);

  const [newPlayer, setNewPlayer] = useState({
    Team: '',
    Name: '',
    JerseyNo: '',
    Goals: ''
  });


  const handleSubmit = (event:any) => {
    event.preventDefault();
    // console.log(newMatch)
    addPlayers({...newPlayer, Team:state.team})
    setPlayers([...players, {...newPlayer, Team:state.team}]);
    setNewPlayer({ Team: '',
    Name: '',
    JerseyNo: '',
  Goals:'' });
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await getPlayers(state.team);
      console.log("fetch matches");
      let data: any = [];
      response.forEach((doc: any) => {
        console.log(`${doc.data()}`);
        data = [...data, doc.data()];
      });
      setPlayers([...players, ...data]);
    };
    fetchData();
  }, []);
  console.log(players);

  return (
    <div className='matches'>
      <form className="cool-form"  onSubmit={handleSubmit}>
    <label>
    Name:
      <input
        type="text"
        name="Team"
        value={newPlayer.Name}
        onChange={(event) => setNewPlayer({ ...newPlayer, Name: event.target.value })}
      />
    </label>
    
    <label>
    Jersey number:
      <input
        type="text"
        name="Jersey number"
        value={newPlayer.JerseyNo}
        onChange={(event) => setNewPlayer({ ...newPlayer, JerseyNo: event.target.value })}
      />
    </label>

    <br />
    <label>
    Total Goals:
      <input
        type="text"
        name="Date"
        value={newPlayer.Goals}
        onChange={(event) => setNewPlayer({ ...newPlayer, Goals: event.target.value })}
      />
    </label>
    <button type="submit">Add Player</button>
  </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>JerseyNo</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player:PlayerT) => (
          <tr>
            <td>{player.Name}</td>
            <td>{player.Team}</td>
            <td>{player.JerseyNo}</td>
            <td>{player.Goals}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Player;
