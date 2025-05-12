import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Hiphop({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/hiphop.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions[Object.keys(actions)[0]]
    action?.reset().play()
  }, [actions])

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    const box = new THREE.Box3().setFromObject(scene)
    const center = new THREE.Vector3()
    const size = new THREE.Vector3()
    box.getCenter(center)
    box.getSize(size)

    scene.position.sub(center)
    scene.position.y += size.y / 2
  }, [scene])

  return (
    <group ref={group} position={position} rotation={rotation}>
      <primitive object={scene} scale={[5, 5, 5]} />
    </group>
  )
}
