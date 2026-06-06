"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Group, Mesh } from "three"

/**
 * A detailed, realistic-ish DSLR camera built from primitives.
 * - Body, grip, pentaprism hump, hot shoe
 * - Mode dial, shutter button, control dial
 * - Multi-element lens with a reflective glass front element that rotates
 */
export function DSLRCamera({ pointer }: { pointer: { x: number; y: number } }) {
  const root = useRef<Group>(null)
  const lensRing = useRef<Group>(null)
  const targetRot = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!root.current) return
    const t = state.clock.getElapsedTime()

    // Smooth floating bob + gentle idle rotation
    const floatY = Math.sin(t * 0.8) * 0.12
    root.current.position.y = floatY

    // Mouse parallax — ease toward target for smoothness
    targetRot.current.y = pointer.x * 0.5 + t * 0.12
    targetRot.current.x = pointer.y * 0.3 + Math.sin(t * 0.5) * 0.04

    root.current.rotation.y += (targetRot.current.y - root.current.rotation.y) * Math.min(1, delta * 3)
    root.current.rotation.x += (targetRot.current.x - root.current.rotation.x) * Math.min(1, delta * 3)

    // Continuous smooth lens-ring rotation
    if (lensRing.current) {
      lensRing.current.rotation.z += delta * 0.6
    }
  })

  return (
    <group ref={root} dispose={null} scale={1.15}>
      {/* ---------- Camera body ---------- */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.1, 1.35, 0.9]} />
        <meshStandardMaterial color="#1c1c20" roughness={0.55} metalness={0.4} />
      </mesh>

      {/* Textured grip panel (left front) */}
      <mesh position={[-0.78, 0, 0.47]}>
        <boxGeometry args={[0.5, 1.2, 0.06]} />
        <meshStandardMaterial color="#0e0e10" roughness={0.95} metalness={0.1} />
      </mesh>

      {/* Hand grip bulge */}
      <mesh castShadow position={[-1.0, -0.05, 0.18]}>
        <boxGeometry args={[0.35, 1.25, 0.7]} />
        <meshStandardMaterial color="#161618" roughness={0.85} metalness={0.15} />
      </mesh>

      {/* Right-side textured panel */}
      <mesh position={[1.02, 0, 0.2]}>
        <boxGeometry args={[0.12, 1.2, 0.7]} />
        <meshStandardMaterial color="#0e0e10" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* ---------- Pentaprism hump ---------- */}
      <mesh castShadow position={[0.1, 0.85, 0]}>
        <boxGeometry args={[0.7, 0.45, 0.7]} />
        <meshStandardMaterial color="#1c1c20" roughness={0.5} metalness={0.45} />
      </mesh>
      {/* Slanted top of pentaprism */}
      <mesh castShadow position={[0.1, 1.02, 0.05]} rotation={[0.35, 0, 0]}>
        <boxGeometry args={[0.66, 0.18, 0.5]} />
        <meshStandardMaterial color="#202024" roughness={0.5} metalness={0.45} />
      </mesh>

      {/* Hot shoe */}
      <mesh position={[0.1, 1.16, 0]}>
        <boxGeometry args={[0.34, 0.08, 0.34]} />
        <meshStandardMaterial color="#36363c" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Brand light bar (gold accent) */}
      <mesh position={[0.1, 0.86, 0.36]}>
        <boxGeometry args={[0.5, 0.07, 0.02]} />
        <meshStandardMaterial
          color="#e8c074"
          emissive="#d8a94e"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* ---------- Mode dial (left top) ---------- */}
      <mesh castShadow position={[-0.62, 0.78, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.18, 32]} />
        <meshStandardMaterial color="#2a2a30" roughness={0.45} metalness={0.6} />
      </mesh>
      <mesh position={[-0.62, 0.88, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.02, 32]} />
        <meshStandardMaterial color="#0e0e10" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* ---------- Shutter + control dial (right top) ---------- */}
      <mesh castShadow position={[0.7, 0.74, 0.1]}>
        <cylinderGeometry args={[0.22, 0.22, 0.14, 32]} />
        <meshStandardMaterial color="#2a2a30" roughness={0.45} metalness={0.6} />
      </mesh>
      {/* Shutter button */}
      <mesh position={[0.7, 0.84, 0.1]}>
        <cylinderGeometry args={[0.1, 0.12, 0.08, 24]} />
        <meshStandardMaterial color="#3a3a40" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Front control wheel near grip */}
      <mesh position={[-0.55, 0.4, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.06, 24]} />
        <meshStandardMaterial color="#28282d" roughness={0.5} metalness={0.55} />
      </mesh>

      {/* ---------- Lens mount ---------- */}
      <group position={[0.15, -0.05, 0.45]}>
        {/* Mount ring */}
        <mesh castShadow position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.62, 0.62, 0.2, 48]} />
          <meshStandardMaterial color="#202024" roughness={0.45} metalness={0.6} />
        </mesh>

        {/* Lens barrel sections */}
        <group ref={lensRing}>
          <mesh castShadow position={[0, 0, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.58, 0.6, 0.45, 48]} />
            <meshStandardMaterial color="#161618" roughness={0.6} metalness={0.4} />
          </mesh>
          {/* Ribbed focus ring */}
          <mesh position={[0, 0, 0.72]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.6, 0.6, 0.22, 64]} />
            <meshStandardMaterial color="#0d0d0f" roughness={0.95} metalness={0.2} />
          </mesh>
          {/* Gold accent ring (red ring style) */}
          <mesh position={[0, 0, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.585, 0.585, 0.06, 48]} />
            <meshStandardMaterial
              color="#e8c074"
              emissive="#d8a94e"
              emissiveIntensity={0.4}
              roughness={0.3}
              metalness={0.85}
            />
          </mesh>
          {/* Front barrel */}
          <mesh castShadow position={[0, 0, 1.02]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.56, 0.58, 0.2, 48]} />
            <meshStandardMaterial color="#161618" roughness={0.5} metalness={0.45} />
          </mesh>
        </group>

        {/* Front glass element — reflective */}
        <mesh position={[0, 0, 1.13]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.05, 48]} />
          <meshStandardMaterial
            color="#0a1428"
            roughness={0.05}
            metalness={0.95}
            emissive="#1a3a6a"
            emissiveIntensity={0.35}
          />
        </mesh>
        {/* Inner glass reflection ring */}
        <mesh position={[0, 0, 1.16]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.28, 0.46, 48]} />
          <meshStandardMaterial
            color="#6aa3e0"
            emissive="#3a6aa0"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.9}
            side={2}
          />
        </mesh>
      </group>

      {/* ---------- Back screen ---------- */}
      <mesh position={[0.1, -0.05, -0.46]}>
        <boxGeometry args={[1.3, 0.95, 0.04]} />
        <meshStandardMaterial color="#050507" roughness={0.2} metalness={0.3} />
      </mesh>
      <mesh position={[0.1, -0.05, -0.48]}>
        <boxGeometry args={[1.1, 0.78, 0.02]} />
        <meshStandardMaterial
          color="#16314f"
          emissive="#1d4d80"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
    </group>
  )
}
