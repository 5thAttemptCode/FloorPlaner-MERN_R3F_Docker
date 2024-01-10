import React from 'react'
import './style.css'
import { ShoppingCart } from '@phosphor-icons/react'


export default function ShoppingButton() {
  return (
    <div className='shopping-ellipse'>
      <input type="number" min={1} defaultValue={1} />
      <button>ADD TO &nbsp;<ShoppingCart /></button>
    </div>
  )
}
