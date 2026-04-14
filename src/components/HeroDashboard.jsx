import { motion } from 'framer-motion'
import { 
  Shield, 
  Network, 
  Server, 
  Cloud, 
  Wifi, 
  Lock, 
  Activity, 
  Database,
  Code,
  Radio,
  Cpu,
  Mail,
  Phone,
  Globe,
  Award
} from 'lucide-react'
import NetworkGlobe from './NetworkGlobe'

const specialtyIcons = [
  Shield, Network, Server, Cloud, Wifi, Lock, Activity, Database, Code, Radio, Cpu
]

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4 }
  })
}

const specialties = [
  'Firewall & Security',
  'Routing & Switching',
  'Virtualization',
  'Network Monitoring',
  'Cloud & Automation',
  'Linux & Sysadmin',
  'Wireless Networks',
  'ISP & WAN Technologies',
  'Load Balancing',
  'Observability & Logging',
  'Scripting & Automation'
]

const HeroSection = () => {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center px-3 py-6 pt-20">
      <div className="max-w-7xl w-full">
        <motion.div
          className="glass rounded-2xl p-4 md:p-6 lg:p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-6 lg:gap-8 items-center relative">
            <motion.div
              className="order-2 lg:order-1 space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-cyan-300">Network Infrastructure Engineer</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Zeeshan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Faiz</span>
              </h1>
              <p className="text-sm md:text-base text-gray-300 leading-6">
                Dynamic Network Infrastructure Engineer with extensive experience in designing, deploying, and managing secure enterprise network infrastructures across multi-site, high-availability environments. Proven expertise in multi-vendor firewall security (FortiGate, pfSense, OPNsense), advanced routing protocols (BGP, OSPF, MPLS), virtualization (VMware ESXi, Proxmox VE), and full-stack observability.
              </p>
              <motion.div
                className="flex flex-wrap gap-2 md:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
              >
                <a href="#experience" className="group px-4 md:px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs md:text-sm text-white font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2">
                  <Activity className="w-4 h-4 group-hover:animate-pulse" />
                  View Experience
                </a>
                <a href="#contact" className="group px-4 md:px-5 py-2 border border-cyan-400 rounded-full text-xs md:text-sm text-cyan-300 hover:bg-cyan-400/10 transition-colors flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Contact Details
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl scale-150" />
                <NetworkGlobe />
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-2xl overflow-hidden border border-white/10 order-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-50" />
                  </div>
                  <span className="text-xs font-mono text-green-400">AVAILABLE FOR HIRE</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Cloud className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm text-white">Vienna, Austria</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <a href="mailto:zeeshanfaiz80@gmail.com" className="text-sm text-cyan-300 hover:text-cyan-100">zeeshanfaiz80@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <a href="tel:+4367762050993" className="text-sm text-white hover:text-cyan-300">+43 677 62050993</a>
                    </div>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/zeeshan-faiz-637103165/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 pt-3 border-t border-white/10"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Award className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">LinkedIn</p>
                      <p className="text-sm text-cyan-300">View Profile</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SkillsSection = () => {
  return (
    <section className="py-6 px-3 md:px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="glass rounded-2xl p-4 md:p-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center mb-4 md:mb-6 relative">
            <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider">// SKILLS</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-1 md:mt-2">
              Core <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Skills</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 relative">
            {specialties.map((item, i) => {
              const Icon = specialtyIcons[i % specialtyIcons.length]
              return (
                <motion.div
                  key={item}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-3 md:p-4 hover:border-cyan-400/30 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-500/10 transition-all cursor-default"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-200 group-hover:text-white transition-colors">{item}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { HeroSection, SkillsSection }

const HeroDashboard = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
    </>
  )
}

export default HeroDashboard