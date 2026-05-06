import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Requirements from './components/Requirements'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('rtdigital-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('rtdigital-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('rtdigital-theme', 'light')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-[#f0f7ff] dark:bg-[#080f1e] text-gray-900 dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Requirements />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
