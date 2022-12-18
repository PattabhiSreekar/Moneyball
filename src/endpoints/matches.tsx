import getData from "../collections/getData";
import addData from "../collections/addData";
import { Match } from "./types";

const collection = "Matches";

const getMatches = async () => {
  try {
    return await getData(collection);
  } catch (e) {
    return e;
  }
};

const addMatches = async (match:Match) => {
  try {
    addData(collection, match);
  } catch (e) {
    return e;
  }
};

export{getMatches, addMatches}