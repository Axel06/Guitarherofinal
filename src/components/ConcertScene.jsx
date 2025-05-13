import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
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
import Chanteur from './Chanteur'
import AutoCamera from './AutoCamera'
import Ground from './Ground'

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
        background: '#444', // <- léger fond gris
      }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
    >
      {/* 🎥 Fond + brouillard */}
      <color attach="background" args={['#444']} />
      <fog attach="fog" args={['#444', 60, 200]} />

      {/* 🎥 Caméra auto */}
      <AutoCamera />

      {/* 💡 Lumière */}
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[10, 15, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={100}
      />

      {/* 🌍 Sol texturé */}
      <Ground />

      <OrbitControls />

      {/* 🎶 Scène + personnages */}
      <Stage position={[-30, 0, -10]} scale={[5, 5, 5]} />
      <Chanteur position={[-22, 5, -8]} rotation={[0, 2, 0]} />
      <Hiphop position={[5, 0, 5]} rotation={[0, 5, 0]} />
      <Rumba position={[26, 0, 2]} rotation={[0, 5, 0]} />
      <Dcone position={[12, 0, 8]} rotation={[0, 5, 0]} />
      <Dctwo position={[1, 0, -16]} rotation={[0, 5, 0]} />
      <Dcthree position={[25, 0, -24]} rotation={[0, 5, 0]} />
      <Dcfour position={[11, 0, -16]} rotation={[0, 5, 0]} />
      <Dcfive position={[18, 0, -8]} rotation={[0, 5, 0]} />
    </Canvas>
  )
}

export default App
