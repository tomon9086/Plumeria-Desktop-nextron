import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Box = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
    mesh.current.rotation.z += 0.01
  })

  return (
    <mesh
      {...props}
      onClick={(event) => setActive(!active)}
      onPointerOut={(event) => setHover(false)}
      onPointerOver={(event) => setHover(true)}
      ref={mesh}
      scale={active ? 1.5 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Three = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh'
    }}
    >
      <h1 style={{
        position: 'absolute'
      }}
      >
        Three!
      </h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Three
