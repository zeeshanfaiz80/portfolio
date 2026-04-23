import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Associate IT Support Manager',
    company: 'Topgolf Wien, Greenerb Austria GmbH',
    location: 'Vienna, Austria',
    period: 'Jan 2025 – Mar 2025',
    description: 'Deployed and stabilized Meraki network infrastructure across four floors with 2 firewalls, 30 switches, managed APs, VLAN segmentation, PBR, load balancing, and CCTV systems.',
    highlights: [
      'Meraki network deployment with full infrastructure stack',
      'Oracle hospitality ecosystem administration (POS, KDS, payment devices)',
      'SAVI server management for lighting, audio, multi-display, IPTV',
      'Microsoft 365, Intune, Exchange administration',
      'Graylog and Nagios observability stack implementation'
    ]
  },
  {
    id: 2,
    title: 'Senior Network Engineer',
    company: 'Superior Connection Pvt. Ltd.',
    location: 'Lahore, Pakistan',
    period: 'Oct 2022 – Sep 2024',
    description: 'Led enterprise network security for media, universities, medical, aviation, and corporate clients with 24/7 high availability requirements.',
    highlights: [
      'FortiGate, pfSense, OPNsense firewall security with IPS/IDS',
      'Zero Trust security model implementation',
      'NAS and virtual server infrastructure management',
      'BGP instability resolution reducing restoration time by 35%'
    ]
  },
  {
    id: 3,
    title: 'Network Engineer',
    company: 'UPNET Pvt. Ltd.',
    location: 'Okara, Pakistan',
    period: 'Apr 2021 – Sep 2022',
    description: 'Architected multi-site network infrastructure from ground up, onboarding 500+ clients with 99.9% uptime.',
    highlights: [
      'Juniper core routers and MikroTik CCR deployment',
      'QoS, NAT, DPI, 3-tier Cisco switching layer',
      'HP Proxmox VE and VMware ESXi cluster management',
      'Team leadership of 6 NOC and 12 field engineers'
    ]
  },
  {
    id: 4,
    title: 'Network Support Engineer',
    company: 'Web Concepts Pvt. Ltd. (Connectel)',
    location: 'Lahore, Pakistan',
    period: 'May 2019 – Apr 2021',
    description: 'Monitored enterprise network infrastructure including Cisco Nexus BGP routers and 120 distributed nodes.',
    highlights: [
      'SolarWinds, PRTG, Cacti, WhatsUp Gold monitoring',
      'QoS, NAT, DNAT, inter-VLAN routing, ACL configuration',
      'End-to-end client segment provisioning'
    ]
  },
  {
    id: 5,
    title: 'Network Administrator',
    company: 'Dotnet Internet Services',
    location: 'Arifwala, Pakistan',
    period: 'Nov 2018 – May 2019',
    description: 'Engineered full network infrastructure for 5,000+ users across 20+ remote sites.',
    highlights: [
      'Dual-upstream BGP peering with auto-failover',
      'APNIC IP registry management, ROA creation',
      'Ubiquiti wireless backhaul and GPON OLT deployment',
      'VMware ESXi cluster with Veeam backup'
    ]
  }
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest">// EXPERIENCE</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Career <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div 
                  className="glass-card rounded-xl p-6 ml-12 md:ml-0"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-2 md:hidden">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-zinc-100">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">{exp.company}</p>
                  <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.highlights.slice(0, 3).map((h, i) => (
                      <span key={i} className="text-xs text-zinc-500 flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 text-cyan-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="absolute left-0 md:left-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 border-2 border-cyan-500" />
              </div>

              <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                <span className="font-mono text-xs text-cyan-400/60">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection