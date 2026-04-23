import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Calendar, Building2, Server, Shield } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Associate IT Support Manager',
    company: 'Topgolf Wien, Greenerb Austria GmbH',
    location: 'Vienna, Austria',
    period: 'Jan 2025 – Mar 2025',
    type: 'enterprise',
    description: 'Led complete network infrastructure overhaul for a major entertainment venue, ensuring 24/7 operations.',
    highlights: [
      'Meraki network: 2 firewalls, 30 switches, managed APs, VLAN, PBR, load balancing',
      'Oracle hospitality ecosystem: POS, payment devices, tablets, KDS administration',
      'Microsoft 365, Intune, Exchange management',
      'Graylog + Nagios observability stack'
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
    description: 'Spearheaded network security for enterprise clients across media, education, healthcare, and aviation.',
    highlights: [
      'FortiGate, pfSense, OPNsense firewall administration',
      'Zero Trust security architecture',
      'BGP instability resolution: 35% faster restoration',
      'Zero critical security breaches'
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
    description: 'Built and maintained ISP network infrastructure serving 500+ clients.',
    highlights: [
      'Juniper core routers + MikroTik CCR deployment',
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
    description: 'Provided Tier 2/3 support for enterprise network infrastructure.',
    highlights: [
      'Cisco Nexus BGP routers monitoring',
      '120 distributed nodes + 50+ servers',
      'SolarWinds, PRTG, Cacti, WhatsUp Gold',
      '99%+ network availability'
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
    description: 'Designed and deployed full-scale ISP network for 5,000+ users.',
    highlights: [
      'Dual-upstream BGP peering with auto-failover',
      'Ubiquiti wireless backhaul + GPON OLT',
      'VMware ESXi cluster + Veeam backup',
      '1 year uninterrupted uptime'
    ],
    metrics: ['5000+ Users', '20+ Sites', '1 Year Uptime']
  }
]

const TypeIcon = ({ type }) => {
  const icons = { enterprise: Building2, isp: Server, security: Shield }
  const Icon = icons[type] || Building2
  return <Icon className="w-3.5 h-3.5" />
}

const ExperienceSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="py-32 md:py-40 relative" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#0a1428]/30 to-[#030308]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-sky-400 tracking-[0.3em]">// EXPERIENCE</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-white">
            Career <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            7+ years of building and securing mission-critical infrastructure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-500/20 to-transparent">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-sky-500/40"
              style={{ height: lineHeight }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8">
                <div className="w-3 h-3 rounded-full bg-sky-500/30 border-2 border-sky-500" />
              </div>

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                <div className="glass-card rounded-xl p-5 group">
                  {/* Meta */}
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/50 text-[10px] font-mono text-slate-500">
                      <TypeIcon type={exp.type} />
                      {exp.type.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-sky-400/60">{exp.period}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-sky-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{exp.company}</p>
                  
                  <div className={`flex items-center gap-2 text-slate-500 text-sm mt-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>

                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Metrics */}
                  <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.metrics.map((metric) => (
                      <span 
                        key={metric} 
                        className="px-2 py-1 text-[10px] font-mono text-sky-400 bg-sky-500/10 rounded"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection