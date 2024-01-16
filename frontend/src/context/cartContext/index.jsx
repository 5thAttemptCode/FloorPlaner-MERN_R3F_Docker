import React, { useState } from 'react'

export const CartContext = React.createContext()

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])
  
    const addToCart = (item) => {
      setCart((currentCart) => [...currentCart, item])
    }

    const removeFromCart = (itemToRemove) => {
        setCart((currentCart) => currentCart.filter(item => item.name !== itemToRemove.name));
      }

    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {props.children}
      </CartContext.Provider>
    )
}