import React from 'react'
import Controller from './Controller.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
const WebDesign = () => {
  return (
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Controller />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
  )
}

export default WebDesign
