import { db } from "../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export default async function (collectionName:string, filter:string|null = null) {
  console.log("start");
  let querySnapshot
  if (filter) {
    const q = query(collection(db, collectionName), where("Team", "==", filter));
    querySnapshot = await getDocs(q)
  } else {
    querySnapshot = await getDocs(collection(db, collectionName));
  }
  return querySnapshot;
}
