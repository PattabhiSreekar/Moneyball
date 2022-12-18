import getData from "../collections/getData";
import addData from "../collections/addData";

import { Team } from "./types";

const collection = "Teams";

const getTeams = async () => {
  try {
    return await getData(collection);
  } catch (e) {
    return e;
  }
};

const addTeams = async (team:Team) => {
  try {
    addData(collection, team);
  } catch (e) {
    return e;
  }
};

export{getTeams, addTeams}