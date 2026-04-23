import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { 
  Shield, Network, Server, Cloud, Cpu, Activity, 
  ArrowRight, Mail, MapPin
} from 'lucide-react'
import profilePhoto from '../assets/profile-photo.png'

const HeroSection = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const smoothX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 20]), { stiffness: 100, damping: 30 })
  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 15]), { stiffness: 100, damping: 30 })

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
    { value: '7+', label: 'Years' },
    { value: '500+', label: 'Clients' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' }
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#0a1428] to-[#030308]" />
      
      {/* Atmospheric Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-500/8 rounded-full blur-[180px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Secondary glow */}
        <motion.div 
          className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-sky-600/5 rounded-full blur-[150px]"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40"
        style={{ y }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                </span>
                <span className="font-mono text-xs text-sky-300 tracking-wider">Available for Opportunities</span>
              </motion.div>
              
              {/* Headline */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Zeeshan
                </motion.span>
                <motion.span 
                  className="block text-gradient"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Faiz
                </motion.span>
              </h1>
              
              {/* Subtitle */}
              <motion.p 
                className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                IT Infrastructure Engineer specializing in secure network architecture, 
                virtualization, and cloud infrastructure. Building stable systems that scale.
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-sky-500 text-black font-semibold rounded-lg hover:bg-sky-400 transition-all"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#experience" 
                className="inline-flex items-center gap-2 px-6 py-3.5 glass-panel rounded-lg text-slate-300 hover:text-white transition-colors"
              >
                View Experience
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-slate-800/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-sky-400">{metric.value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              style={{ 
                rotateX: smoothY,
                rotateY: smoothX,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-sky-500/30 shadow-2xl shadow-sky-500/20">
                        <img src={profilePhoto} alt="Zeeshan Faiz" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-500 rounded-full border-2 border-[#0a1428]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">Zeeshan Faiz</h3>
                      <p className="font-mono text-xs text-sky-400 mt-1">IT Infrastructure Engineer</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-400">
                      <MapPin className="w-4 h-4 text-sky-500" />
                      <span className="text-sm">Vienna, Austria</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Mail className="w-4 h-4 text-sky-500" />
                      <span className="text-sm">zeeshanfaiz80@gmail.com</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/50">
                    <div className="flex flex-wrap gap-2">
                      {['FortiGate', 'BGP', 'VMware', 'Linux', 'Azure'].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-slate-800/50 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-slate-700/50 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-sky-500/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection