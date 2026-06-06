"use client"

import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, ContactShadows } from "@react-three/drei"
import type { Group } from "three"
import { DSLRCamera } from "./dslr-camera"
import { Particles } from "./particles"

function Rig({ pointer }: { pointer: { x: number; y: number } }) {
  const group = useRef<Group>(null)
  useFrame((state, delta) => {
    if (!group.current) return
    // Subtle camera-group parallax for depth
    const targetX = pointer.x * 0.4
    const targetY = -pointer.y * 0.25
    group.current.position.x += (targetX - group.current.position.x) * Math.min(1, delta * 2.5)
    group.current.position.y += (targetY - group.current.position.y) * Math.min(1, delta * 2.5)
  })

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <DSLRCamera pointer={pointer} />
      </Float>
    </group>
  )
}

export function HeroScene() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  return (
    <div
      className="absolute inset-0 h-full w-full"
      onPointerMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = (e.clientY / window.innerHeight) * 2 - 1
        setPointer({ x, y })
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.4, 6], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <spotLight
            position={[5, 6, 5]}
            angle={0.4}
            penumbra={1}
            intensity={120}
            color="#fff1d6"
            castShadow
          />
          <pointLight position={[-5, -2, -4]} intensity={40} color="#3a6aa0" />
          <pointLight position={[4, -3, 4]} intensity={25} color="#e8c074" />

          <Rig pointer={pointer} />
          <Particles />

          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.45}
            scale={12}
            blur={2.6}
            far={4}
            color="#000000"
          />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}
