import { scene } from "../environment/renderer";
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const flareTexture = textureLoader.load("/flare.png");

export class Galaxy {
  count = 100000;
  size = 0.024;
  radius = 11.5;
  branches = 3;
  spin = 1;
  speed = 0.0005;
  randomness = 0.525;
  randomnessPower = 3;
  insideColor = "#ec4d18";
  outsideColor = "#00ffcc";

  geometry: null | THREE.BufferGeometry = null;
  material: null | THREE.PointsMaterial = null;
  points: null | THREE.Points = null;
  galaxy: null | THREE.Group = null;

  generateGalaxy() {
    // Destroy old galaxy
    if (this.points !== null && this.geometry !== null && this.material !== null && this.galaxy !== null) {
      this.geometry.dispose();
      this.material.dispose();
      this.galaxy.remove(this.points);
      scene.remove(this.galaxy);
    }

    /**
     * Geometry
     */

    this.galaxy = new THREE.Group();
    this.geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(this.count * 3);
    const colors = new Float32Array(this.count * 3);

    const colorInside = new THREE.Color(this.insideColor);
    const colorOutside = new THREE.Color(this.outsideColor);

    for (let i = 0; i < this.count; i++) {
      // Position
      const i3 = i * 3;

      const radius = Math.random() * this.radius;

      const spinAngle = radius * this.spin;
      const branchAngle = ((i % this.branches) / this.branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), this.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * this.randomness * radius;
      const randomY = Math.pow(Math.random(), this.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * this.randomness * radius;
      const randomZ = Math.pow(Math.random(), this.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * this.randomness * radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / this.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    /**
     * Material
     */

    this.material = new THREE.PointsMaterial({
      size: this.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: flareTexture,
    });

    /**
     * Points
     */
    this.points = new THREE.Points(this.geometry, this.material);

    this.galaxy.add(this.points);
    scene.add(this.galaxy);
  }
}
