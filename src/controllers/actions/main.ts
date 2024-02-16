import { checkForResize } from "../listeners/window";
import { spinGalaxy } from "./spinGalaxy";
import "../listeners/flyControl";
import { flyControls } from "../listeners/flyControl";
import * as THREE from "three";
import { orbitControls } from "../listeners/orbitControl";

var clock = new THREE.Clock();
export const actions = () => {
  spinGalaxy(clock);
  checkForResize();
  orbitControls.update();
  flyControls.update(clock.getDelta());
};
