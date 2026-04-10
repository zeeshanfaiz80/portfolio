import { motion } from 'framer-motion'

const ContactUplink = () => {
  const contacts = [
    { label: 'Email', value: 'zeeshanfaiz80@gmail.com', href: 'mailto:zeeshanfaiz80@gmail.com' },
    { label: 'Phone', value: '+43 677 62050993', href: 'tel:+4367762050993' },
    { label: 'LinkedIn', value: 'linkedin.com/in/zeeshan-faiz-637103165', href: 'https://www.linkedin.com/in/zeeshan-faiz-637103165/' },
    { label: 'Location', value: 'Vienna, Austria' }
  ]

  return (
    <section id="contact" className="py-8 md:py-12 px-3 md:px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="glass rounded-2xl md:rounded-3xl p-4 md:p-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {contacts.map((item) => (
                <div key={item.label} className="glass rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="mt-1 md:mt-2 block text-xs md:text-sm text-white hover:text-cyan-300 break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 md:mt-2 text-xs md:text-sm text-white">{item.value}</p>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-cyan-400/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                <a href="mailto:zeeshanfaiz80@gmail.com" className="flex items-center gap-2 glass rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm text-white hover:text-cyan-300 transition-colors">
                  <span>✉️</span>
                  <span className="font-mono">Email Me</span>
                </a>
                <a href="https://www.linkedin.com/in/zeeshan-faiz-637103165/" target="_blank" rel="noreferrer" className="flex items-center gap-2 glass rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm text-white hover:text-cyan-300 transition-colors">
                  <span>in</span>
                  <span className="font-mono">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUplink
