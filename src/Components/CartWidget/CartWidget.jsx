import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const {ammountInCart}= useContext(CartContext)
  return (
    <>
      <ShoppingCartIcon />{ammountInCart()}
    </>
  );
};

export default CartWidget;
