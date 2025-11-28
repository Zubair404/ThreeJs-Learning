import { Stage, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Controller from './Controller.jsx'

const ProductDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Controller />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
  )
}

export default ProductDesign
