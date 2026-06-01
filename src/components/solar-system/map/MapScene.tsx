"use client";

import { useMemo } from "react";
import { Stars } from "@react-three/drei";
import { mapObjects, type MapFocusRequest } from "@/lib/solar-system/map-layout";
import { MapBelts } from "./MapBelts";
import { MapControls } from "./MapControls";
import { MapWorld } from "./MapWorld";

type MapSceneProps = {
  selectedId: string | null;
  focusRequest: MapFocusRequest | null;
  onSelect: (id: string) => void;
};

export function MapScene({ selectedId, focusRequest, onSelect }: MapSceneProps) {
  const positions = useMemo(() => {
    const map = new Map<string, [number, number, number]>();
    for (const obj of mapObjects) {
      if (!obj.orbit) map.set(obj.id, obj.position);
    }
    return map;
  }, []);

  return (
    <>
      <color attach="background" args={["#050508"]} />
      <fog attach="fog" args={["#050508", 100, 200]} />

      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#fde68a" distance={160} />
      <directionalLight position={[40, 30, 20]} intensity={0.35} color="#c4b5fd" />

      <Stars
        radius={140}
        depth={80}
        count={6000}
        factor={3}
        saturation={0}
        fade
        speed={0.4}
      />

      <MapBelts onSelectRegion={onSelect} />

      {mapObjects.map((config) => {
        if (config.orbit) {
          const parentPos = positions.get(config.orbit.parentId);
          if (!parentPos) return null;
          return (
            <MapWorld
              key={config.id}
              config={config}
              parentPosition={parentPos}
              isSelected={selectedId === config.id}
              onSelect={onSelect}
            />
          );
        }
        return (
          <MapWorld
            key={config.id}
            config={config}
            isSelected={selectedId === config.id}
            onSelect={onSelect}
          />
        );
      })}

      <MapControls focusRequest={focusRequest} />
    </>
  );
}
