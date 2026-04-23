import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Shield, 
  Network, 
  Server, 
  Cloud, 
  Cpu, 
  Database,
  Activity,
  ArrowRight,
  Mail,
  MapPin
} from 'lucide-react'
import profilePhoto from '../assets/profile-photo.png'

const FloatingNode = ({ icon: Icon, delay = 0, x = 0, y = 0 }) => (
  <motion.div
    className="absolute w-12 h-12 glass-panel rounded-xl flex items-center justify-center"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -8, 0]
    }}
    transition={{ 
      delay: 0.5 + delay,
      duration: 0.6,
      y: {
        duration: 3 + delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    style={{ left: x, top: y }}
  >
    <Icon className="w-5 h-5 text-cyan-400" />
  </motion.div>
)

const SignalLine = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
    <motion.path
      d="M 100 200 Q 200 150 300 200 T 500 180"
      stroke="rgba(0, 212, 255, 0.15)"
      strokeWidth="1"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    />
    <motion.circle
      r="3"
      fill="#00d4ff"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
    >
      <animateMotion dur="3s" repeatCount="Infinity" path="M 100 200 Q 200 150 300 200 T 500 180" />
    </motion.circle>
  </svg>
)

const HeroSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const metrics = [
    { value: '7+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '99.9%', label: 'Uptime Achieved' },
    { value: '24/7', label: 'NOC Support' }
  ]

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c] pointer-events-none" />
      
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          x: mousePosition.x * 0.5, 
          y: mousePosition.y * 0.5,
          perspective: '1000px'
        }}
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-cyan-400/3 rounded-full blur-[100px]" />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32"
        style={{ y, opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                AVAILABLE FOR OPPORTUNITIES
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-zinc-100">IT Infrastructure</span>
                <span className="block gradient-text">Engineer</span>
              </h1>
              
              <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
                Designing, implementing, and supporting secure multi-site environments. 
                From networks to virtualization — I build stable systems that scale.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all">
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 px-6 py-3 glass-panel rounded-lg text-zinc-300 hover:text-white transition-colors">
                View Experience
              </a>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-zinc-800/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {metrics.map((metric, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="font-display text-2xl md:text-3xl font-bold text-cyan-400">{metric.value}</div>
                  <div className="text-xs text-zinc-500 font-mono mt-1">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative perspective-container">
              <motion.div 
                className="glass-card rounded-2xl p-8 relative overflow-hidden float-animation"
                style={{ 
                  transform: `rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-zinc-700/50 shadow-2xl">
                      <img src={profilePhoto} alt="Zeeshan Faiz" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">Zeeshan Faiz</h3>
                      <p className="text-cyan-400 font-mono text-sm">IT Infrastructure Engineer</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">Vienna, Austria</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">zeeshanfaiz80@gmail.com</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-zinc-800/50">
                    <div className="flex flex-wrap gap-2">
                      {['FortiGate', 'BGP', 'VMware', 'Linux', 'Azure'].map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs font-mono text-zinc-500 bg-zinc-800/50 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <FloatingNode icon={Network} delay={0} x="5%" y="10%" />
              <FloatingNode icon={Server} delay={0.5} x="85%" y="5%" />
              <FloatingNode icon={Shield} delay={1} x="80%" y="70%" />
              <FloatingNode icon={Cloud} delay={1.5} x="10%" y="75%" />
              <FloatingNode icon={Cpu} delay={2} x="45%" y="85%" />
              <FloatingNode icon={Database} delay={2.5} x="90%" y="45%" />

              <SignalLine />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </section>
  )
}

export default HeroSection