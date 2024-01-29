import React, { useState } from 'react'
import './style.css'
import { useSnapshot } from 'valtio'
import { state } from '../floorMaterial'
import { Lightbulb } from "@phosphor-icons/react"
import { Tooltip } from '@mui/material'
import ShoppingEllipse from '../../components/shoppingEllipse'


export default function Dashboard({setLight, setEnv, light, env}) {

  const [ activeFloorBtn, setActiveFloorBtn ] = useState(0)
  const snap = useSnapshot(state)

  const [ show, setShow ] = useState(true)

  return (
  <>
      <div className={show ? "dashboard" : "dashboard hide"}>
      
      <div className='dashboard-container floor-material-buttons'>
        <p>Floor materials</p>
        <div className="floor-material-buttons-container">
          {snap.textures.map((textureObj, index) => (
            <Tooltip placement="top-start" title={`${textureObj.name} - $${textureObj.price} per m²`} key={index}>
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
        <ShoppingEllipse floor={snap.textures[activeFloorBtn]} />
      </div>

      <div className='dashboard-container color-input'>
        <p>Wall color</p>
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

      <div className="dashboard-container lightswitch">
        <p>Lightswitch</p>
        <button className='icon-button' onClick={() => { setLight(!light); setEnv(!env); }}>
          <Lightbulb />
        </button>
      </div>

    </div>

    <Tooltip placement="top-start" title="hide/show Dashboard">
      <div onClick={() => setShow(!show)} className={show ? "toggle-button" : "toggle-button hide"}></div>
    </Tooltip>
  </>
  )
}