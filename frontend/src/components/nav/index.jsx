import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ShoppingCart, UserCircle } from '@phosphor-icons/react'
import LinkButton from '../linkButton'
import { CartContext } from '../../context/cartContext'


export default function Nav() {

  const { cart } = useContext(CartContext)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav>
      <div>
        <LinkButton to="/">FLOOR PLANER</LinkButton>
        <LinkButton to="/floor-materials">MATERIALS</LinkButton>
        <LinkButton to="/configurator" background="--accentColor" color="--lightColor">3D CONFIGURATOR</LinkButton>
      </div>
      <div>
        <Link to="/login" className='icon-button'>
          <UserCircle size={35} />
        </Link>
        <Link to="/checkout" className='icon-button shopping-cart'>
          <ShoppingCart />
          {itemCount > 0 && <span className='cart-counter'>{itemCount}</span>}
        </Link>
      </div>
    </nav>
  )
}

