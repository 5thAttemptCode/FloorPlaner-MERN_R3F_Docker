import React from 'react'
import './style.css'
import { ShoppingCart } from '@phosphor-icons/react'
import { state } from '../floorInfo'
import { useSnapshot } from 'valtio'


export default function AddToCartButton({ id }) {

  const snap = useSnapshot(state)

  const addToCart = () => {
    const textureToAdd = snap.textures.find(texture => texture.id === id)
    state.cart.addToCart(textureToAdd)
  }

  return (
    <button onClick={addToCart}>ADD TO &nbsp;<ShoppingCart /></button>
  )
}
