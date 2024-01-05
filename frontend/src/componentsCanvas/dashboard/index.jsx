import React from 'react'
import './style.css'
import { useSnapshot } from 'valtio';
import { state } from '../floorMaterial';


export default function Dashboard({setLight, setEnv, light, env}) {

  const snap = useSnapshot(state)

  return (
    <div className="dashboard">
      <button onClick={() => { setLight(!light); setEnv(!env); }}>LIGHTSWITCH</button>
      <div className='floor-material-buttons'>
      {snap.textures.map((textureObj, index) => (
        <div 
          key={index} 
          className={`floor-material-button`} 
          style={{ backgroundImage: `url(${textureObj.url})` }}  
          onClick={() => (state.texture = textureObj.url)}
        ></div>
      ))}
      </div>
    </div>
  )
}