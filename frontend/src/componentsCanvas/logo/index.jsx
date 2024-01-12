import React from 'react'
import './style.css'
import H3 from '../../components/subHeaderH3'
import H4 from '../../components/subHeaderH4'

export default function Logo() {
  return (
    <div className="name">
      <H3 text="Floor Planer" />
      <H4 text="Build your floor" />
    </div>
  )
}
