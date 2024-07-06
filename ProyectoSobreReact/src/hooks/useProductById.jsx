
import { getFirestore, doc, getDoc  } from 'firebase/firestore'
import React from 'react'


export const useProductById = (id) => {
  const [product, setProduct] = React.useState({})
  const [error, serError] = React.useState(false); 
  const [loading , setLoading] = React.useState(true)

  React.useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "products", id);

    getDoc(productRef)
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
      
  }, [id]);

  return {product}
}


