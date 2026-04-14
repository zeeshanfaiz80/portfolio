import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experience = [
  {
    id: 1,
    title: 'Associate IT Support Manager',
    company: 'Topgolf Wien, Greenerb Austria GmbH',
    location: 'Vienna, Austria',
    period: 'Jan 2025 – Mar 2025',
    highlights: [
      'Deployed and stabilized Meraki network with 2 firewalls, 30 switches, managed APs, VLAN segmentation, PBR, load balancing, and CCTV across four floors.',
      'Maintained Oracle hospitality ecosystem for POS, payment devices, tablets, KDS with zero service interruptions during peak operations.',
      'Administered SAVI server for lighting, audio, multi-display screens, and IPTV connected to two satellite providers.',
      'Administered Microsoft 365, Intune, Exchange, JIRA, and ServiceNow; deployed Graylog alongside Nagios for full-stack observability.'
    ]
  },
  {
    id: 2,
    title: 'Senior Network Engineer',
    company: 'Superior Connection Pvt. Ltd.',
    location: 'Lahore, Pakistan',
    period: 'Oct 2022 – Sep 2024',
    highlights: [
      'Secured multi-entity enterprise networks for media, universities, medical institutions, aviation, and corporate clients with 24/7 high availability.',
      'Enforced FortiGate, pfSense, and OPNsense firewall policies with IPS/IDS, SSL inspection, and Zero Trust controls; achieved zero critical breaches.',
      'Managed NAS and virtual server infrastructure, ensuring availability of business-critical services and structured data protection.',
      'Resolved complex BGP instability and firewall mismatches via structured RCA, cutting restoration time by 35%.'
    ]
  },
  {
    id: 3,
    title: 'Network Engineer',
    company: 'UPNET Pvt. Ltd.',
    location: 'Okara, Pakistan',
    period: 'Apr 2021 – Sep 2022',
    highlights: [
      'Architected multi-site network infrastructure from the ground up, onboarding 500+ clients with 99.9% access layer uptime.',
      'Deployed Juniper core routers and MikroTik CCR devices with QoS, NAT, DPI, and a 3-tier Cisco distribution switching layer.',
      'Built a 4-node HP Gen11 cluster on Proxmox VE and VMware ESXi hosting monitoring and business application VMs.',
      'Led 6 NOC and 12 field engineers while managing multiple upstream providers and reporting to Network Manager.'
    ]
  },
  {
    id: 4,
    title: 'Network Support Engineer',
    company: 'Web Concepts Pvt. Ltd. (Connectel)',
    location: 'Lahore, Pakistan',
    period: 'May 2019 – Apr 2021',
    highlights: [
      'Monitored Cisco Nexus BGP routers, MikroTik CCR bandwidth managers, 120 distributed nodes, and 50+ servers including CDN and VoIP platforms.',
      'Configured QoS, NAT, DNAT, inter-VLAN routing, ACLs, and DPI; provisioned end-to-end client segments and delivered weekly health reports.',
      'Maintained 99%+ network availability using SolarWinds, PRTG, Cacti, WhatsUp Gold, and PingPlotter.'
    ]
  },
  {
    id: 5,
    title: 'Network Administrator',
    company: 'Dotnet Internet Services',
    location: 'Arifwala, Pakistan',
    period: 'Nov 2018 – May 2019',
    highlights: [
      'Engineered full network infrastructure for 5,000+ users across 20+ remote sites, delivering one year of uninterrupted uptime.',
      'Configured dual-upstream BGP peering with auto-failover, managed APNIC IP registry, created ROAs for four /23 prefixes, and administered RADIUS authentication.',
      'Built redundant fiber and Ubiquiti wireless backhaul with AirFiber, PowerBeam, LiteBeam, and managed GPON OLT for last-mile connectivity.',
      'Deployed a 4-node VMware ESXi cluster with Veeam backup and monitoring stack for proactive fault detection.'
    ]
  }
]

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
}

const ProjectNodes = () => {
  return (
    <section id="experience" className="py-8 md:py-12 px-3 md:px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider">// EXPERIENCE</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 md:mt-2">
            Professional <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Career</span>
          </h2>
        </motion.div>

        <div className="grid gap-3 md:gap-4">
          {experience.map((role, index) => (
            <motion.div
              key={role.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group glass rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 hover:border-cyan-400/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between relative">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{role.title}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>{role.company}</span>
                    </div>
                    <span className="text-gray-600">·</span>
                    <div className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs uppercase tracking-[0.25em] text-cyan-300 mt-1 md:mt-0">
                  <Calendar className="w-3 h-3" />
                  <span>{role.period}</span>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-xs md:text-sm text-gray-300 leading-5 md:leading-6">
                {role.highlights.map((bullet, i) => (
                  <motion.li 
                    key={bullet}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="inline-block w-1.5 h-1.5 mt-1.5 rounded-full bg-cyan-500/50 flex-shrink-0" />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectNodes
