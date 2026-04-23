import { useState } from 'react'
import './index.css'
import Preloader from './components/Preloader'
import HeroSection from './components/AntigravityHero'
import ExperienceSection from './components/ExperienceSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ToolsSection from './components/ToolsSection'
import ContactSection from './components/ContactSection'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-[#030308] text-slate-50 antialiased">
      <Preloader onComplete={() => setLoading(false)} />
      
      <main className="relative">
        <HeroSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <ToolsSection />
        <ContactSection />
        
        <footer className="border-t border-slate-800/30 py-8 px-6 mt-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-slate-600 tracking-wider">
              ZEESHAN FAIZ — IT INFRASTRUCTURE ENGINEER
            </div>
            <div className="font-mono text-xs text-slate-600">
              VIENNA, AUSTRIA
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App