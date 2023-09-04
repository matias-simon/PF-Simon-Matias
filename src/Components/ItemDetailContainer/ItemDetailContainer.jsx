import React, { useEffect, useState } from "react";
import { getInstrumento } from "../../productos/productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import { db } from "../../Services/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const itemRef = doc(db, "items", id)
    getDoc(itemRef)
        .then((resp) => {
            setItem({ ...resp.data(), id: resp.id }),
                setIsLoading(false)
        })           
  }, [id]);

  if (isLoading) return <Loading />;

  return (
    <div className="fondo">
      
     <ItemDetail item={item}/>
     
    </div>
  );
};

export default ItemDetailContainer;
