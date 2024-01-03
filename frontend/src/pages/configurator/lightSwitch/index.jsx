import React from 'react'


export default function LightSwitch({ brightness, color }) {
  return (
    <mesh>
      <rectAreaLight
        width={3}
        height={3}
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
