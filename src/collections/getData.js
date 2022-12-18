import { db } from "../config/firebase";
import { getDocs, collection, Timestamp } from "firebase/firestore"; 

export default async function (collectionName){
    console.log('start')
    const querySnapshot = await getDocs(collection(db, collectionName));
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.data()}`);
    //   });
    return querySnapshot
}
