import React from 'react'
import './style.css'


export default function Container({ children }) {
  return (
    <div className='container-flex'>
      {children}
    </div>
  )
}
