import { RadioTower, MapPin, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-brand-900/40 bg-white/50 dark:bg-[#060d1c]/50 backdrop-blur-sm py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md shadow-brand-500/30">
                <RadioTower size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-base text-brand-600 dark:text-brand-400">RT-Digital</span>
                <span className="block text-[10px] text-gray-400 font-medium">Layanan Wifi untuk RT-Digital</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Menghadirkan internet cepat, stabil, dan terjangkau untuk warga Sungai Tabuk dan sekitarnya.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { label: 'Beranda', href: '#hero' },
                { label: 'Keunggulan Kami', href: '#features' },
                { label: 'Paket Internet', href: '#pricing' },
                { label: 'Cara Daftar', href: '#requirements' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin size={15} className="text-brand-500 mt-0.5 flex-shrink-0" />
                Sungai Tabuk, Kab. Banjar, Kalimantan Selatan
              </li>
              <li>
                <a
                  href="tel:+6283861483090"
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <Phone size={15} className="text-brand-500" />
                  0838-6148-3090
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6283861483090"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-accent-600 dark:text-accent-400 hover:text-accent-500 transition-colors font-medium"
                >
                  <MessageCircle size={15} />
                  Chat via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 dark:border-brand-900/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-gray-400 dark:text-gray-600">
          <p>© {new Date().getFullYear()} RT-Digital. Melayani Sungai Tabuk & Sekitarnya.</p>
          <p>Dibuat dengan ❤️ untuk komunitas lokal</p>
        </div>
      </div>
    </footer>
  )
}
