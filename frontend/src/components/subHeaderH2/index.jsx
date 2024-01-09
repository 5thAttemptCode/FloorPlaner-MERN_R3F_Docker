import React from 'react'
import './style.css'


export default function H2({ text, color }) {
  return (
    <h2 style={{ color: `var(${color})` }}>{text}</h2>
  )
}
