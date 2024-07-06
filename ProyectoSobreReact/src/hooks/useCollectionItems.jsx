import React from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";



export const useCollectionItems = (collectionName) => {
 const [items, setItems ] = React.useState([]);
 const [loading, setLoading] = React.useState(true);

 React.useEffect(() => {

   const db = getFirestore();

   const itemsColletion = collection(db, collectionName);

  
   getDocs(itemsColletion)
   .then((snapshot) => {
    setItems(
        snapshot.docs.map ((doc) => ({id : doc.id, ...doc.data() }))
    );
   })
   .catch ((error)=> console.log (error))
   .finally (() => setLoading (false))
 }, []);
 
    return {items, loading}
}

