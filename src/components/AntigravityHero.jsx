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
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-36"
        style={{ y }}
      >
        {/* Mobile: Stacked order - availability first, then profile, then content */}
        <div className="lg:hidden space-y-8">
          {/* Status Badge - First on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel"
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
          </motion.div>

          {/* Profile Card - Second on mobile */}
          <div className="flex justify-center">
            <motion.div
              className="relative w-full max-w-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/10 via-sky-600/5 to-transparent rounded-3xl blur-xl" />
                <div className="glass-card rounded-3xl p-6 lg:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.05] via-transparent to-transparent" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/5 rounded-full blur-2xl" />
                  <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-sky-500/20 rounded-tl-xl" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-r border-t border-sky-500/20 rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-l border-b border-sky-500/20 rounded-bl-xl" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-sky-500/20 rounded-br-xl" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative mb-5 lg:mb-8">
                      <div className="absolute -inset-3 bg-gradient-to-br from-sky-400/30 to-sky-600/20 rounded-full blur-md" />
                      <div className="relative w-28 h-28 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border-4 border-slate-800/50 shadow-2xl shadow-sky-500/20">
                        <img src={profilePhoto} alt="Zeeshan Faiz" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-display font-bold text-white">Zeeshan Faiz</h3>
                    <p className="text-sm text-sky-400 mt-1">IT Infrastructure Engineer</p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-slate-400">
                      <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      <span>Karachi, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
                      <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      <span className="text-sm">zeeshanfaiz80@gmail.com</span>
                    </div>
                    <div className="pt-4 lg:pt-6 border-t border-slate-800/50 w-full">
                      <div className="flex flex-wrap justify-center gap-2">
                        {['Firewall', 'Routing', 'Switching', 'Virtualization', 'Linux'].map((cap) => (
                          <span key={cap} className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/50 rounded-lg">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Headline, CTAs, Metrics - Third on mobile */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1]">
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
              <motion.p 
                className="mt-4 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
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
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className="text-center py-2"
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
        </div>

        {/* Desktop: Original grid layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1]">
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
          <div className="lg:col-span-5 mt-12 lg:mt-0">
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
              {/* Floating container with depth layers */}
              <div className="relative">
                {/* Background glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/10 via-sky-600/5 to-transparent rounded-3xl blur-xl" />
                
                {/* Main card */}
                <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                  {/* Ambient effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.05] via-transparent to-transparent" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/5 rounded-full blur-2xl" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-sky-500/20 rounded-tl-xl" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-r border-t border-sky-500/20 rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-l border-b border-sky-500/20 rounded-bl-xl" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-sky-500/20 rounded-br-xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Large Profile Image */}
                    <div className="relative mb-6 lg:mb-8">
                      {/* Outer ring glow */}
                      <div className="absolute -inset-3 bg-gradient-to-br from-sky-400/30 to-sky-600/20 rounded-full blur-md" />
                      
                      {/* Image container */}
                      <div className="relative w-32 h-32 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border-4 border-slate-800/50 shadow-2xl shadow-sky-500/20">
                        <img src={profilePhoto} alt="Zeeshan Faiz" className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Status indicator */}
                      <div className="absolute bottom-1 right-1 w-5 h-5 bg-sky-500 rounded-full border-3 border-[#0a1428] lg:border-4 lg:bottom-2 lg:right-2 lg:w-6 lg:h-6">
                        <div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-50" />
                      </div>
                    </div>
                    
                    {/* Name and title */}
                    <h3 className="font-display text-xl lg:text-2xl font-bold mb-1">Zeeshan Faiz</h3>
                    <p className="font-mono text-xs text-sky-400 mb-5 lg:mb-6">IT Infrastructure Engineer</p>

                    {/* Contact info */}
                    <div className="space-y-2 w-full mb-6 lg:mb-8">
                      <div className="flex items-center justify-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                        <span className="text-sm">Karachi, Pakistan</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-slate-400">
                        <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                        <span className="text-sm">zeeshanfaiz80@gmail.com</span>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="pt-5 lg:pt-6 border-t border-slate-800/50 w-full">
                      <div className="flex flex-wrap justify-center gap-2">
                        {['Firewall', 'Routing', 'Switching', 'Virtualization', 'Linux'].map((cap) => (
                          <span key={cap} className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/50 rounded-lg">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Hidden on mobile, visible from md breakpoint */}
      <motion.div 
        className="hidden md:block absolute md:bottom-8 bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
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