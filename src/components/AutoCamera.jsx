import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function AutoCamera() {
  const { camera } = useThree()
  const angle = useRef(0)

  useFrame(() => {
    angle.current += 0.003

    const radius = 100
    const x = Math.sin(angle.current) * radius
    const z = Math.cos(angle.current) * radius

    camera.position.set(x, 10, z)
    camera.lookAt(new THREE.Vector3(0, 0, -10)) // 👈 vise ta scène
  })

  return null
}
