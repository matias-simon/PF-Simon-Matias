import React from "react";
import { Container } from "@mui/material";
import CardItem from "../CardItem/CardItem";

const ItemList = ({ itemList = [] }) => {
  return (
    <Container>
      <div className="fondo-cards">
        {itemList.map((prod) => {
          return (
            <CardItem
              key={prod.id}
              alt={prod.marca}
              marca={prod.marca}
              modelo={prod.modelo}
              precio={prod.precio}
              img={prod.img}
              descripcion={prod.descripcion}
              id={prod.id}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ItemList;
