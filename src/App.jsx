import React, { useState } from "react";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
import { BuyOut } from "./Components/Buy/BuyOut";

function App() {
  

  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer Greetings={"Instrumentos"}/>}/>
        <Route path="/category/:tipo" element={<ItemListContainer/>}/>
        <Route path="/item/:tipo" element= {<ItemDetailContainer/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/checkout" element={<BuyOut/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
