"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function EarthMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Outer glow */}
      <Sphere ref={glowRef} args={[1.15, 32, 32]}>
        <meshBasicMaterial
          color="#ff5e00"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Main Earth sphere with wireframe */}
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshStandardMaterial
          color="#1a0505"
          wireframe
          wireframeLinewidth={1}
          emissive="#ff5e00"
          emissiveIntensity={0.15}
        />
      </Sphere>

      {/* Inner core glow */}
      <Sphere args={[0.95, 32, 32]}>
        <meshBasicMaterial
          color="#0a0505"
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Latitude lines */}
      {[-60, -30, 0, 30, 60].map((lat) => (
        <mesh key={lat} rotation={[Math.PI / 2, 0, 0]} position={[0, Math.sin((lat * Math.PI) / 180), 0]}>
          <ringGeometry args={[Math.cos((lat * Math.PI) / 180) * 0.99, Math.cos((lat * Math.PI) / 180) * 1.01, 64]} />
          <meshBasicMaterial color="#ff0844" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* Meridian lines */}
      {[0, 30, 60, 90, 120, 150].map((lng) => (
        <mesh key={lng} rotation={[0, (lng * Math.PI) / 180, 0]}>
          <torusGeometry args={[1, 0.005, 8, 64]} />
          <meshBasicMaterial color="#ff5e00" transparent opacity={0.25} />
        </mesh>
      ))}

      {/* Glowing points for major regions */}
      {[
        { lat: 40.7, lng: -74 }, // New York
        { lat: 51.5, lng: -0.12 }, // London
        { lat: 12.97, lng: 77.59 }, // Bengaluru
        { lat: 25.2, lng: 55.27 }, // Dubai
        { lat: -33.87, lng: 151.2 }, // Sydney
        { lat: 1.35, lng: 103.82 }, // Singapore
      ].map((point, i) => {
        const phi = (90 - point.lat) * (Math.PI / 180);
        const theta = (point.lng + 180) * (Math.PI / 180);
        const x = -Math.sin(phi) * Math.cos(theta);
        const y = Math.cos(phi);
        const z = Math.sin(phi) * Math.sin(theta);
        return (
          <mesh key={i} position={[x * 1.02, y * 1.02, z * 1.02]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#ff0844" />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Earth3D() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff5e00" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff0844" />
        <Suspense fallback={null}>
          <EarthMesh />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
