import { useTexture } from '@react-three/drei'

export default function Ground() {
  const texture = useTexture('/models/sol.jpg')

  return (
    <mesh position={[0, -0.3, 0]} receiveShadow>
      <boxGeometry args={[400, 1, 400]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
