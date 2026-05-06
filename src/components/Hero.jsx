import { ArrowRight, RadioTower, Zap, Shield } from 'lucide-react'
import logo from '../assets/logo.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-500/10 dark:bg-brand-500/5 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-brand-400/10 dark:bg-brand-400/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-400/10 dark:bg-accent-400/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232aa5ff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zm39 0h1v40h-1zM0 0v1h40V0zm0 39v1h40v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-7 animate-slide-up">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-700/50">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            Melayani Wilayah Sungai Tabuk & Sekitarnya
          </span>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white">
            Internet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
              Cepat &amp; Stabil
            </span>{' '}
            untuk Rumah Anda
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
            PT. HOME NETWORK SOLUTION menghadirkan koneksi internet berkualitas standar perusahaan langsung ke rumah Anda. 
            Tanpa FUP, tanpa biaya tersembunyi — hanya kecepatan nyata yang bisa dinikmati seluruh keluarga.
          </p>

          {/* Stat badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Zap, label: 'Tanpa FUP', color: 'text-amber-500' },
              { icon: Shield, label: 'Infrastruktur PT', color: 'text-brand-500' },
              { icon: RadioTower, label: 'Sinyal Luas', color: 'text-accent-500' },
            ].map(({ icon: Icon, label, color }) => (
              <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                <Icon size={15} className={color} />
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="btn-primary text-sm"
            >
              Lihat Paket <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/6283861483090?text=Halo%2C%20saya%20ingin%20info%20layanan%20PT.%20HOME%20NETWORK%20SOLUTION%20di%20Sungai%20Tabuk."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp text-sm"
            >
              Hubungi CS
            </a>
          </div>
        </div>

        {/* Right: Visual Card */}
        <div className="hidden lg:flex justify-center animate-float">
          <div className="relative w-80 h-80">
            {/* Main circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-700/10 dark:from-brand-500/10 dark:to-brand-700/5 border border-brand-300/30 dark:border-brand-500/20 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-brand-500/20 overflow-hidden border-4 border-white dark:border-brand-900/50 p-3">
                <img src={logo} alt="PT. HOME NETWORK SOLUTION" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            {/* Orbit dots */}
            {[
              { top: '5%', left: '50%', label: '6 Mbps', color: 'bg-brand-500' },
              { top: '50%', right: '-5%', label: 'Unlimited', color: 'bg-accent-500' },
              { bottom: '10%', left: '15%', label: 'Rp 200rb/bln', color: 'bg-amber-500' },
            ].map(({ top, left, right, bottom, label, color }) => (
              <div
                key={label}
                className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#0d1a2e] border border-gray-200 dark:border-brand-800/50 shadow-lg text-xs font-semibold text-gray-700 dark:text-gray-200"
                style={{ top, left, right, bottom }}
              >
                <span className={`w-2 h-2 rounded-full ${color}`} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white/5 dark:fill-brand-900/10">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
