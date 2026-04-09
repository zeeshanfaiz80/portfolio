import { motion } from 'framer-motion'

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
              className="glass rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white">{role.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-0.5">{role.company} · {role.location}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-cyan-300 mt-1 md:mt-0">{role.period}</span>
              </div>
              <ul className="mt-3 md:mt-4 list-disc list-inside space-y-1 md:space-y-2 text-xs md:text-sm text-gray-300 leading-5 md:leading-6">
                {role.highlights.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
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
