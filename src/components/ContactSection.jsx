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
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-cyan-500/20 to-transparent" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-cyan-500/20 to-transparent" />
          
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-cyan-500/20 rounded-tl" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-cyan-500/20 rounded-tr" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-cyan-500/20 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-cyan-500/20 rounded-br" />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center"
          >
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </motion.div>

          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em]">// CONTACT</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-10 leading-relaxed">
            I'm always open to discussing new opportunities, infrastructure challenges, 
            or technical conversations. Let's build something stable together.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
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
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-5 h-5 mx-auto text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                <div className="text-xs text-zinc-600 mt-2">{item.label}</div>
                <div className="text-sm text-zinc-400 group-hover:text-zinc-200 mt-1 truncate px-1">
                  {item.value}
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="mailto:zeeshanfaiz80@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition-all"
            >
              <Send className="w-4 h-4" />
              Send Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/zeeshan-faiz-637103165/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 glass-panel rounded-xl text-zinc-300 hover:text-white transition-colors"
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