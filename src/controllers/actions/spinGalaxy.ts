import { galaxy } from "../../environment/paint";
import * as THREE from "three";

export const spinGalaxy = (clock: THREE.Clock) => {
  if (galaxy.material?.uniforms?.uTime) galaxy.material.uniforms.uTime.value = clock.getElapsedTime();
  if (galaxy.galaxy) galaxy.galaxy.rotateY(galaxy.speed);
};
