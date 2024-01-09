import React, { useState } from 'react'
import './style.css'
import { useSnapshot } from 'valtio'
import { state } from '../floorMaterial'
import { Lightbulb } from "@phosphor-icons/react"
import { Tooltip } from '@mui/material'


export default function Dashboard({setLight, setEnv, light, env}) {

  const [ activeFloorBtn, setActiveFloorBtn ] = useState(0)
  const snap = useSnapshot(state)

  return (
    <div className="dashboard">
      <button className='icon-button' onClick={() => { setLight(!light); setEnv(!env); }}><Lightbulb /></button>
      <div className='floor-material-buttons'>
        <p>Choose floor material:</p>
        {snap.textures.map((textureObj, index) => (
          <Tooltip placement="top-start" title={textureObj.name} key={index}>
            <div
              className={`floor-material-button ${activeFloorBtn === index ? 'active' : ''}`} 
              style={{ backgroundImage: `url(${textureObj.url})` }}  
              onClick={() => {
                state.texture = textureObj.url
                setActiveFloorBtn(index)
              }}
            >
            </div>
            </Tooltip>
        ))}
      </div>
      <div className='color-input'>
        <p>Choose wall color:</p>
        <div className="color-picker-container">
          <div 
            className="color-switch" 
            style={{backgroundColor: snap.wallColor}} 
          />
          <input 
            className="color-picker" 
            type="color" 
            onChange={(e) => (state.wallColor = e.target.value)} 
          />
        </div>
      </div>
    </div>
  )
}