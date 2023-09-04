import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import CardItem from "../CardItem/CardItem";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cartList, ammountInCart, removeList, totalPrice, deleteItem } =
    useContext(CartContext);

  const handleClear = () => {
    removeList();
  };

  return ammountInCart() === 0 ? (
    <EmptyCart />
  ) : (
    <Box display={"flex"} flexDirection={ "column"} alignItems={"center"} justifyContent={"center"}>
    <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(350px, 1fr))"}>
      {cartList.map((p) => (
        <CartItem
          key={p.id}
          img={p.img}
          marca={p.marca}
          modelo={p.modelo}
          descripcion={p.descripcion}
          precio={p.precio}
          deleteItem={deleteItem}
          cantidad={p.count}
        />
      ))}
      </Box>
      <Typography variant="h3">Total: ${totalPrice()}</Typography>
      <Button
        onClick={handleClear}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#333",
          "&:hover": { backgroundColor: "#555" },
        }}
      >
        Limpiar Carrito
      </Button>

      <Link to={"/checkout"}>
        {" "}
        <Button
          variant="contained"
          size="large"
          sx={{marginTop:3,
            color: "white",
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#555" },
          }}
        >
          Checkout
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
