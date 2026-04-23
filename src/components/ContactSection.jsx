import { motion } from 'framer-motion'
import { Mail, Phone, Link2, MapPin, Send, ArrowRight, Sparkles } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'zeeshanfaiz80@gmail.com', href: 'mailto:zeeshanfaiz80@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+43 677 62050993', href: 'tel:+4367762050993' },
  { icon: Link2, label: 'LinkedIn', value: 'zeeshan-faiz-637103165', href: 'https://www.linkedin.com/in/zeeshan-faiz-637103165/' },
  { icon: MapPin, label: 'Location', value: 'Vienna, Austria' }
]

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          className="glass-card rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Border Accents */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
          
          {/* Corner Accents */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-sky-500/20 rounded-tl" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-sky-500/20 rounded-tr" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-sky-500/20 rounded-bl" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-sky-500/20 rounded-br" />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 mx-auto mb-5 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center"
          >
            <Sparkles className="w-7 h-7 text-sky-400" />
          </motion.div>

          <span className="font-mono text-xs text-sky-400 tracking-[0.3em]">// CONTACT</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4 text-white">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mb-10">
            Open to discussing new opportunities, infrastructure challenges, or technical conversations.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                className="group p-3 glass-panel rounded-lg text-center hover:border-sky-500/30 transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <item.icon className="w-4 h-4 mx-auto text-slate-500 group-hover:text-sky-400 transition-colors" />
                <div className="text-[10px] text-slate-600 mt-2">{item.label}</div>
                <div className="text-xs text-slate-400 group-hover:text-slate-200 mt-0.5 truncate px-1">
                  {item.value}
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="mailto:zeeshanfaiz80@gmail.com"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 text-black font-semibold rounded-lg hover:bg-sky-400 transition-all"
            >
              <Send className="w-4 h-4" />
              Send Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/zeeshan-faiz-637103165/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 glass-panel rounded-lg text-slate-300 hover:text-white transition-colors"
            >
              <Link2 className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection