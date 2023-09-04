import {React, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({item}) => {
  const {addItem}= useContext(CartContext)
  const [count, setCount] = useState(1);

  const handleDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleUp = () => {
    setCount(count+ 1);
  };
  const handleOnAdd = ()=>{
    addItem(item, count)
  }
  

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minWidth: 340,
          padding: 3,
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 200 }}
          src= {item.img}
          title={item.tipo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.marca} {item.modelo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.descripcion}
          </Typography>
          <Typography variant="h6">$ {item.precio}</Typography>
        </CardContent>
        <CardActions>
        
            <ItemCount count={count} handleDown={handleDown} handleUp={handleUp} handleOnAdd={handleOnAdd} />
          
        </CardActions>
      </Card>
    </Container>
  );
};
export default ItemDetail;
