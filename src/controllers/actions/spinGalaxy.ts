import { galaxy } from "../../environment/paint";

export const spinGalaxy = () => {
  if (galaxy.galaxy) galaxy.galaxy.rotateY(galaxy.speed);
};
