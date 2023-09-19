import * as THREE from "three";
import { galaxy } from "../../environment/paint";

const clock = new THREE.Clock();

export const spinGalaxy = () => {
  const elapsedTime = clock.getElapsedTime();

  if (galaxy.galaxy) galaxy.galaxy.rotateY(galaxy.speed);
};
