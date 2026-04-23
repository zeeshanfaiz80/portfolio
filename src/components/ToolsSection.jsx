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

const ToolTag = ({ tool, delay }) => (
  <motion.span
    className="inline-flex items-center px-3 py-2 text-sm text-zinc-400 bg-zinc-900/50 rounded-lg border border-zinc-800/50 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-zinc-800/80 transition-all cursor-default"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.05, y: -2 }}
  >
    {tool}
  </motion.span>
)

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <motion.div 
        className="glass-panel rounded-2xl p-6 relative overflow-hidden group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
        </div>

        <div className="relative z-10">
          <h3 className="font-mono text-sm text-cyan-400 tracking-wider mb-4">
            {category.category.toUpperCase()}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {category.tools.map((tool, i) => (
              <ToolTag 
                key={tool} 
                tool={tool} 
                delay={index * 0.1 + i * 0.05}
              />
            ))}
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}

const ToolsSection = () => {
  return (
    <section id="tools" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-zinc-900/10 to-[#060608]" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-fade opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em]">// TOOLS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Industry-standard platforms and tools I use daily to build reliable infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolCategories.map((category, index) => (
            <CategoryCard key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-panel rounded-full">
            <motion.div 
              className="w-2 h-2 rounded-full bg-emerald-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-zinc-500">Always exploring new technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ToolsSection