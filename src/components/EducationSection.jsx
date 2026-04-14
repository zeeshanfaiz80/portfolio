import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'MSc Information and Communication Engineering',
    school: 'TU Wien',
    location: 'Vienna, Austria',
    period: 'Oct 2024 – Present',
    details: 'Currently pursuing advanced studies in information and communication engineering'
  },
  {
    id: 2,
    degree: 'BS Telecommunication and Networking',
    school: 'COMSATS University',
    location: 'Pakistan',
    period: '2014 – 2018',
    details: 'Bachelor\'s degree in telecommunications and networking'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 }
  })
}

const EducationSection = () => {
  return (
    <section id="education" className="py-8 md:py-12 px-3 md:px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider">// EDUCATION</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 md:mt-2">
            Academic <span className="glow-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Background</span>
          </h2>
        </motion.div>

        <div className="grid gap-3 md:gap-4">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group glass rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 hover:border-cyan-400/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 relative">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5 md:w-6 md:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.school}</span>
                      </div>
                      <span className="text-gray-600">·</span>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 mt-2">{edu.details}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300 whitespace-nowrap bg-cyan-500/10 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3 h-3" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection