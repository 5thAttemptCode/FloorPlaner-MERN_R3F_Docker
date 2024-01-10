import React, { useState } from 'react'
import './style.css'
import { Canvas } from '@react-three/fiber'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import Room from '../../componentsCanvas/model'
import LightSwitch from '../../componentsCanvas/lightSwitch'
import Dashboard from '../../componentsCanvas/dashboard'
import Logo from '../../componentsCanvas/logo'


export default function Configurator() {

  const [ light, setLight ] = useState(false)
  const [ env, setEnv ] = useState(true)
  
  return (
    <div className="canvas">
      <Canvas>
        <OrbitControls enableZoom={false} />
        {/* <directionalLight position={[0.5, 2, 1.5]} color="white" castShadow /> */}
        <Center>
          <Room rotation-y={-Math.PI / 4} />
        </Center>
        {light && <LightSwitch brightness={7} color={"white"} />}
        {env && <Environment preset='city' />}
      </Canvas>
      
      <Logo />
      <Dashboard setLight={setLight} setEnv={setEnv} light={light} env={env} />
    </div>
  )
}
