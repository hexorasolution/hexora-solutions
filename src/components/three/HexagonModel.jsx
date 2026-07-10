import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const HexagonModel = () => {
  const meshRef      = useRef()
  const wireRef      = useRef()
  const innerRef     = useRef()
  const groupRef     = useRef()

  // Hexagon shape
  const hexShape = useMemo(() => {
    const shape = new THREE.Shape()
    const sides = 6
    const radius = 1.4

    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 6
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      if (i === 0) shape.moveTo(x, y)
      else shape.lineTo(x, y)
    }
    shape.closePath()
    return shape
  }, [])

  const extrudeSettings = useMemo(() => ({
    depth:         0.3,
    bevelEnabled:  true,
    bevelSegments: 3,
    bevelSize:     0.05,
    bevelThickness:0.05,
  }), [])

  const hexGeometry = useMemo(
    () => new THREE.ExtrudeGeometry(hexShape, extrudeSettings),
    [hexShape, extrudeSettings]
  )

  // Particle positions
  const particles = useMemo(() => {
    const positions = []
    for (let i = 0; i < 80; i++) {
      positions.push(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      )
    }
    return new Float32Array(positions)
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.15
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15
    }

    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.1
    }

    if (wireRef.current) {
      wireRef.current.rotation.z = -t * 0.15
      wireRef.current.rotation.x = t * 0.1
    }

    if (innerRef.current) {
      innerRef.current.rotation.z = t * 0.2
      innerRef.current.scale.setScalar(
        1 + Math.sin(t * 1.5) * 0.05
      )
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Hexagon */}
      <mesh ref={meshRef} geometry={hexGeometry} position={[0, 0, -0.15]}>
        <meshPhysicalMaterial
          color="#1a3cff"
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.85}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>

      {/* Wireframe Hexagon */}
      <mesh ref={wireRef} geometry={hexGeometry} position={[0, 0, -0.15]} scale={1.08}>
        <meshBasicMaterial
          color="#4d79ff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Inner glowing hex */}
      <mesh ref={innerRef} geometry={hexGeometry} position={[0, 0, 0.05]} scale={0.7}>
        <meshPhysicalMaterial
          color="#60a5fa"
          metalness={0.9}
          roughness={0.0}
          transparent
          opacity={0.6}
          emissive="#1a3cff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Center Sphere */}
      <Sphere args={[0.35, 32, 32]} position={[0, 0, 0.3]}>
        <MeshDistortMaterial
          color="#4169E1"
          distort={0.4}
          speed={3}
          metalness={1}
          roughness={0}
          emissive="#1a3cff"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Orbiting rings */}
      {[1.8, 2.2, 2.6].map((r, i) => (
        <mesh
          key={i}
          rotation={[
            Math.PI / 2 + i * 0.3,
            i * 0.5,
            i * 0.2
          ]}
        >
          <torusGeometry args={[r, 0.015, 8, 80]} />
          <meshBasicMaterial
            color={i === 0 ? '#1a3cff' : i === 1 ? '#4169E1' : '#60a5fa'}
            transparent
            opacity={0.4 - i * 0.08}
          />
        </mesh>
      ))}

      {/* Floating particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particles}
            count={particles.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#4d79ff"
          size={0.04}
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      {/* Lights */}
      <pointLight color="#1a3cff" intensity={3} distance={6} position={[0, 0, 2]} />
      <pointLight color="#4169E1" intensity={1.5} distance={4} position={[2, 2, 0]} />
      <pointLight color="#60a5fa" intensity={1} distance={4} position={[-2, -2, 1]} />
      <ambientLight intensity={0.3} />
    </group>
  )
}

export default HexagonModel