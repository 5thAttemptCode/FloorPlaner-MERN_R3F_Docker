import React, { useContext } from 'react'
import './style.css'
import { ShoppingCart } from '@phosphor-icons/react'
import { CartContext } from '../../context/cartContext'


export default function AddToCart({ floor, quantity }) {

  const { addToCart } = useContext(CartContext)
  const item = { name: floor.name, price: floor.price, quantity }
  
  return <button onClick={() => addToCart(item)}>Add to <ShoppingCart /></button>
}
