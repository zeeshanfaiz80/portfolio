import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { 
  Shield, Network, Server, Cloud, Cpu, Database, 
  Activity, Lock, Zap, Layers, ArrowRight, Mail, MapPin
} from 'lucide-react'
import profilePhoto from '../assets/profile-photo.png'

const FloatingPanel = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={`glass-card rounded-2xl p-6 ${className}`}
    initial={{ opacity: 0, rotateX: -15, rotateY: 15, y: 50 }}
    animate={{ 
      opacity: 1, 
      rotateX: 0, 
      rotateY: 0, 
      y: 0 
    }}
    transition={{ 
      delay: 0.5 + delay, 
      duration: 1,
      type: "spring",
      stiffness: 100
    }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {children}
  </motion.div>
)

const SignalNode = ({ x, y, delay = 0 }) => (
  <motion.div
    className="absolute w-3 h-3 rounded-full bg-cyan-400/60"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
    transition={{ 
      delay: 1 + delay,
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

const ConnectionLine = ({ start, end }) => {
  const path = `M ${start.x}% ${start.y}% Q ${(start.x + end.x) / 2}% ${Math.min(start.y, end.y) - 10}% ${end.x}% ${end.y}%`
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
          <stop offset="50%" stopColor="rgba(34, 211, 238, 0.3)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
        </linearGradient>
      </defs>
      <motion.path
        d={path}
        stroke="url(#lineGrad)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      <motion.circle r="2" fill="#22d3ee">
        <animateMotion dur="4s" repeatCount="Infinity" path={path} />
      </motion.circle>
    </svg>
  )
}

const MetricCard = ({ value, label, delay = 0 }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 + delay, duration: 0.6 }}
  >
    <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{value}</div>
    <div className="font-mono text-xs text-zinc-500 mt-1 tracking-wider">{label}</div>
  </motion.div>
)

const SkillOrb = ({ icon: Icon, label, x, y, delay = 0 }) => (
  <motion.div
    className="absolute flex flex-col items-center gap-2"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -8, 0]
    }}
    transition={{ 
      delay: 1.2 + delay,
      duration: 0.6,
      y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center">
      <Icon className="w-5 h-5 text-cyan-400" />
    </div>
    <span className="font-mono text-[10px] text-zinc-500 tracking-wider">{label}</span>
  </motion.div>
)

const HeroSection = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 15])
  
  const smoothX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 30]), { stiffness: 100, damping: 30 })
  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 20]), { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 30
      const y = (clientY / window.innerHeight - 0.5) * 30
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden grid-fade">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#060608] pointer-events-none z-10" />
      
      {/* Ambient glow layers */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-[120px]"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.02] rounded-full blur-[200px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Signal nodes and connections */}
      <div className="absolute inset-0 pointer-events-none">
        <SignalNode x={20} y={20} delay={0} />
        <SignalNode x={80} y={15} delay={0.3} />
        <SignalNode x={15} y={70} delay={0.6} />
        <SignalNode x={85} y={65} delay={0.9} />
        <SignalNode x={50} y={85} delay={1.2} />
        
        <ConnectionLine start={{ x: 20, y: 20 }} end={{ x: 80, y: 15 }} />
        <ConnectionLine start={{ x: 15, y: 70 }} end={{ x: 85, y: 65 }} />
        <ConnectionLine start={{ x: 20, y: 20 }} end={{ x: 15, y: 70 }} />
        <ConnectionLine start={{ x: 80, y: 15 }} end={{ x: 85, y: 65 }} />
      </div>

      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32 perspective-1000"
        style={{ 
          y,
          opacity,
          rotateX,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="font-mono text-xs text-zinc-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
              </motion.div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1]">
                <motion.span 
                  className="block text-zinc-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Zeeshan
                </motion.span>
                <motion.span 
                  className="block text-gradient"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Faiz
                </motion.span>
              </h1>
              
              <motion.p 
                className="mt-6 text-lg text-zinc-400 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                IT Infrastructure Engineer designing secure, scalable systems. 
                From network architecture to cloud deployment — I build the foundation others rely on.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a href="#contact" className="group inline-flex items-center gap-2 px-6 py-3.5 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all">
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 px-6 py-3.5 glass-panel rounded-lg text-zinc-300 hover:text-white transition-colors">
                View Experience
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-zinc-800/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <MetricCard value="7+" label="YEARS" delay={0} />
              <MetricCard value="500+" label="CLIENTS" delay={0.1} />
              <MetricCard value="99.9%" label="UPTIME" delay={0.2} />
              <MetricCard value="24/7" label="NOC" delay={0.3} />
            </motion.div>
          </div>

          {/* Right - 3D Floating Panels */}
          <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
            {/* Main Profile Card */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80"
              style={{ 
                rotateX: smoothY,
                rotateY: smoothX,
                transformStyle: 'preserve-3d'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
            >
              <FloatingPanel className="relative">
                <div className="scan-line" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-zinc-700/50 shadow-2xl">
                      <img src={profilePhoto} alt="Zeeshan Faiz" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full border-2 border-[#0a0a0c]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Zeeshan Faiz</h3>
                    <p className="font-mono text-xs text-cyan-400">IT INFRASTRUCTURE ENGINEER</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm">Vienna, Austria</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Mail className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm">zeeshanfaiz80@gmail.com</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/30">
                  <div className="flex flex-wrap gap-2">
                    {['FortiGate', 'BGP', 'VMware', 'Linux', 'Azure'].map((skill) => (
                      <span key={skill} className="px-2 py-1 text-[10px] font-mono text-zinc-500 bg-zinc-800/30 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FloatingPanel>
            </motion.div>

            {/* Floating Skill Orbs */}
            <SkillOrb icon={Shield} label="SECURITY" x={5} y={10} delay={0} />
            <SkillOrb icon={Network} label="ROUTING" x={80} y={8} delay={0.2} />
            <SkillOrb icon={Server} label="VIRTUAL" x={75} y={55} delay={0.4} />
            <SkillOrb icon={Cloud} label="CLOUD" x={10} y={50} delay={0.6} />
            <SkillOrb icon={Activity} label="MONITOR" x={50} y={90} delay={0.8} />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-zinc-700/50 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-cyan-500/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection