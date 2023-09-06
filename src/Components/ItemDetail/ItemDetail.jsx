import { React, useContext } from "react";
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

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleOnAdd = () => {
    addItem(item, count);
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // flexDirection: "column",
          padding: 3,
        }}
      >
        <Box width={"50%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}alignItems={"center"}>
        <CardMedia
          component="img"
          sx={{ height: 400, objectFit: "contain" }}
          src={item.img}
          title={item.tipo}
        />
         <CardActions>
          <ItemCount
            count={count}
            handleDown={handleDown}
            handleUp={handleUp}
            handleOnAdd={handleOnAdd}
          />
        </CardActions>
        </Box>
        <Box width={"50%"}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.marca} {item.modelo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.descripcion}
            </Typography>
            <Typography textAlign={"center"} variant="h3" marginTop={6}>
              $ {item.precio}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};
export default ItemDetail;
