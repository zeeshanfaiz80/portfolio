import { motion } from 'framer-motion'
import { 
  Shield, Network, Server, Cloud, Wifi, Lock, 
  Activity, Database, Code, Radio, Cpu, HardDrive,
  Layers, RefreshCw, Eye, Terminal
} from 'lucide-react'

const capabilityClusters = [
  {
    title: 'Network Security',
    icon: Shield,
    color: 'cyan',
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
    color: 'blue',
    capabilities: [
      'BGP (Multi-homing)',
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
    color: 'indigo',
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
    title: 'Monitoring',
    icon: Eye,
    color: 'emerald',
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
    title: 'Cloud & Automation',
    icon: Cloud,
    color: 'sky',
    capabilities: [
      'Microsoft Azure',
      'AWS (Basic)',
      'Azure AD / Entra ID',
      'Microsoft 365',
      'PowerShell Scripting',
      'Python Automation'
    ]
  },
  {
    title: 'Linux & Systems',
    icon: Terminal,
    color: 'orange',
    capabilities: [
      'Ubuntu/Debian/CentOS',
      'Bash Scripting',
      'Apache & Nginx',
      'DNS & DHCP Server',
      'Samba & NFS',
      'System Hardening'
    ]
  }
]

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest">// CAPABILITIES</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Comprehensive skill set spanning network infrastructure, security, 
            virtualization, and cloud platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityClusters.map((cluster, index) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div 
                className="glass-card rounded-xl p-6 h-full group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-${cluster.color}-500/10 border border-${cluster.color}-500/20 flex items-center justify-center`}>
                    <cluster.icon className={`w-5 h-5 text-${cluster.color}-400`} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{cluster.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {cluster.capabilities.map((cap, i) => (
                    <li key={i} className="text-sm text-zinc-500 flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full bg-${cluster.color}-500/50`} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection