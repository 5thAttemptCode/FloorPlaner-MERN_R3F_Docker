import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function LinkButton({ background, color, to, children }) {
  return (
    <Link className='link-button' style={{ background: `var(${background})`, color: `var(${color})` }} to={to}>
      {children}
    </Link>
  )
}
