import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from '../floorMaterial'


export function Room(props) {
  const { nodes, materials } = useGLTF('/Room.gltf')
  const snap = useSnapshot(state)

  const texture = useTexture(snap.texture)
  
  return (
    <group {...props} dispose={null}>
      <mesh 
        receiveShadow 
        geometry={nodes.Floor.geometry} 
        material={nodes.Floor.material}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh 
        receiveShadow 
        geometry={nodes.WallLeft.geometry} 
        material={nodes.WallLeft.material} 
        position={[-5, 2.962, 0]} 
        rotation={[0, 0, -Math.PI / 2]} 
        scale={[0.592, 1, 1]}
      >
         <meshStandardMaterial color={snap.wallColor} />
      </mesh>
      <mesh 
        receiveShadow 
        geometry={nodes.WallRight.geometry} 
        material={nodes.WallRight.material} 
        position={[5, 2.962, -10]} 
        rotation={[Math.PI / 2, -Math.PI / 2, 0]} 
        scale={[0.592, 1, 1]}
      >
         <meshStandardMaterial color={snap.wallColor} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Room.gltf')

export default Room