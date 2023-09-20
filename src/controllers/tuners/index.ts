import * as dat from "lil-gui";
import { galaxy } from "../../environment/paint";
import { bgColor, renderer } from "../../environment/renderer";

const gui = new dat.GUI();

gui
  .add(galaxy, "count")
  .min(100)
  .max(1000000)
  .step(100)
  .onFinishChange(() => galaxy.generateGalaxy());
gui
  .add(galaxy, "size")
  .min(0.001)
  .max(0.1)
  .step(0.001)
  .onFinishChange(() => galaxy.generateGalaxy());
gui
  .add(galaxy, "radius")
  .min(0.01)
  .max(20)
  .step(0.01)
  .onFinishChange(() => galaxy.generateGalaxy());
gui
  .add(galaxy, "branches")
  .min(2)
  .max(20)
  .step(1)
  .onFinishChange(() => galaxy.generateGalaxy());
gui
  .add(galaxy, "spin")
  .min(-5)
  .max(5)
  .step(0.001)
  .onFinishChange(() => galaxy.generateGalaxy());
gui
  .add(galaxy, "speed")
  .min(-0.1)
  .max(0.1)
  .step(0.0001)
  .onFinishChange(() => galaxy.generateGalaxy());
gui
  .add(galaxy, "randomness")
  .min(0)
  .max(2)
  .step(0.001)
  .onFinishChange(() => galaxy.generateGalaxy());
gui
  .add(galaxy, "randomnessPower")
  .min(1)
  .max(10)
  .step(0.001)
  .onFinishChange(() => galaxy.generateGalaxy());
gui.addColor(galaxy, "insideColor").onFinishChange(() => galaxy.generateGalaxy());
gui.addColor(galaxy, "outsideColor").onFinishChange(() => galaxy.generateGalaxy());
gui.addColor(bgColor, "backgroundColor").onFinishChange((val: string) => {
  renderer.setClearColor(val);
});
