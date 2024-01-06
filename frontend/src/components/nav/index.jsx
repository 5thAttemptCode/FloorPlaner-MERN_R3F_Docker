import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ShoppingCart, UserCircle } from '@phosphor-icons/react'

export default function Nav() {
  return (
    <nav>
      <div>
        <Link to="/">FLOOR PLANER</Link>
        <Link className='floor-config' to="/configurator">3D CONFIGURATOR</Link>
      </div>
      <div>
        <Link to="/login" className='icon-button' ><UserCircle /></Link>
        <Link to="/checkout" className='icon-button'><ShoppingCart /></Link>
      </div>
    </nav>
  )
}
