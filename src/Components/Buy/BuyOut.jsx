import "./Buy.css";
import { simpleCart } from "../../utils/utils";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Services/firebase/firebaseConfig";
import { BuyDetail } from "../BuyDetail/BuyDetail";
import { Box, Button, Typography } from "@mui/material";

export function BuyOut() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState({});
  const { register, handleSubmit } = useForm();
  const { cartList, totalPrice, removeList } = useContext(CartContext);

  const buy = async (contact) => {
    const newOrder = {
      buyer: { contact },
      items: simpleCart(cartList),
      date: new Date(),
      total: totalPrice(),
      state: "generated",
    };
    //)
    const buyoutsRef = collection(db, "buyouts");
    try {
      const docRef = await addDoc(buyoutsRef, newOrder);
      setOrderId(docRef.id);
      removeList();
      setOrder(newOrder);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return orderId ? (
    <>
      <Box>
        <Typography textAlign={'center'} variant="h1">Gracias Por tu Compra</Typography>
        <Typography textAlign={'center'} variant="h4">
          El ID de tu Orden Es: <strong>{orderId}</strong>
        </Typography>
      </Box>
      <BuyDetail order={order} />
    </>
  ) : (
    <section className="form-container">
      <div class="login-box">
        <h2>Finaliza tu Compra</h2>
        <form
          name="formulario"
          className="form-buy-data"
          onSubmit={handleSubmit(buy)}
        >
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
          <Box>
          <div class="user-box">
            <input type="text" name="" required="" {...register("name")} />
            <label>Tu Nombre</label>
          </div>
          <div class="user-box">
            <input type="phone" name="" required="" {...register("phone")} />
            <label>Tu Telefono</label>
          </div>
          <div class="user-box">
            <input type="email" name="" required="" {...register("email")} />
            <label>Tu E-mail</label>
          </div>
          </Box>
          <Button
            className="button"
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            Completa Tu Compra
          </Button>
          </Box>
        </form>
      </div>
    </section>
  );
}
