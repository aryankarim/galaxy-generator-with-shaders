import { scene } from "../environment/renderer";
import * as THREE from "three";

export class Galaxy {
  count = 100000;
  size = 0.01;
  radius = 5;
  branches = 3;
  spin = 1;
  randomness = 0.2;
  randomnessPower = 3;
  insideColor = "#ff6030";
  outsideColor = "#1b3984";
  geometry: null | THREE.BufferGeometry = null;
  material: null | THREE.PointsMaterial = null;
  points: null | THREE.Points = null;

  generateGalaxy() {
    // Destroy old galaxy
    if (this.points !== null && this.geometry !== null && this.material !== null) {
      this.geometry.dispose();
      this.material.dispose();
      scene.remove(this.points);
    }

    /**
     * Geometry
     */
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

      const randomX =
        Math.pow(Math.random(), this.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * this.randomness * radius;
      const randomY =
        Math.pow(Math.random(), this.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * this.randomness * radius;
      const randomZ =
        Math.pow(Math.random(), this.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * this.randomness * radius;

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
    });

    /**
     * Points
     */
    this.points = new THREE.Points(this.geometry, this.material);
    scene.add(this.points);
  }
}
