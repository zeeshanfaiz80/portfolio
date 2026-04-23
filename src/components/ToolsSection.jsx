import { motion } from 'framer-motion'

const toolCategories = [
  { category: 'Firewalls', tools: ['FortiGate', 'pfSense', 'OPNsense', 'Cisco ASA', 'Juniper SRX'] },
  { category: 'Routing', tools: ['Juniper MX', 'Cisco Nexus', 'MikroTik CCR', 'Huawei', 'Arista'] },
  { category: 'Virtualization', tools: ['VMware ESXi', 'Proxmox VE', 'Hyper-V', 'KVM', 'Docker'] },
  { category: 'Monitoring', tools: ['SolarWinds', 'PRTG', 'Graylog', 'Nagios', 'Zabbix'] },
  { category: 'Cloud', tools: ['Microsoft Azure', 'AWS', 'Azure AD', 'M365', 'Intune'] },
  { category: 'Linux', tools: ['Ubuntu', 'CentOS', 'Debian', 'RHEL', 'Arch'] }
]

const ToolTag = ({ tool, delay }) => (
  <motion.span
    className="inline-flex items-center px-3 py-1.5 text-sm text-slate-400 bg-slate-800/40 rounded-lg border border-slate-700/30 hover:text-sky-400 hover:border-sky-500/30 hover:bg-slate-800/60 transition-all cursor-default"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.03, y: -2 }}
  >
    {tool}
  </motion.span>
)

const ToolsSection = () => {
  return (
    <section id="tools" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#0a1428]/20 to-[#030308]" />
      
      {/* Grid */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.02) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(56, 189, 248, 0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-sky-400 tracking-[0.3em]">// TOOLS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-white">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto">
            Industry-standard platforms and tools I use daily to build reliable infrastructure.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="glass-panel rounded-xl p-4">
                <h3 className="font-mono text-xs text-sky-400 tracking-wider mb-3">
                  {category.category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <ToolTag 
                      key={tool} 
                      tool={tool} 
                      delay={index * 0.08 + i * 0.03}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-panel rounded-full">
            <motion.div 
              className="w-2 h-2 rounded-full bg-emerald-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-slate-500 whitespace-nowrap">Always exploring new technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ToolsSection