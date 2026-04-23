import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar, ChevronRight, ArrowUpRight, Building2, Users, Server, Shield } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Associate IT Support Manager',
    company: 'Topgolf Wien, Greenerb Austria GmbH',
    location: 'Vienna, Austria',
    period: 'Jan 2025 – Mar 2025',
    type: 'enterprise',
    description: 'Led complete network infrastructure overhaul for a major entertainment venue, ensuring 24/7 operations across multiple floors.',
    highlights: [
      'Deployed Meraki network: 2 firewalls, 30 switches, managed APs, VLAN, PBR, load balancing',
      'Oracle hospitality ecosystem: POS, payment devices, tablets, KDS administration',
      'SAVI server: lighting, audio, multi-display screens, IPTV with dual satellite',
      'Microsoft 365, Intune, Exchange management',
      'Graylog + Nagios observability stack implementation'
    ],
    metrics: ['4 Floors', '99.9% Uptime', 'Zero Incidents']
  },
  {
    id: 2,
    title: 'Senior Network Engineer',
    company: 'Superior Connection Pvt. Ltd.',
    location: 'Lahore, Pakistan',
    period: 'Oct 2022 – Sep 2024',
    type: 'enterprise',
    description: 'Spearheaded network security for enterprise clients across media, education, healthcare, and aviation sectors.',
    highlights: [
      'FortiGate, pfSense, OPNsense firewall administration with IPS/IDS',
      'Zero Trust security model architecture',
      'NAS and virtual server infrastructure management',
      'BGP instability resolution: 35% faster restoration',
      'Zero critical security breaches achieved'
    ],
    metrics: ['5 Sectors', '0 Breaches', '24/7 SLA']
  },
  {
    id: 3,
    title: 'Network Engineer',
    company: 'UPNET Pvt. Ltd.',
    location: 'Okara, Pakistan',
    period: 'Apr 2021 – Sep 2022',
    type: 'isp',
    description: 'Built and maintained ISP network infrastructure serving 500+ clients with carrier-grade reliability.',
    highlights: [
      'Juniper core routers + MikroTik CCR deployment',
      'QoS, NAT, DPI, 3-tier Cisco switching',
      'HP Proxmox VE + VMware ESXi cluster (4 nodes)',
      'Led 6 NOC + 12 field engineers',
      '99.9% access layer uptime'
    ],
    metrics: ['500+ Clients', '99.9% Uptime', '18 Engineers']
  },
  {
    id: 4,
    title: 'Network Support Engineer',
    company: 'Web Concepts Pvt. Ltd. (Connectel)',
    location: 'Lahore, Pakistan',
    period: 'May 2019 – Apr 2021',
    type: 'isp',
    description: 'Provided Tier 2/3 support for enterprise network infrastructure across Pakistan.',
    highlights: [
      'Cisco Nexus BGP routers monitoring',
      '120 distributed nodes + 50+ servers',
      'SolarWinds, PRTG, Cacti, WhatsUp Gold',
      'QoS, NAT, DNAT, inter-VLAN routing, ACLs',
      'Weekly health reports delivery'
    ],
    metrics: ['120 Nodes', '50+ Servers', '99%+ Availability']
  },
  {
    id: 5,
    title: 'Network Administrator',
    company: 'Dotnet Internet Services',
    location: 'Arifwala, Pakistan',
    period: 'Nov 2018 – May 2019',
    type: 'isp',
    description: 'Designed and deployed full-scale ISP network for 5,000+ users across 20+ remote sites.',
    highlights: [
      'Dual-upstream BGP peering with auto-failover',
      'APNIC IP registry + ROA creation (4 /23 prefixes)',
      'Ubiquiti wireless: AirFiber, PowerBeam, LiteBeam',
      'GPON OLT for last-mile connectivity',
      'VMware ESXi cluster + Veeam backup'
    ],
    metrics: ['5000+ Users', '20+ Sites', '1 Year Uptime']
  }
]

const TypeIcon = ({ type }) => {
  const icons = {
    enterprise: Building2,
    isp: Server,
    security: Shield
  }
  const Icon = icons[type] || Building2
  return <Icon className="w-4 h-4" />
}

const ExperienceSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="py-32 relative" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em]">// EXPERIENCE</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Career <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            A decade of building and securing mission-critical infrastructure
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-cyan-500/40"
              style={{ height: lineHeight }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8">
                <div className="w-3 h-3 rounded-full bg-cyan-500/20 border-2 border-cyan-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-500/10 animate-ping" />
              </div>

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div 
                  className="glass-card rounded-2xl p-6 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-800/50 text-[10px] font-mono text-zinc-500">
                      <TypeIcon type={exp.type} />
                      {exp.type.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-cyan-400/60">{exp.period}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">{exp.company}</p>
                  
                  <div className={`flex items-center gap-2 text-zinc-500 text-sm mt-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>

                  <p className="text-zinc-400 mt-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Metrics */}
                  <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.metrics.map((metric) => (
                      <span 
                        key={metric} 
                        className="px-2 py-1 text-[10px] font-mono text-cyan-400 bg-cyan-500/10 rounded"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className={`mt-4 pt-4 border-t border-zinc-800/30 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className={`flex items-center gap-2 text-xs text-zinc-500 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {index % 2 === 0 ? (
                          <>
                            <span>{h}</span>
                            <ChevronRight className="w-3 h-3 text-cyan-500/50 rotate-180" />
                          </>
                        ) : (
                          <>
                            <ChevronRight className="w-3 h-3 text-cyan-500/50" />
                            <span>{h}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection