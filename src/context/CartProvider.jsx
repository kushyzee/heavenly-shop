import React, { useReducer, createContext, useEffect, useContext } from "react";

const CartContext = createContext();
const SHIPPING_FEE = 200000;

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalItems: JSON.parse(localStorage.getItem("totalItems")) || 0,
  subtotal: JSON.parse(localStorage.getItem("subtotal")) || 0,
  total: JSON.parse(localStorage.getItem("total")) || 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find((item) => item.id === payload.id);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        const updatedSubtotal = state.subtotal + payload.koboPrice;
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          subtotal: updatedSubtotal,
          total: updatedSubtotal + SHIPPING_FEE,
        };
      } else {
        const updatedCart = [...state.cart, payload];
        const updatedSubtotal = state.subtotal + payload.koboPrice;
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          subtotal: updatedSubtotal,
          total: updatedSubtotal + SHIPPING_FEE,
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = state.cart.find((item) => item.id === payload);
      const updatedCart = state.cart.filter((item) => item.id !== payload);
      const updatedSubtotalAfterRemoval =
        state.subtotal - itemToRemove.koboPrice * itemToRemove.quantity;

      return {
        ...state,
        cart: updatedCart,
        totalItems: state.totalItems - itemToRemove.quantity,
        subtotal: updatedSubtotalAfterRemoval,
        total: updatedSubtotalAfterRemoval + SHIPPING_FEE,
      };

    case "INCREASE_QUANTITY":
      const increasedCart = state.cart.map((item) =>
        item.id === payload ? { ...item, quantity: item.quantity + 1 } : item,
      );
      const increasedItem = state.cart.find((item) => item.id === payload);
      const updatedSubtotalAfterIncrease =
        state.subtotal + increasedItem.koboPrice;

      return {
        ...state,
        cart: increasedCart,
        totalItems: state.totalItems + 1,
        subtotal: updatedSubtotalAfterIncrease,
        total: updatedSubtotalAfterIncrease + SHIPPING_FEE,
      };

    case "DECREASE_QUANTITY":
      const decreasedCart = state.cart.map((item) =>
        item.id === payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
      const decreasedItem = state.cart.find((item) => item.id === payload);
      const updatedSubtotalAfterDecrease =
        state.subtotal - decreasedItem.koboPrice;

      return {
        ...state,
        cart: decreasedCart,
        totalItems: state.totalItems - 1,
        subtotal: updatedSubtotalAfterDecrease,
        total: updatedSubtotalAfterDecrease + SHIPPING_FEE,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalItems: 0,
        subtotal: 0,
        total: 0,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
    localStorage.setItem("subtotal", JSON.stringify(state.subtotal));
    localStorage.setItem("total", JSON.stringify(state.total));

    if (!state.cart.length) {
      localStorage.removeItem("cart");
      localStorage.removeItem("totalItems");
      localStorage.removeItem("subtotal");
      localStorage.removeItem("total");
    }
  }, [state.cart, state.totalItems, state.subtotal, state.total]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
