import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ShoppingCart, UserCircle } from '@phosphor-icons/react'
import LinkButton from '../linkButton'


export default function Nav() {
  return (
    <nav>
      <div>
        <LinkButton to="/">FLOOR PLANER</LinkButton>
        <LinkButton to="/floor-materials">FLOOR MATERIALS</LinkButton>
        <LinkButton to="/configurator" background="--accentColor" color="--lightColor">3D CONFIGURATOR</LinkButton>
      </div>
      <div>
        <Link to="/login" className='icon-button' ><UserCircle /></Link>
        <Link to="/checkout" className='icon-button'><ShoppingCart /></Link>
      </div>
    </nav>
  )
}
