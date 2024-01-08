import React from 'react'
import './style.css'
import { useSnapshot } from 'valtio'
import { state } from '../../componentsCanvas/floorMaterial'


export default function FloorMaterials() {

  const snap = useSnapshot(state)

  return (
    <section>
      <h1>Select the finest wood</h1>
      {snap.textures.map((floor, index) => (
        <div className='floor-material-container' key={index}>
          <div>
            <h3>{floor.name}</h3>
            <p>{floor.description}</p>
          </div>
          <img src={floor.url} alt="" />
        </div>
      ))}
    </section>
  )
}

