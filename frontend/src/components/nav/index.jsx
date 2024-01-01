import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/login" >LOGIN</Link>
      <Link to="/register">REGISTER</Link>
      <Link className='floor-config' to="/configurator">FLOOR CONFIGURATOR</Link>
    </nav>
  )
}
