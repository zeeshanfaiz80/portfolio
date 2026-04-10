import { motion } from 'framer-motion'
import avatar from '../assets/zeeshan-character.png'

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
          className="glass rounded-2xl p-4 md:p-6 lg:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr] gap-6 lg:gap-8 items-center">
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <motion.div
                className="space-y-1 md:space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-cyan-300">Network Infrastructure Engineer</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Zeeshan Faiz
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-6">
                  Dynamic Network Infrastructure Engineer with extensive experience in designing, deploying, and managing secure enterprise network infrastructures across multi-site, high-availability environments. Proven expertise in multi-vendor firewall security (FortiGate, pfSense, OPNsense), advanced routing protocols (BGP, OSPF, MPLS), virtualization (VMware ESXi, Proxmox VE), and full-stack observability using tools like SolarWinds, PRTG, Graylog, and Nagios. Skilled in implementing Zero Trust security models, ISP/WAN technologies, wireless networking, load balancing, and network automation through scripting.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2 md:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
              >
                <a href="#experience" className="px-4 md:px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs md:text-sm text-white font-semibold hover:opacity-90 transition-opacity">
                  View Experience
                </a>
                <a href="#contact" className="px-4 md:px-5 py-2 border border-cyan-400 rounded-full text-xs md:text-sm text-cyan-300 hover:bg-cyan-400/10 transition-colors">
                  Contact Details
                </a>
              </motion.div>
            </div>

            <motion.div
              className="glass rounded-2xl overflow-hidden border border-white/10 order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img src={avatar} alt="Zeeshan avatar" className="w-full h-auto max-w-xs mx-auto object-contain" />
              <div className="p-3 md:p-4 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Contact</p>
                  <p className="mt-1 text-xs md:text-sm text-white">zeeshanfaiz80@gmail.com</p>
                  <p className="text-xs md:text-sm text-gray-400">+43 677 62050993</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/zeeshan-faiz-637103165/" target="_blank" rel="noreferrer" className="mt-1 block text-xs md:text-sm text-cyan-300 hover:text-cyan-100">
                    linkedin.com/in/zeeshan-faiz-637103165
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
          className="glass rounded-2xl p-4 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-4 md:mb-6">
            <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider">// SKILLS</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-1 md:mt-2">
              Core <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Skills</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {specialties.map((item) => (
              <div key={item} className="rounded-xl md:rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4 text-xs md:text-sm text-gray-200 text-center md:text-left">
                {item}
              </div>
            ))}
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