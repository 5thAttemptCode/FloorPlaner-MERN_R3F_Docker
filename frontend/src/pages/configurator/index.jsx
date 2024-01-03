import React, { useState } from 'react'
import './style.css'
import { Canvas } from '@react-three/fiber'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Room } from './model'
import LightSwitch from './lightSwitch'


export default function Configurator() {

  const [ light, setLight ] = useState(false)
  const [ env, setEnv ] = useState(true)
  
  return (
    <div className="canvas">
      <Canvas>
        <OrbitControls />
        <Center>
          <Room rotation-y={-Math.PI / 4} />
        </Center>
        {light && <LightSwitch brightness={2} color={"blue"} />}
        {env && <Environment preset='city' />}
      </Canvas>

      <div className="dashboard">
        <button onClick={() => { setLight(!light), setEnv(!env)} }>LIGHTSWITCH</button>
      </div>
    </div>
  )
}
