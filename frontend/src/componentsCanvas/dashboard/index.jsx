import React from 'react'
import './style.css'


export default function Dashboard({setLight, setEnv, light, env}) {
  return (
    <div className="dashboard">
      <button onClick={() => { setLight(!light); setEnv(!env); }}>LIGHTSWITCH</button>
    </div>
  )
}