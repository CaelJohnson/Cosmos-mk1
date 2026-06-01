"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import { getBody } from "@/lib/solar-system/bodies";
import type { MapObjectConfig } from "@/lib/solar-system/map-layout";

type MapWorldProps = {
  config: MapObjectConfig;
  parentPosition?: [number, number, number];
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export function MapWorld({
  config,
  parentPosition,
  isSelected,
  onSelect,
}: MapWorldProps) {
  const meshRef = useRef<Mesh>(null);
  const body = getBody(config.id);
  const isSun = config.id === "sun";
  const isSaturn = config.id === "saturn";

  useFrame(({ clock }) => {
    if (!config.orbit || !parentPosition || !meshRef.current) return;
    const t =
      clock.elapsedTime * config.orbit.speed + (config.orbit.phase ?? 0);
    meshRef.current.position.set(
      parentPosition[0] + Math.cos(t) * config.orbit.radius,
      parentPosition[1],
      parentPosition[2] + Math.sin(t) * config.orbit.radius
    );
  });

  const position: [number, number, number] = config.orbit
    ? parentPosition ?? config.position
    : config.position;

  return (
    <group position={config.orbit ? undefined : position}>
      <mesh
        ref={meshRef}
        position={config.orbit ? position : [0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(config.id);
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[config.radius, 32, 32]} />
        <meshStandardMaterial
          color={config.color}
          emissive={config.emissive ?? config.color}
          emissiveIntensity={
            isSelected ? 0.6 : (config.emissiveIntensity ?? (isSun ? 1.2 : 0.08))
          }
          roughness={isSun ? 0.4 : 0.85}
          metalness={isSun ? 0.1 : 0.05}
        />
      </mesh>

      {isSaturn && (
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <ringGeometry args={[config.radius * 1.4, config.radius * 2.1, 64]} />
          <meshBasicMaterial
            color="#fef3c7"
            transparent
            opacity={0.45}
            side={2}
          />
        </mesh>
      )}

      {isSelected && body && (
        <mesh>
          <sphereGeometry args={[config.radius * 1.35, 16, 16]} />
          <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.35} />
        </mesh>
      )}
    </group>
  );
}
