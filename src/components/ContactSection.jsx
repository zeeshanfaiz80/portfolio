import { motion } from 'framer-motion'
import { Mail, Phone, Link2, MapPin, Send, ArrowRight } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'zeeshanfaiz80@gmail.com', href: 'mailto:zeeshanfaiz80@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+43 677 62050993', href: 'tel:+4367762050993' },
    { icon: Link2, label: 'LinkedIn', value: 'zeeshan-faiz-637103165', href: 'https://www.linkedin.com/in/zeeshan-faiz-637103165/' },
    { icon: MapPin, label: 'Location', value: 'Vienna, Austria' }
  ]

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center"
          >
            <Send className="w-7 h-7 text-cyan-400" />
          </motion.div>

          <span className="font-mono text-xs text-cyan-400 tracking-widest">// CONTACT</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Interested in working together? I'm always open to discussing new opportunities, 
            infrastructure challenges, or technical conversations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                className="group p-4 glass-panel rounded-xl text-center hover:border-cyan-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <item.icon className="w-5 h-5 mx-auto text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                <div className="text-xs text-zinc-500 mt-2">{item.label}</div>
                <div className="text-sm text-zinc-300 group-hover:text-white mt-1 truncate">
                  {item.value}
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="mailto:zeeshanfaiz80@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all group"
            >
              Send Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/zeeshan-faiz-637103165/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass-panel rounded-lg text-zinc-300 hover:text-white transition-colors"
            >
              <Link2 className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection