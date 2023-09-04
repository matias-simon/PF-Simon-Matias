import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Services/firebase/firebaseConfig";

const ItemListContainer = ({ Greetings }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { tipo } = useParams(); 
  useEffect(() => {
    setIsLoading(true);
    const itemsRef = collection(db, "items");
    
    
    const qry = tipo ? query(itemsRef, where("tipo", "==", tipo)) : itemsRef;

    getDocs(qry)
      .then((resp) => {
        setItems(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [tipo]);

  if (isLoading) return <Loading />;

  return (
    <div className="fondo">
      <Typography variant="h2" sx={{ textAlign: "center", padding: "1rem" }}>
        {Greetings}
      </Typography>
      <ItemList itemList={items} />
    </div>
  );
};

export default ItemListContainer;
