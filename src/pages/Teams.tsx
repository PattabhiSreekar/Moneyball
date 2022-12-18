import React, { useState, useEffect } from "react";
import Team from "../components/Team";
import { Team as TeamT } from "../endpoints/types";

import '../css/team.css'
import { addTeams, getTeams } from "../endpoints/teams";
import { addPlayers } from "../endpoints/players";

function Teams() {

  useEffect(() => {
    const fetchData = async () => {
      const response:any = await getTeams();
      console.log('fetch matches')
      let data:any = []
      response.forEach((doc:any) => {
        console.log(`${doc.data()}`);
        data = [...data,doc.data()]
      });
      setTeams([...teams,...data])
    };
    fetchData();
  }, []);
  const [teams, setTeams] = useState<TeamT[]>([
  ]);
  const [newTeam, setNewTeam] = useState({
    Name: "",
    Caption: "",
    Coach: "",
    Sponser: "",
    Continent: "",
  });

  const handleSubmit = (event:any) => {
    event.preventDefault();
    addTeams(newTeam)
    setTeams([...teams, newTeam]);
    setNewTeam({
      Name: "",
      Caption: "",
      Coach: "",
      Sponser: "",
      Continent: "",
    });
  };

  return (
    <div className="teams">
      <form onSubmit={handleSubmit}>
        <label>
          Team name:
          <input
            type="text"
            value={newTeam.Name}
            onChange={(event) =>
              setNewTeam({ ...newTeam, Name: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Captain:
          <input
            type="text"
            value={newTeam.Caption}
            onChange={(event) =>
              setNewTeam({ ...newTeam, Caption: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Coach:
          <input
            type="text"
            value={newTeam.Coach}
            onChange={(event) =>
              setNewTeam({ ...newTeam, Coach: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Sponsor:
          <input
            type="text"
            value={newTeam.Sponser}
            onChange={(event) =>
              setNewTeam({ ...newTeam, Sponser: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Continent:
          <input
            type="text"
            value={newTeam.Continent}
            onChange={(event) =>
              setNewTeam({ ...newTeam, Continent: event.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            <Team
              name={team.Name}
              captain={team.Caption}
              coach={team.Coach}
              sponsor={team.Sponser}
              continent={team.Continent}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
