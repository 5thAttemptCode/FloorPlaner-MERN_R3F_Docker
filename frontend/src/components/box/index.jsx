import React from 'react'
import './style.css'


export default function Box({ children }) {
  return (
    <div className='box'>
      {children}
    </div>
  )
}
