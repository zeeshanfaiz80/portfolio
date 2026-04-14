import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const NetworkGlobe = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
    camera.position.z = 25

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const globeRadius = 8
    const continentCount = 50
    const connectionCount = 120

    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64)
    const globeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x00ffc8) },
        color2: { value: new THREE.Color(0x6400ff) }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        uniform float time;
        
        void main() {
          vPosition = position;
          vNormal = normal;
          vUv = uv;
          
          float displacement = sin(position.x * 3.0 + time) * sin(position.y * 3.0 + time) * 0.1;
          vec3 newPosition = position + normal * displacement;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float time;
        
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          vec3 baseColor = mix(color1, color2, vUv.y + sin(time) * 0.2);
          
          float grid = sin(vPosition.x * 10.0) * sin(vPosition.y * 10.0) * sin(vPosition.z * 10.0);
          grid = smoothstep(0.8, 1.0, grid);
          
          vec3 finalColor = mix(baseColor, vec3(1.0), grid * 0.3 + fresnel * 0.2);
          float alpha = 0.15 + fresnel * 0.4;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    })

    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    const continentGeometries = []
    for (let i = 0; i < continentCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / continentCount)
      const theta = Math.sqrt(continentCount * Math.PI) * phi
      
      const x = globeRadius * Math.sin(phi) * Math.cos(theta)
      const y = globeRadius * Math.cos(phi)
      const z = globeRadius * Math.sin(phi) * Math.sin(theta)

      const nodeGeometry = new THREE.SphereGeometry(0.15 + Math.random() * 0.15, 8, 8)
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.2, 0.8, 0.6),
        transparent: true,
        opacity: 0.8
      })
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.set(x, y, z)
      scene.add(node)
      continentGeometries.push({ mesh: node, basePos: { x, y, z }, phase: Math.random() * Math.PI * 2 })
    }

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffc8,
      transparent: true,
      opacity: 0.2
    })

    for (let i = 0; i < connectionCount; i++) {
      const idx1 = Math.floor(Math.random() * continentCount)
      const idx2 = Math.floor(Math.random() * continentCount)
      
      if (idx1 !== idx2) {
        const p1 = continentGeometries[idx1].basePos
        const p2 = continentGeometries[idx2].basePos
        
        const points = [
          new THREE.Vector3(p1.x, p1.y, p1.z),
          new THREE.Vector3(p2.x, p2.y, p2.z)
        ]
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const line = new THREE.Line(geometry, lineMaterial.clone())
        scene.add(line)
      }
    }

    const ringGeometry = new THREE.TorusGeometry(globeRadius + 0.5, 0.02, 8, 100)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffc8,
      transparent: true,
      opacity: 0.3
    })

    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial.clone())
      ring.rotation.x = Math.PI / 2 + i * 0.3
      ring.rotation.z = i * 0.5
      ring.material.opacity = 0.15 - i * 0.03
      scene.add(ring)
    }

    camera.position.z = 30

    const container = canvasRef.current.parentElement
    const updateSize = () => {
      if (!container) return
      const size = Math.min(container.offsetWidth, container.offsetHeight)
      renderer.setSize(size, size)
      camera.aspect = 1
      camera.updateProjectionMatrix()
    }
    updateSize()

    let animationId
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.005
      
      globeMaterial.uniforms.time.value = time
      globe.rotation.y = time * 0.1
      globe.rotation.x = Math.sin(time * 0.05) * 0.1

      continentGeometries.forEach((item, i) => {
        const pulse = Math.sin(time * 2 + item.phase) * 0.3
        item.mesh.scale.setScalar(1 + pulse * 0.5)
      })

      renderer.render(scene, camera)
    }
    animate()

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(animationId)
      globeGeometry.dispose()
      globeMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
      style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 200, 0.3))' }}
    />
  )
}

export default NetworkGlobe