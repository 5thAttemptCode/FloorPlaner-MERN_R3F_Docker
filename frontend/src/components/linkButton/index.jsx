import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function LinkButton({ background, color, to, children, onClick }) {
  return (
    <Link onClick={onClick} className='link-button' style={{ background: `var(${background})`, color: `var(${color})` }} to={to}>
      {children}
    </Link>
  )
}
