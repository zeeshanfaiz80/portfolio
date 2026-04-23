import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Enterprise Network Architecture',
    company: 'Topgolf Wien',
    description: 'Deployed and stabilized Meraki network with 2 firewalls, 30 switches, managed APs, VLAN segmentation, PBR, load balancing, and CCTV across four floors.',
    period: 'Jan 2025 – Mar 2025',
    location: 'Vienna, Austria',
    size: 'large'
  },
  {
    id: 2,
    title: 'Multi-Vendor Firewall Security',
    company: 'Superior Connection',
    description: 'Secured multi-entity enterprise networks with FortiGate, pfSense, OPNsense firewall policies with IPS/IDS, SSL inspection, and Zero Trust controls.',
    period: 'Oct 2022 – Sep 2024',
    location: 'Lahore, Pakistan',
    size: 'medium'
  },
  {
    id: 3,
    title: 'BGP Routing Optimization',
    company: 'Superior Connection',
    description: 'Resolved complex BGP instability and firewall mismatches via structured RCA, cutting restoration time by 35%.',
    period: 'Oct 2022 – Sep 2024',
    location: 'Lahore, Pakistan',
    size: 'small'
  },
  {
    id: 4,
    title: 'Multi-Site Network Deployment',
    company: 'UPNET',
    description: 'Architected multi-site network infrastructure from ground up, onboarding 500+ clients with 99.9% access layer uptime.',
    period: 'Apr 2021 – Sep 2022',
    location: 'Okara, Pakistan',
    size: 'medium'
  },
  {
    id: 5,
    title: 'Network Monitoring Stack',
    company: 'Web Concepts',
    description: 'Maintained 99%+ network availability using SolarWinds, PRTG, Cacti, WhatsUp Gold, and PingPlotter.',
    period: 'May 2019 – Apr 2021',
    location: 'Lahore, Pakistan',
    size: 'small'
  },
  {
    id: 6,
    title: 'ISP Network Infrastructure',
    company: 'Dotnet Internet',
    description: 'Engineered full network infrastructure for 5,000+ users across 20+ remote sites with dual-upstream BGP peering.',
    period: 'Nov 2018 – May 2019',
    location: 'Arifwala, Pakistan',
    size: 'large'
  }
]

const BentoProjects = () => {
  return (
    <section id="projects" className="py-8 md:py-12 px-3 md:px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-mono text-xs md:text-sm tracking-wider">// PROJECTS</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 md:mt-2">
            Featured <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group glass rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 hover:border-cyan-400/30 transition-all cursor-pointer relative overflow-hidden ${
                project.size === 'large' ? 'md:col-span-2' : 
                project.size === 'medium' ? 'md:row-span-1' : 'md:row-span-1'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5 md:w-6 md:h-5 text-blue-400" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 mb-3">{project.company}</p>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.period}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BentoProjects