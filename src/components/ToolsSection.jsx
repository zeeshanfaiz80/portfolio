import { motion } from 'framer-motion'

const toolCategories = [
  {
    category: 'Firewalls',
    tools: ['FortiGate', 'pfSense', 'OPNsense', 'Cisco ASA', 'Juniper SRX']
  },
  {
    category: 'Routing',
    tools: ['Juniper MX', 'Cisco Nexus', 'MikroTik CCR', 'Huawei', 'Arista']
  },
  {
    category: 'Virtualization',
    tools: ['VMware ESXi', 'Proxmox VE', 'Hyper-V', 'KVM', 'Docker']
  },
  {
    category: 'Monitoring',
    tools: ['SolarWinds', 'PRTG', 'Graylog', 'Nagios', 'Zabbix']
  },
  {
    category: 'Cloud',
    tools: ['Microsoft Azure', 'AWS', 'Azure AD', 'M365', 'Intune']
  },
  {
    category: 'Linux',
    tools: ['Ubuntu', 'CentOS', 'Debian', 'RHEL', 'Arch']
  }
]

const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-zinc-900/20 to-[#0a0a0c]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest">// TOOLS</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Technology <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Industry-standard tools and platforms I work with daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="glass-panel rounded-xl p-5">
                  <h3 className="font-mono text-xs text-cyan-400 tracking-widest mb-4">
                    {category.category.toUpperCase()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, i) => (
                      <motion.span
                        key={tool}
                        className="px-3 py-1.5 text-sm text-zinc-400 bg-zinc-800/50 rounded-lg hover:text-white hover:bg-zinc-700/50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 glass-panel rounded-full">
            <span className="text-zinc-500 text-sm">Always learning new technologies</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ToolsSection