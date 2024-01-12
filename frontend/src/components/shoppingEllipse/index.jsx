import React from 'react'
import './style.css'
import AddToCartButton from '../addToCartbutton'


export default function ShoppingEllipse() {
  return (
    <div className='shopping-ellipse'>
      <input type="number" min={1} defaultValue={1} />
      <AddToCartButton />
    </div>
  )
}
