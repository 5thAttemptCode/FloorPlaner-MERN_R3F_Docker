import React, { useState } from 'react'
import './style.css'
import { Canvas } from '@react-three/fiber'
import { Center, Environment, OrbitControls, PresentationControls } from '@react-three/drei'
import Room from '../../componentsCanvas/model'
import LightSwitch from '../../componentsCanvas/lightSwitch'
import Dashboard from '../../componentsCanvas/dashboard'
import Logo from '../../componentsCanvas/logo'


export default function Configurator() {

  const [ light, setLight ] = useState(false)
  const [ env, setEnv ] = useState(true)
  
  return (
    <div className="canvas">
      <div className="sub-canvas">
        <Canvas>
          <Center>
            <PresentationControls polar={[0, 0.3]} azimuth={[-Math.PI / 5, Math.PI / 5]}>
              <Room rotation-y={-Math.PI / 4} />
            </PresentationControls>
          </Center>
          {light && <LightSwitch brightness={7} color={"white"} />}
          {env && <Environment preset='city' />}
        </Canvas>
        
        <Logo />
        <Dashboard setLight={setLight} setEnv={setEnv} light={light} env={env} />
      </div>
    </div>
  )
}
