import React, { useContext, useState } from 'react'
import './style.css'
import { ShoppingCart } from '@phosphor-icons/react'
import { CartContext } from '../../context/cartContext'


export default function AddToCart({ floor, quantity }) {

  const { addToCart } = useContext(CartContext)
  const item = { image: floor.url, name: floor.name, price: floor.price, quantity }
  const [ clicked, setClicked ] = useState(false)

  const handleClick = () => {
    setClicked(true)
    addToCart(item)

    setTimeout(() => {
      setClicked(false)
    }, 500)
  }
  return <button className={clicked ? "button clicked" : "button"} onClick={handleClick}>Add to <ShoppingCart className='icon' /></button>
}
