import { motion } from 'framer-motion'
import { 
  Shield, Network, Server, Eye, Cloud, Terminal,
  Lock, Wifi, Database, Code, Cpu, Gauge
} from 'lucide-react'

const capabilityClusters = [
  {
    title: 'Network Security',
    icon: Shield,
    description: 'Fortress-grade protection',
    capabilities: [
      'FortiGate Firewall Administration',
      'pfSense & OPNsense',
      'IPS/IDS Configuration',
      'SSL Inspection',
      'Zero Trust Architecture',
      'VPN & Tunnel Management'
    ]
  },
  {
    title: 'Routing & Switching',
    icon: Network,
    description: 'Intelligent traffic flow',
    capabilities: [
      'BGP Multi-homing',
      'OSPF & RIP',
      'MPLS & VPLS',
      'VLAN & VXLAN',
      'Quality of Service',
      'Load Balancing'
    ]
  },
  {
    title: 'Virtualization',
    icon: Server,
    description: 'Efficient resource allocation',
    capabilities: [
      'VMware ESXi/vSphere',
      'Proxmox VE',
      'KVM & Docker',
      'vCenter Management',
      'VM Provisioning',
      'Cluster & HA Setup'
    ]
  },
  {
    title: 'Infrastructure Monitoring',
    icon: Eye,
    description: 'Real-time visibility',
    capabilities: [
      'SolarWinds NPM',
      'PRTG Network Monitor',
      'Graylog SIEM',
      'Nagios & Icinga',
      'Zabbix',
      'Custom Dashboards'
    ]
  },
  {
    title: 'Cloud & Identity',
    icon: Cloud,
    description: 'Modern workspace',
    capabilities: [
      'Microsoft Azure',
      'AWS',
      'Azure AD / Entra ID',
      'Microsoft 365',
      'Intune MDM',
      'Exchange Online'
    ]
  },
  {
    title: 'Linux & Automation',
    icon: Terminal,
    description: 'Scripted efficiency',
    capabilities: [
      'Ubuntu/Debian/CentOS',
      'Bash & PowerShell',
      'Apache & Nginx',
      'DNS & DHCP Server',
      'Infrastructure as Code',
      'Python Automation'
    ]
  }
]

const CapabilityCard = ({ cluster, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div 
        className="glass-card rounded-xl p-5 h-full group relative overflow-hidden"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/3 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-sky-500/40 to-transparent" />
          <div className="absolute top-0 right-0 h-px w-6 bg-gradient-to-l from-sky-500/40 to-transparent" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <cluster.icon className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold">{cluster.title}</h3>
              <p className="text-xs text-slate-500">{cluster.description}</p>
            </div>
          </div>
          
          <ul className="space-y-1.5">
            {cluster.capabilities.map((cap, i) => (
              <motion.li 
                key={i}
                className="text-sm text-slate-400 flex items-center gap-2 group-hover:text-slate-300 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.03 }}
              >
                <span className="w-1 h-1 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
                {cap}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-600/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-sky-400 tracking-[0.3em]">// CAPABILITIES</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-white">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Comprehensive skills built over 7+ years of hands-on infrastructure experience.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilityClusters.map((cluster, index) => (
            <CapabilityCard key={cluster.title} cluster={cluster} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection