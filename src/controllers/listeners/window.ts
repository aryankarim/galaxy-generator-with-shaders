// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { camera, renderer } from '../../environment/renderer'

function resizeRendererToDisplaySize(renderer: any) {
  const canvas = renderer.domElement
  const width = canvas.clientWidth
  const height = canvas.clientHeight

  const needResize = canvas.width !== width || canvas.height !== height
  if (needResize) {
    renderer.setSize(width, height, false)
  }

  return needResize
}

export const checkForResize = () => {
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement
    camera.camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.camera.updateProjectionMatrix()
  }
}

export const controls = new OrbitControls(camera.camera, renderer.domElement)

controls.update()
controls.maxPolarAngle = 1.5
controls.minDistance = 4
controls.maxDistance = 10
controls.enableDamping = true
