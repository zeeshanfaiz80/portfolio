import { motion } from 'framer-motion'

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
              className="glass rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{edu.school} · {edu.location}</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">{edu.details}</p>
                </div>
                <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300 whitespace-nowrap">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection