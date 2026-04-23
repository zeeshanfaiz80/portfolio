import { motion } from 'framer-motion'
import { 
  Shield, Network, Server, Cloud, Wifi, Lock, 
  Activity, Database, Code, Radio, Cpu, HardDrive,
  Layers, RefreshCw, Eye, Terminal, Gauge, WifiOff
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
      'SSL Inspection & Decryption',
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
      'Quality of Service (QoS)',
      'Load Balancing (HAProxy, F5)'
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <motion.div 
        className="glass-card rounded-2xl p-6 h-full group relative overflow-hidden"
        whileHover={{ 
          y: -12,
          rotateX: 2,
          rotateY: -2
        }}
        transition={{ duration: 0.4 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
          <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-cyan-500/50 to-transparent" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <cluster.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">{cluster.title}</h3>
              <p className="text-xs text-zinc-500">{cluster.description}</p>
            </div>
          </div>
          
          <ul className="space-y-2">
            {cluster.capabilities.map((cap, i) => (
              <motion.li 
                key={i}
                className="text-sm text-zinc-400 flex items-center gap-2 group-hover:text-zinc-300 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                <span className="w-1 h-1 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                {cap}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Bottom line accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </motion.div>
    </motion.div>
  )
}

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/2 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em]">// CAPABILITIES</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
            Comprehensive skill set spanning network infrastructure, security architecture, 
            virtualization, and cloud platforms — built over 7+ years of hands-on experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityClusters.map((cluster, index) => (
            <CapabilityCard key={cluster.title} cluster={cluster} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection