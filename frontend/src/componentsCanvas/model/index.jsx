import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Room(props) {

  const { nodes, materials } = useGLTF('/Room.gltf')
  
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Floor.geometry} material={nodes.Floor.material}>
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh receiveShadow geometry={nodes.WallLeft.geometry} material={nodes.WallLeft.material} position={[-5, 2.962, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.592, 1, 1]}>
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh receiveShadow geometry={nodes.WallRight.geometry} material={nodes.WallRight.material} position={[5, 2.962, -10]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.592, 1, 1]}>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Room.gltf')

export default Room