"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import {
  mapDefaultDistance,
  mapDefaultTarget,
  type MapFocusRequest,
} from "@/lib/solar-system/map-layout";

type MapControlsProps = {
  focusRequest: MapFocusRequest | null;
};

export function MapControls({ focusRequest }: MapControlsProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const focusGoal = useRef(new THREE.Vector3(...mapDefaultTarget));
  const distanceGoal = useRef(mapDefaultDistance);
  const isFocusing = useRef(false);
  const viewDirection = useRef(new THREE.Vector3(0, 0.45, 1).normalize());

  // Animate toward a clicked world
  useEffect(() => {
    if (!focusRequest) return;

    focusGoal.current.set(...focusRequest.point);
    distanceGoal.current = focusRequest.distance;

    const controls = controlsRef.current;
    if (controls) {
      viewDirection.current
        .subVectors(camera.position, controls.target)
        .normalize();
    }

    isFocusing.current = true;
  }, [focusRequest, camera]);

  // Start centered on the Sun
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.target.set(...mapDefaultTarget);
    const offset = viewDirection.current
      .clone()
      .multiplyScalar(mapDefaultDistance);
    camera.position.copy(controls.target).add(offset);
    controls.update();
  }, [camera]);

  useFrame((_, delta) => {
    const controls = controlsRef.current;
    if (!controls || !isFocusing.current) return;

    const smooth = 1 - Math.exp(-7 * delta);

    controls.target.lerp(focusGoal.current, smooth);

    const currentOffset = new THREE.Vector3().subVectors(
      camera.position,
      controls.target
    );
    const currentDistance = currentOffset.length();
    const newDistance = THREE.MathUtils.lerp(
      currentDistance,
      distanceGoal.current,
      smooth
    );

    if (currentOffset.lengthSq() < 1e-6) {
      currentOffset.copy(viewDirection.current);
    } else {
      currentOffset.normalize();
    }

    camera.position
      .copy(controls.target)
      .add(currentOffset.multiplyScalar(newDistance));

    controls.update();

    const targetDone =
      controls.target.distanceTo(focusGoal.current) < 0.08;
    const zoomDone =
      Math.abs(newDistance - distanceGoal.current) < 0.08;

    if (targetDone && zoomDone) {
      controls.target.copy(focusGoal.current);
      camera.position
        .copy(controls.target)
        .add(viewDirection.current.clone().multiplyScalar(distanceGoal.current));
      isFocusing.current = false;
      controls.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enablePan
      enableZoom
      enableRotate
      enableDamping
      dampingFactor={0.06}
      screenSpacePanning
      minDistance={3}
      maxDistance={160}
      panSpeed={1.8}
      rotateSpeed={0.55}
      zoomSpeed={1.1}
      maxPolarAngle={Math.PI * 0.88}
      onChange={() => {
        if (!isFocusing.current && controlsRef.current) {
          focusGoal.current.copy(controlsRef.current.target);
          viewDirection.current
            .subVectors(camera.position, controlsRef.current.target)
            .normalize();
        }
      }}
    />
  );
}
