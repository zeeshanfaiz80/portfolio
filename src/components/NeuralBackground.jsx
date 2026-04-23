import { motion } from 'framer-motion'

const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div 
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 via-blue-800/10 to-transparent rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-20 w-[700px] h-[700px] bg-gradient-to-tl from-indigo-700/15 via-blue-900/10 to-transparent rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-[100px]"
        animate={{ 
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500/8 to-transparent rounded-full blur-[80px]"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 40, 0],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

export default NeuralBackground
