import { checkForResize, controls } from "../listeners/window";
import { spinGalaxy } from "./spinGalaxy";

export const actions = () => {
  spinGalaxy();
  checkForResize();
  controls.update();
};
