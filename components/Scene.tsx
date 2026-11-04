'use client';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';

function Orb({ position, scale, color, speed = 2 }: { position: [number, number, number]; scale: number; color: string; speed?: number }) {
  return <Float speed={speed} rotationIntensity={0.55} floatIntensity={1.2}>
    <Sphere args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial color={color} roughness={0.16} metalness={0.65} distort={0.35} speed={2.2} transparent opacity={0.78} />
    </Sphere>
  </Float>;
}

export default function Scene() {
  return <div className="scene" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 8], fov: 48 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 3, 5]} intensity={35} color="#8b5cf6" />
      <pointLight position={[-4, -2, 3]} intensity={24} color="#22d3ee" />
      <Stars radius={90} depth={55} count={1800} factor={3} saturation={0.25} fade speed={0.5} />
      <Orb position={[3.7, 1.3, -3]} scale={1.1} color="#6d42b8" speed={1.5} />
      <Orb position={[-4, -1.5, -5]} scale={0.75} color="#164e75" speed={1.2} />
      <Orb position={[0.5, -3.6, -6]} scale={0.5} color="#5b3a86" speed={2.4} />
    </Canvas>
  </div>;
}
