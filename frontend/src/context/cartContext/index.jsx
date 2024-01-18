import React, { useState } from 'react'


export const CartContext = React.createContext()

export const CartProvider = (props) => {

  const [cart, setCart] = useState([])


  //_______________________________________________
  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item])
  }


  //_______________________________________________
  const removeFromCart = (itemToRemove) => {
    setCart((currentCart) => currentCart.filter(item => item.name !== itemToRemove.name));
  }


  //_______________________________________________
  const increaseQuantity = (itemToIncrease) => {
    setCart((currentCart) => 
      currentCart.map((item) => 
        item.name === itemToIncrease.name ? {...item, quantity: + item.quantity + 1} : item
      )
    )
  }
  

  //_______________________________________________
  const decreaseQuantity = (itemToDecrease) => {
    setCart((currentCart) => 
      currentCart.map((item) => 
        item.name === itemToDecrease.name ? {...item, quantity: item.quantity - 1} : item
      ).filter(item => item.quantity !== 0)
    )
  }


  //_______________________________________________
  const updateQuantity = (itemToUpdate, newQuantity) => {
    setCart((currentCart) => 
      currentCart.map((item) => 
        item.name === itemToUpdate.name ? {...item, quantity: newQuantity} : item
      ).filter(item => item.quantity !== 0)
    )
  }


  //_______________________________________________
  const totalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }


  //_______________________________________________
  const contextValue = {
    cart, 
    addToCart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    updateQuantity,
    totalPrice
  }

  
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}