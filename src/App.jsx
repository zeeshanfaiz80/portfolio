import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import './index.css'
import NeuralBackground from './components/NeuralBackground'
import HeroDashboard from './components/HeroDashboard'
import BentoProjects from './components/BentoProjects'
import ProjectNodes from './components/ProjectNodes'
import EducationSection from './components/EducationSection'
import ContactUplink from './components/ContactUplink'
import Preloader from './components/Preloader'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!canvasRef.current || !loading) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.position.z = 30

    const particleCount = 5000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const velocities = new Float32Array(particleCount * 3)
    
    const colorPalette = [
      new THREE.Color(0x00d4ff),
      new THREE.Color(0x0066ff),
      new THREE.Color(0x0099ff),
      new THREE.Color(0x6366f1),
      new THREE.Color(0x3b82f6),
    ]

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120

      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 3 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() },
        mouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        attribute vec3 velocity;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        uniform float pixelRatio;
        uniform vec2 mouse;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          pos.y += sin(time * 0.3 + position.x * 0.05) * 3.0;
          pos.x += cos(time * 0.2 + position.y * 0.05) * 2.5;
          pos.z += sin(time * 0.25 + position.z * 0.05) * 2.0;
          
          float mouseInfluence = length(mouse) * 0.5;
          pos.x += mouse.x * mouseInfluence * sin(position.y * 0.1 + time) * 0.5;
          pos.y += mouse.y * mouseInfluence * cos(position.x * 0.1 + time) * 0.5;
          
          float pulse = sin(time * 3.0 + position.x * 0.1 + position.y * 0.1) * 0.5 + 0.5;
          float wave = sin(time * 2.0 + position.z * 0.2) * 0.5 + 0.5;
          vAlpha = (0.2 + pulse * 0.5 + wave * 0.3);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * pixelRatio * (400.0 / -mvPosition.z) * (0.5 + pulse * 0.7);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;
          
          float glow = 1.0 - smoothstep(0.0, 0.5, dist);
          float core = 1.0 - smoothstep(0.0, 0.15, dist);
          vec3 finalColor = mix(vColor, vec3(1.0), core * 0.5);
          gl_FragColor = vec4(finalColor, glow * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const torusGeometry = new THREE.TorusGeometry(25, 0.02, 16, 100)
    const torusMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ffc8, 
      transparent: true, 
      opacity: 0.15 
    })
    const torus1 = new THREE.Mesh(torusGeometry, torusMaterial)
    scene.add(torus1)

    const torus2 = new THREE.Mesh(torusGeometry, torusMaterial.clone())
    torus2.rotation.x = Math.PI / 2
    torus2.material.opacity = 0.1
    scene.add(torus2)

    const torus3 = new THREE.Mesh(torusGeometry, torusMaterial.clone())
    torus3.rotation.y = Math.PI / 2
    torus3.material.opacity = 0.08
    scene.add(torus3)

    let animationId
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.005
      material.uniforms.time.value = time
      
      particles.rotation.y = time * 0.05
      particles.rotation.x = time * 0.02
      
      torus1.rotation.z = time * 0.1
      torus1.rotation.x = time * 0.05
      torus2.rotation.z = time * 0.08
      torus3.rotation.x = time * 0.06
      
      renderer.render(scene, camera)
    }
    animate()

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      mouseRef.current = { x, y }
      material.uniforms.mouse.value.set(x * 2, y * 2)
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.pixelRatio.value = renderer.getPixelRatio()
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [loading])

  useEffect(() => {
    if (loading) return

    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.glass').forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 60, filter: 'blur(12px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    gsap.utils.toArray('.glow-orb').forEach((orb) => {
      gsap.to(orb, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    })

  }, [loading])

  return (
    <div className="relative min-h-screen">
      <Preloader onComplete={() => setLoading(false)} />
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="glow-orb absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="glow-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="glow-orb absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" style={{ animationDelay: '1s' }} />
      <NeuralBackground />
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-blue-400 font-mono text-sm tracking-widest">ZEESHAN FAIZ</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-all text-sm font-mono">EXP</a>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-all text-sm font-mono">SKILLS</a>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-all text-sm font-mono">PROJECTS</a>
                <a href="#education" className="text-gray-400 hover:text-blue-400 transition-all text-sm font-mono">EDU</a>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-all text-sm font-mono">CONTACT</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-400 font-mono">ONLINE</span>
              </div>
            </div>
          </div>
        </nav>
        <HeroDashboard />
        <BentoProjects />
        <ProjectNodes />
        <EducationSection />
        <ContactUplink />
        <footer className="py-8 text-center">
          <div className="glass inline-block px-6 py-3 rounded-full">
            <span className="text-gray-500 text-xs font-mono">
              Zeeshan Faiz — Network Infrastructure Engineer
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App