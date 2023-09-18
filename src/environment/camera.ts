import * as THREE from "three";

export class Camera {
  camera: THREE.PerspectiveCamera;
  speed = 0.05;
  direction = "s";
  fov = 75;
  aspect = 2;
  near = 0.1;
  far = 100;
  position = { x: 4, y: 2, z: 5 };
  size = { width: window.innerWidth, height: window.innerHeight };

  constructor() {
    const camera = new THREE.PerspectiveCamera(
      this.fov,
      this.size.width / this.size.height,
      this.near,
      this.far
    );
    camera.position.set(this.position.x, this.position.y, this.position.z);

    this.camera = camera;
  }
}
