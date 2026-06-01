"use client";

import { mapRegions } from "@/lib/solar-system/map-layout";

type MapBeltsProps = {
  onSelectRegion: (id: string) => void;
};

export function MapBelts({ onSelectRegion }: MapBeltsProps) {
  const { asteroidBelt, kuiperBelt } = mapRegions;

  return (
    <group>
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, asteroidBelt.y, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectRegion("asteroid-belt");
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <torusGeometry
          args={[
            (asteroidBelt.inner + asteroidBelt.outer) / 2,
            (asteroidBelt.outer - asteroidBelt.inner) / 2,
            48,
            128,
          ]}
        />
        <meshBasicMaterial
          color="#78716c"
          transparent
          opacity={0.12}
          side={2}
        />
      </mesh>

      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, kuiperBelt.y, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectRegion("kuiper-belt");
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <torusGeometry
          args={[
            (kuiperBelt.inner + kuiperBelt.outer) / 2,
            (kuiperBelt.outer - kuiperBelt.inner) / 2,
            64,
            128,
          ]}
        />
        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.08}
          side={2}
        />
      </mesh>
    </group>
  );
}
