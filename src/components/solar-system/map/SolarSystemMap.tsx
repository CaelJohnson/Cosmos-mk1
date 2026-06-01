"use client";

import { Canvas } from "@react-three/fiber";
import { useCallback, useState } from "react";
import { getBody } from "@/lib/solar-system/bodies";
import {
  getFocusZoomDistance,
  getMapWorldPosition,
  type MapFocusRequest,
} from "@/lib/solar-system/map-layout";
import { BodyPanel } from "@/components/solar-system/BodyPanel";
import { MapScene } from "./MapScene";

export function SolarSystemMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [focusRequest, setFocusRequest] = useState<MapFocusRequest | null>(
    null
  );

  const handleSelect = useCallback((id: string) => {
    if (!getBody(id)) return;

    setSelectedId((prev) => {
      const isDeselect = prev === id;
      if (!isDeselect) {
        const pos = getMapWorldPosition(id);
        if (pos) {
          setFocusRequest({
            point: pos,
            distance: getFocusZoomDistance(id),
            token: Date.now(),
          });
        }
      }
      return isDeselect ? null : id;
    });
  }, []);

  const handleClose = useCallback(() => setSelectedId(null), []);

  const selectedBody = selectedId ? getBody(selectedId) : null;

  return (
    <div className="relative h-[min(78vh,720px)] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050508]">
      <Canvas
        camera={{ position: [0, 24, 48], fov: 50, near: 0.1, far: 250 }}
        gl={{ antialias: true, alpha: false }}
        onPointerMissed={() => setSelectedId(null)}
      >
        <MapScene
          selectedId={selectedId}
          focusRequest={focusRequest}
          onSelect={handleSelect}
        />
      </Canvas>

      {/* HUD */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between gap-4 p-4 sm:p-5">
        <div className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Controls
          </p>
          <p className="mt-1 text-sm text-zinc-300">
            Drag to look · Right-drag to move · Scroll to zoom
          </p>
          <p className="mt-0.5 text-xs text-zinc-500">
            Click a world to fly in and zoom close
          </p>
        </div>

        {selectedBody && (
          <div className="hidden max-w-xs rounded-xl border border-violet-500/30 bg-black/50 px-4 py-3 backdrop-blur-md sm:block">
            <p className="font-display text-lg font-semibold text-zinc-50">
              {selectedBody.name}
            </p>
            <p className="mt-1 text-xs text-zinc-400">{selectedBody.tagline}</p>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="text-center text-xs text-zinc-600">
          Not to scale — distances and sizes are simplified so you can explore.
        </p>
      </div>

      <BodyPanel bodyId={selectedId} onClose={handleClose} />
    </div>
  );
}
