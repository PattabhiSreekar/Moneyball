import getData from "../collections/getData";
import addData from "../collections/addData";

import { Player } from "./types";

const collection = "Players";

const getPlayers = async (team:string) => {
  try {
    return await getData(collection,team);
  } catch (e) {
    return e;
  }
};

const addPlayers = async (player:Player) => {
  try {
    addData(collection, player);
  } catch (e) {
    return e;
  }
};

export{getPlayers, addPlayers}