import React, { useState } from 'react'
import './style.css'
import AddToCartButton from '../addToCartbutton'


export default function ShoppingEllipse({ floor }) {

  const [ quantity, setQuantity ] = useState(1)
  return (
    <div className='shopping-ellipse'>
      <input 
        type="number" 
        min={1} 
        value={quantity} 
        onChange={e => setQuantity(e.target.value)} 
      />
      <AddToCartButton floor={floor} quantity={quantity} />
    </div>
  )
}
