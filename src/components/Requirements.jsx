import { IdCard, Camera, MapPin, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: IdCard,
    color: 'text-brand-500',
    bg: 'bg-brand-50 dark:bg-brand-900/30',
    border: 'border-brand-100 dark:border-brand-800/40',
    title: 'Foto KTP',
    desc: 'Siapkan foto KTP yang jelas dan terbaca. Pastikan semua informasi terlihat tanpa blur atau bayangan.',
    tips: ['Foto di tempat terang', 'Seluruh kartu terlihat', 'Format JPG / PNG'],
  },
  {
    step: '02',
    icon: Camera,
    color: 'text-accent-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-100 dark:border-emerald-800/40',
    title: 'Foto Depan Rumah',
    desc: 'Kirimkan foto tampak depan rumah agar teknisi dapat mengidentifikasi lokasi pemasangan dengan tepat.',
    tips: ['Tampak depan penuh', 'Nomor rumah terlihat', 'Saat siang hari'],
  },
  {
    step: '03',
    icon: MapPin,
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-100 dark:border-rose-800/40',
    title: 'Link Google Maps',
    desc: 'Bagikan pin lokasi Google Maps rumah Anda agar tim kami dapat merencanakan rute kabel dengan akurat.',
    tips: ['Buka Google Maps', 'Tahan pin di rumah Anda', 'Salin & kirim link-nya'],
  },
]

export default function Requirements() {
  return (
    <section id="requirements" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-700/40 mb-4">
            Cara Pendaftaran
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            3 Langkah Mudah{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
              Mulai Berlangganan
            </span>
          </h2>
          <p className="section-sub max-w-lg mx-auto">
            Proses pendaftaran kami dirancang sesederhana mungkin. Siapkan 3 dokumen berikut, lalu hubungi CS kami via WhatsApp.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {steps.map(({ step, icon: Icon, color, bg, border, title, desc, tips }) => (
            <div
              key={step}
              className={`relative p-6 rounded-2xl border ${border} bg-white dark:bg-[#0d1a2e]/60 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-2">
                <span className="font-display font-extrabold text-6xl text-gray-100 dark:text-white/5 select-none">{step}</span>
              </div>

              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 relative`}>
                <Icon size={24} className={color} />
              </div>

              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{desc}</p>

              {/* Tips list */}
              <ul className="space-y-1.5">
                {tips.map(tip => (
                  <li key={tip} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <CheckCircle2 size={13} className={color} />
                    {tip}
                  </li>
                ))}
              </ul>

              {/* Connector arrow (desktop only) */}
              {step !== '03' && (
                <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white dark:bg-[#0d1a2e] border border-gray-200 dark:border-brand-800/50 items-center justify-center shadow-sm">
                  <ArrowRight size={13} className="text-gray-400 dark:text-gray-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 dark:from-brand-700 dark:to-brand-950 p-8 sm:p-10 text-center shadow-2xl shadow-brand-500/30">
          {/* Decorative */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative">
            <p className="text-brand-200 text-sm font-medium mb-2">Sudah siap dengan dokumennya?</p>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
              Hubungi CS Kami Sekarang
            </h3>
            <p className="text-brand-200 text-sm mb-8 max-w-md mx-auto">
              Kirim ketiga dokumen ke WhatsApp kami dan tim instalasi akan menghubungi Anda dalam 1×24 jam.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6283861483090?text=Halo%2C%20saya%20ingin%20mendaftar%20PSB%20WiFi%20Bulanan%20PT.%20HOME%20NETWORK%20SOLUTION.%20Berikut%20dokumen%20saya%3A"
                target="_blank"
                rel="noreferrer"
                id="register-cta-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-700 font-bold text-sm hover:bg-brand-50 active:scale-95 transition-all shadow-lg shadow-brand-900/30"
              >
                <MessageCircle size={18} />
                Daftar via WhatsApp
              </a>
              <span className="self-center text-brand-300 text-sm font-mono">0838-6148-3090</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
