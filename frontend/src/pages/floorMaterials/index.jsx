import React from 'react'
import './style.css'
import { useSnapshot } from 'valtio'
import { state } from '../../componentsCanvas/floorMaterial'
import H2 from '../../components/subHeaderH2'
import H3 from '../../components/subHeaderH3'


export default function FloorMaterials() {

  const snap = useSnapshot(state)

  return (
    <section className='floor-materials'>
      <H2 color="--darkColor" text="Select the finest floor materials" />
      {snap.textures.map((floor, index) => (
        <div className='floor-material-container' key={index}>
          <div>
            <H3 text={floor.name} />
            <p>{floor.description}</p>
          </div>
          <img src={floor.url} alt="" />
        </div>
      ))}
    </section>
  )
}

