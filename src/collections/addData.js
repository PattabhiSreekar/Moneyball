import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore"; 

export default async function (collectionName, data){
    console.log('start')
    data = {...data}
    const docRef = await addDoc(collection(db, collectionName),data)
    console.log(docRef)
}
