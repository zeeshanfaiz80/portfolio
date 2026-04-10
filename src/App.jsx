import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './index.css'
import NeuralBackground from './components/NeuralBackground'
import HeroDashboard from './components/HeroDashboard'
import ProjectNodes from './components/ProjectNodes'
import EducationSection from './components/EducationSection'
import ContactUplink from './components/ContactUplink'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.position.z = 30

    const particleCount = 3000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    
    const color1 = new THREE.Color(0x00ffc8)
    const color2 = new THREE.Color(0x6400ff)
    const color3 = new THREE.Color(0x00aaff)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100

      const mixFactor = Math.random()
      let color
      if (mixFactor < 0.5) {
        color = color1.clone().lerp(color2, mixFactor * 2)
      } else {
        color = color2.clone().lerp(color3, (mixFactor - 0.5) * 2)
      }
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 2 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        uniform float pixelRatio;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          pos.y += sin(time * 0.5 + position.x * 0.1) * 2.0;
          pos.x += cos(time * 0.3 + position.y * 0.1) * 1.5;
          pos.z += sin(time * 0.4 + position.z * 0.1) * 1.0;
          
          float pulse = sin(time * 2.0 + position.x * 0.2 + position.y * 0.2) * 0.5 + 0.5;
          vAlpha = 0.3 + pulse * 0.7;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z) * (0.5 + pulse * 0.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      linePositions[i * 3] = (Math.random() - 0.5) * 80
      linePositions[i * 3 + 1] = (Math.random() - 0.5) * 80
      linePositions[i * 3 + 2] = (Math.random() - 0.5) * 80
    }
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffc8,
      transparent: true,
      opacity: 0.1
    })
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      material.uniforms.time.value += 0.01
      
      particles.rotation.y += 0.0003
      particles.rotation.x += 0.0001
      lines.rotation.y -= 0.0002
      lines.rotation.z += 0.0001
      
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.pixelRatio.value = renderer.getPixelRatio()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      geometry.dispose()
      material.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <NeuralBackground />
      <div className="relative z-10">
        <nav className="glass fixed top-3 left-3 right-3 md:left-1/2 md:-translate-x-1/2 md:px-6 md:py-3 px-4 py-2 rounded-full flex items-center justify-between md:justify-center md:gap-8 gap-4 z-50">
          <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider">ZEESHAN FAIZ</span>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="text-gray-400 hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></span>
            <span className="text-xs text-gray-500">v2.0</span>
          </div>
        </nav>
        <HeroDashboard />
        <ProjectNodes />
        <EducationSection />
        <ContactUplink />
        <footer className="py-6 text-center text-gray-500 text-xs">
          <p>Network Infrastructure Portfolio — Zeeshan Faiz</p>
        </footer>
      </div>
    </div>
  )
}

export default App
