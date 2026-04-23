import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let interval
    const duration = 1200
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
          setTimeout(onComplete, 600)
        }, 200)
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#030308] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              className="w-14 h-14 mx-auto mb-6 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 border border-sky-500/20 rounded-xl" />
              <motion.div 
                className="absolute inset-1 border border-sky-500/40 rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 }}
              />
              <motion.div 
                className="absolute inset-2 bg-sky-500/10 rounded flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-display text-lg font-bold text-sky-400">ZF</span>
              </motion.div>
            </motion.div>

            {/* Progress */}
            <div className="w-40 mx-auto mb-3">
              <div className="h-[1px] bg-slate-800">
                <motion.div
                  className="h-full bg-sky-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            <motion.div 
              className="font-mono text-xs text-slate-600 tracking-widest"
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