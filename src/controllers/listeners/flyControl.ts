import { FlyControls } from "three/addons/controls/FlyControls.js";
import { camera, renderer } from "../../environment/renderer";

export const flyControls = new FlyControls(camera.camera, renderer.domElement);
