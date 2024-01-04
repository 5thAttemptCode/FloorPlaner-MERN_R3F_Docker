import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div>
        <Link to="/">FLOOR PLANER</Link>
        <Link className='floor-config' to="/configurator">CONFIGURATOR</Link>
      </div>
      <div>
        <Link to="/login" >LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </div>
    </nav>
  )
}
