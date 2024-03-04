import React from 'react'
import './style.css'


export default function HeaderContainer({ children }) {

  return (
    <div className='header-container'>
      {children}
    </div>
  )
}
