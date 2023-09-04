import React, { useState } from "react";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";

function App() {
  

  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer Greetings={"Instrumentos"}/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element= {<ItemDetailContainer/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
