import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  const { tipo } = useParams(); 

  useEffect(() => {
    setIsLoading(true);
    const itemRef = doc(db, "items", tipo);

    getDoc(itemRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id });
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
        Detalle del Producto
      </Typography>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
