import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

export default function Header({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Keunggulan', href: '#features' },
    { label: 'Paket', href: '#pricing' },
    { label: 'Pendaftaran', href: '#requirements' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? 'bg-white dark:bg-[#050b14] shadow-xl shadow-brand-500/20 border-b border-gray-100 dark:border-brand-500/30'
          : scrolled
          ? 'bg-white/90 dark:bg-[#080f1e]/90 backdrop-blur-md shadow-lg shadow-brand-500/10 border-b border-gray-100 dark:border-brand-900/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-white overflow-hidden flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-110 transition-transform flex-shrink-0 p-1">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-[13px] sm:text-[15px] tracking-tight text-brand-600 dark:text-brand-400 uppercase">PT. HOME NETWORK SOLUTION</span>
            <span className="block text-[10px] text-gray-400 dark:text-gray-500 font-medium -mt-0.5">Layanan Wifi untuk RT-Digital</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            id="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-brand-900/60 border border-gray-300 dark:border-brand-700/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Toggle dark mode"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                darkMode
                  ? 'translate-x-7 bg-brand-500 shadow-brand-500/40'
                  : 'translate-x-0 bg-white shadow-gray-300/60'
              }`}
            >
              {darkMode
                ? <Moon size={13} className="text-white" />
                : <Sun size={13} className="text-amber-500" />
              }
            </span>
          </button>

          {/* CTA Button */}
          <a
            href="https://wa.me/6283861483090?text=Halo%2C%20saya%20ingin%20daftar%20layanan%20PT.%20HOME%20NETWORK%20SOLUTION."
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex btn-whatsapp text-xs px-4 py-2"
          >
            Daftar Sekarang
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-brand-900/40"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#050b14] border-t border-gray-100 dark:border-brand-500/30 px-4 py-4 flex flex-col gap-2 shadow-2xl">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6283861483090?text=Halo%2C%20saya%20ingin%20daftar%20layanan%20PT.%20HOME%20NETWORK%20SOLUTION."
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp mt-2 justify-center"
          >
            Daftar Sekarang
          </a>
        </div>
      )}
    </header>
  )
}
