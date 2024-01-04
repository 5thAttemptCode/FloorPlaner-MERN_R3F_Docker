import React from 'react'


export default function LightSwitch({ brightness, color }) {
  return (
    <mesh>
      <rectAreaLight
        width={4}
        height={4}
        color={color}
        intensity={brightness}
        position={[0, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    </mesh>
  )
}
