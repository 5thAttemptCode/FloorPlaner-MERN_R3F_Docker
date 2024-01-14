import React from 'react'
import './style.css'
import { ShoppingCart } from '@phosphor-icons/react'
import { state } from '../../componentsCanvas/floorMaterial'
import { useSnapshot } from 'valtio'


export default function AddToCartButton({ id }) {

  const snap = useSnapshot(state)

  const addToCart = () => {
    if(snap.textures){
      const textureToAdd = snap.textures.find(texture => texture.id === id)
      if(textureToAdd){
        state.cart.addToCart(textureToAdd)
      }
    } else{
      console.log("Error, texture not found")
    }
  }

  return (
    <button onClick={addToCart}>ADD TO &nbsp;<ShoppingCart /></button>
  )
}
