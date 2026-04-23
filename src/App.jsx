import { useState } from 'react'
import './index.css'
import Preloader from './components/Preloader'
import AntigravityHero from './components/AntigravityHero'
import ExperienceSection from './components/ExperienceSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ToolsSection from './components/ToolsSection'
import ContactSection from './components/ContactSection'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-50 antialiased">
      <Preloader onComplete={() => setLoading(false)} />
      
      <main className="relative">
        <AntigravityHero />
        <ExperienceSection />
        <CapabilitiesSection />
        <ToolsSection />
        <ContactSection />
        
        <footer className="border-t border-zinc-800/30 py-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-zinc-600 tracking-widest">
              ZEESHAN FAIZ — IT INFRASTRUCTURE ENGINEER
            </div>
            <div className="font-mono text-xs text-zinc-600">
              VIENNA, AUSTRIA
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App