import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Link2, Send, Globe } from 'lucide-react'

const ContactUplink = () => {
  const contacts = [
    { label: 'Email', value: 'zeeshanfaiz80@gmail.com', href: 'mailto:zeeshanfaiz80@gmail.com', icon: Mail },
    { label: 'Phone', value: '+43 677 62050993', href: 'tel:+4367762050993', icon: Phone },
    { label: 'LinkedIn', value: 'linkedin.com/in/zeeshan-faiz-637103165', href: 'https://www.linkedin.com/in/zeeshan-faiz-637103165/', icon: Link2 },
    { label: 'Location', value: 'Vienna, Austria', icon: MapPin }
  ]

  return (
    <section id="contact" className="py-8 md:py-12 px-3 md:px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div 
              className="text-center mb-4 md:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider">// CONTACT</span>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-1 md:mt-2 mb-2 md:mb-3">
                Reach Out <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Directly</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                Feel free to connect for collaboration, job opportunities, or just to chat about network infrastructure.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {contacts.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    custom={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group glass rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10 hover:border-cyan-400/30 transition-all"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-xs md:text-sm text-white hover:text-cyan-300 break-all block transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs md:text-sm text-white">{item.value}</p>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div 
              className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-cyan-400/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <motion.a 
                  href="mailto:zeeshanfaiz80@gmail.com" 
                  className="group flex items-center gap-2 glass rounded-xl px-4 md:px-5 py-2.5 text-sm text-white hover:text-cyan-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span className="font-mono">Send Email</span>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/zeeshan-faiz-637103165/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center gap-2 glass rounded-xl px-4 md:px-5 py-2.5 text-sm text-white hover:text-cyan-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link2 className="w-4 h-4" />
                  <span className="font-mono">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUplink
