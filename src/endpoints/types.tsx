type Match = {
        TeamA: String,
        TeamB: String,
        Date: String,
        Winner: String,
        Points: String,
  };

  type Team = {
    Name: String,
    Caption: String,
    Coach: String,
    Sponser: String,
    Continent: String
};

type Player = {
    Name: String,
    Team: String,
    JerseyNo: String
    Goals: String
};

export type {Match, Team, Player}