import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let interval
    const duration = 1500
    const steps = 100
    const stepTime = duration / steps
    
    let currentStep = 0
    
    interval = setInterval(() => {
      currentStep++
      const progress = Math.min((currentStep / steps) * 100, 100)
      setProgress(progress)
      
      if (currentStep >= steps) {
        clearInterval(interval)
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onComplete, 800)
        }, 300)
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#060608] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5 }
          }}
        >
          <div className="text-center">
            {/* Animated logo */}
            <motion.div
              className="w-16 h-16 mx-auto mb-8 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl" />
              <motion.div 
                className="absolute inset-0 border-2 border-cyan-500 rounded-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div 
                className="absolute inset-2 bg-cyan-500/10 rounded-xl flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="font-display text-xl font-bold text-cyan-400">ZF</span>
              </motion.div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 mx-auto mb-4">
              <div className="h-[1px] bg-zinc-800">
                <motion.div
                  className="h-full bg-cyan-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Progress text */}
            <motion.div 
              className="font-mono text-xs text-zinc-600 tracking-widest"
              key={Math.floor(progress)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.floor(progress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader