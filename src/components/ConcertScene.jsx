import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Dancer from './Dancer'
import Zombie from './Zombie'
import Stage from './Stage'
import Hiphop from './Hiphop'
import Rumba from './Rumba'
import Dcone from './Dcone'
import Dctwo from './Dctwo'
import Dcthree from './Dcthree'
import Dcfour from './Dcfour'
import Dcfive from './Dcfive'


function App() {
  const positions = [
    [-3, 0, -10],
    [3, 0, -10],
    [-6, 0, -8],
    [6, 0, -8],
    [0, 0, -6],
  ]

  return (
    <Canvas
      shadows
      camera={{ position: [0, 7, 25], fov: 40 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        background: '#0a0a0a'
      }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <fog attach="fog" args={['#000', 20, 700]} />

      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={100}
      />

      

      <mesh position={[0, -0.3, 0]} receiveShadow>
        <boxGeometry args={[400, 1, 400]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      <OrbitControls />

      <Stage position={[-30, 0, -10]} scale={[5, 5, 5]} />

      <Hiphop position={[5, 0, 5]} rotation={[0, 5, 0]} />

      <Rumba position={[16, 0, 5]} rotation={[0, 5, 0]} />

      <Dcone position={[12, 0, 8]} rotation={[0, 5, 0]} />

      <Dctwo position={[1, 0, -16]} rotation={[0, 5, 0]} />

      <Dcthree position={[25, 0, 17]} rotation={[0, 5, 0]} />

      <Dcfour position={[11, 0, -16]} rotation={[0, 5, 0]} />

      <Dcfive position={[18, 0, -8]} rotation={[0, 5, 0]} />

    </Canvas>
  )
}

export default App
