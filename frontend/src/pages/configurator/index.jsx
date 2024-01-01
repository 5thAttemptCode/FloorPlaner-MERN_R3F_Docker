import React from 'react'
import './style.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


export default function Configurator() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <mesh rotation={[1, 0, 3]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}
