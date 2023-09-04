import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { getCategory, getInstrumentos } from "../../productos/productos";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Services/firebase/firebaseConfig";

const ItemListContainer = ({ Greetings }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState([]);
  const { tipo } = useParams();

  useEffect(() => {

    const itemsRef = collection(db, "items");
    const qry = tipo ? query(itemsRef, where("tipo", "==", tipo)) : itemsRef

    getDocs(qry)
        .then((resp) => {
            setItem(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
        }
            , setIsLoading(false)
        )
}, [tipo])

  if (isLoading) return <Loading />;

  return (
    <div className="fondo">
      <Typography variant="h2" sx={{ textAlign: "center", padding: "1rem" }}>
        {Greetings}
      </Typography>
      <ItemList itemList={item} />
    </div>
  );
};

export default ItemListContainer;
