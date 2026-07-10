import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleField = ({ count = 150 }) => {
  const meshRef  = useRef()
  const { mouse } = useThree()

  const [positions, colors, sizes] = useMemo(() => {
    const pos   = new Float32Array(count * 3)
    const col   = new Float32Array(count * 3)
    const siz   = new Float32Array(count)

    const blueShades = [
      new THREE.Color('#1a3cff'),
      new THREE.Color('#4169E1'),
      new THREE.Color('#60a5fa'),
      new THREE.Color('#93c5fd'),
      new THREE.Color('#4d79ff'),
    ]

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10

      const color = blueShades[Math.floor(Math.random() * blueShades.length)]
      col[i * 3]     = color.r
      col[i * 3 + 1] = color.g
      col[i * 3 + 2] = color.b

      siz[i] = Math.random() * 0.06 + 0.02
    }

    return [pos, col, siz]
  }, [count])

  const velocities = useMemo(() => {
    const vel = []
    for (let i = 0; i < count; i++) {
      vel.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.002,
      })
    }
    return vel
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return

    const pos  = meshRef.current.geometry.attributes.position
    const time = state.clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      pos.array[i * 3]     += velocities[i].x + Math.sin(time * 0.3 + i) * 0.001
      pos.array[i * 3 + 1] += velocities[i].y + Math.cos(time * 0.2 + i) * 0.001
      pos.array[i * 3 + 2] += velocities[i].z

      // Boundary wrap
      if (pos.array[i * 3]     >  10) pos.array[i * 3]     = -10
      if (pos.array[i * 3]     < -10) pos.array[i * 3]     =  10
      if (pos.array[i * 3 + 1] >  10) pos.array[i * 3 + 1] = -10
      if (pos.array[i * 3 + 1] < -10) pos.array[i * 3 + 1] =  10
      if (pos.array[i * 3 + 2] >   5) pos.array[i * 3 + 2] = -5
      if (pos.array[i * 3 + 2] <  -5) pos.array[i * 3 + 2] =  5
    }

    // Mouse interaction
    meshRef.current.rotation.x = mouse.y * 0.05
    meshRef.current.rotation.y = mouse.x * 0.05

    pos.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizes}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        size={0.05}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default ParticleField