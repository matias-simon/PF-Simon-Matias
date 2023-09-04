import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, count) => {
    let newItem = { ...item, count };
    let newCartList = [...cartList];

    let isInCart = newCartList.find((item) => item.id == newItem.id);

    isInCart ? (isInCart.count += count) : newCartList.push(newItem);

    setCartList(newCartList);
  };
  const removeList = () => {
    setCartList([]);
  };
  const deleteItem = (itemToDelete) => {
    let indexItem = [...cartList].findIndex((i) => i.id === itemToDelete.id);
    let newCartList = [...cartList];
    indexItem !== -1 && newCartList[indexItem].count > 1
      ? (newCartList[indexItem].count -= 1)
      : newCartList.splice(indexItem, 1);
    setCartList(newCartList);
  };
  const ammountInCart = () => {
    return cartList.reduce((acc, item) => acc + item.count, 0);
  };
  const totalPrice = () => {
    return cartList.reduce((acc, item) => acc + parseFloat(item.precio) * item.count, 0)
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        ammountInCart,
        totalPrice,
        addItem,
        removeList,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
