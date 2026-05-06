import { Clock, Star, Home, CheckCircle2, Zap, Shield, Users, MessageCircle } from 'lucide-react'

function VoucherCard({ hours, price, description, popular, msgKey }) {
  const waMsg = {
    '12h': 'Halo%2C%20saya%20mau%20beli%20Voucher%20WiFi%2012%20Jam%20(Rp%203.000).%20Mohon%20bantuannya.',
    '24h': 'Halo%2C%20saya%20mau%20beli%20Voucher%20WiFi%2024%20Jam%20(Rp%205.000).%20Mohon%20bantuannya.',
  }

  return (
    <div className={`relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      popular
        ? 'border-brand-400/60 dark:border-brand-500/50 bg-gradient-to-b from-brand-50 to-white dark:from-brand-900/30 dark:to-[#0d1a2e]/80 shadow-lg shadow-brand-500/15'
        : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d1a2e]/60 hover:shadow-brand-500/5'
    }`}>
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md shadow-brand-500/40">
            <Star size={11} fill="currentColor" /> Paling Populer
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[11px] font-semibold w-fit mb-4">
          <Zap size={11} /> Akses Instan
        </span>

        {/* Icon + duration */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            popular ? 'bg-brand-500 shadow-lg shadow-brand-500/40' : 'bg-gray-100 dark:bg-brand-900/40'
          }`}>
            <Clock size={24} className={popular ? 'text-white' : 'text-brand-500'} />
          </div>
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">Voucher WiFi</p>
            <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">Paket {hours} Jam</h3>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="font-display font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">
            Rp {price}
          </span>
          <span className="text-gray-400 dark:text-gray-500 text-sm ml-1">/ voucher</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">{description}</p>

        {/* Features list */}
        <ul className="space-y-2 mb-6">
          {[
            'Connect langsung, tanpa instalasi',
            'Tidak perlu kontrak bulanan',
            `Valid ${hours} jam penuh`,
          ].map(f => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
              <CheckCircle2 size={14} className="text-accent-500 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/6283861483090?text=${waMsg[msgKey]}`}
          target="_blank"
          rel="noreferrer"
          id={`voucher-btn-${hours}h`}
          className={popular ? 'btn-primary justify-center text-sm' : 'btn-whatsapp justify-center text-sm'}
        >
          <MessageCircle size={16} /> Beli Sekarang
        </a>
      </div>
    </div>
  )
}

function MonthlyCard() {
  return (
    <div className="relative flex flex-col rounded-2xl border border-accent-400/40 dark:border-accent-500/30 bg-gradient-to-br from-emerald-50 via-white to-brand-50 dark:from-[#071a12] dark:via-[#0d1a2e] dark:to-[#071630] shadow-xl shadow-accent-500/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/20">
      {/* Decorative gradient bar */}
      <div className="h-1.5 bg-gradient-to-r from-accent-400 via-accent-500 to-brand-500" />

      {/* Family badge */}
      <div className="absolute top-6 right-5">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/30">
          <Users size={11} /> Pilihan Keluarga
        </span>
      </div>

      <div className="p-6">
        {/* Category badge */}
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold w-fit mb-4">
          <Home size={11} /> Internet Keluarga
        </span>

        <div className="flex items-start gap-4 mb-4">
          {/* Home icon */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/40 flex-shrink-0">
            <Home size={28} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">WiFi Bulanan</p>
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">6 Mbps Unlimited</h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 dark:text-accent-400">
              <Shield size={11} /> Infrastruktur PT
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="font-display font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-brand-500">
            Rp 200.000
          </span>
          <span className="text-gray-400 dark:text-gray-500 text-sm ml-1">/ bulan</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
          Internet rumah idaman. Stabil untuk WFH, sekolah online, dan hiburan seluruh anggota keluarga. Sinyal kuat menjangkau setiap sudut rumah.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          {[
            { icon: Zap, label: 'Tanpa FUP', desc: 'Kecepatan penuh 24/7' },
            { icon: Shield, label: 'Gratis Instalasi*', desc: 'Teknisi profesional' },
            { icon: Home, label: 'Sinyal Luas', desc: 'Jangkau seluruh rumah' },
            { icon: CheckCircle2, label: 'Kualitas PT', desc: 'Standar perusahaan' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-2 p-3 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-100 dark:border-white/5">
              <Icon size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{label}</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/6283861483090?text=Halo%2C%20saya%20ingin%20mendaftar%20PSB%20WiFi%20Bulanan%206%20Mbps%20(Rp%20200.000%2Fbulan).%20Mohon%20info%20selanjutnya."
          target="_blank"
          rel="noreferrer"
          id="monthly-btn"
          className="btn-whatsapp w-full justify-center text-sm"
          style={{ background: 'linear-gradient(to right, #059669, #10b981)' }}
        >
          <MessageCircle size={16} /> Daftar Paket Bulanan
        </a>

        <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-3">
          *Gratis instalasi untuk area tertentu. Hubungi CS untuk detail.
        </p>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-brand-950/20 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-700/50 mb-4">
            Pilihan Paket
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Harga Jelas,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
              Kualitas Nyata
            </span>
          </h2>
          <p className="section-sub max-w-lg mx-auto">
            Dari voucher hemat harian hingga paket bulanan keluarga — semua dengan harga transparan tanpa kejutan di akhir bulan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <VoucherCard
            hours="12"
            price="3.000"
            description="Solusi hemat untuk tugas sekolah atau mabar singkat. Langsung connect tanpa ribet kabel."
            popular={false}
            msgKey="12h"
          />
          <VoucherCard
            hours="24"
            price="5.000"
            description="Akses penuh seharian. Bebas streaming film dan sosmed sepuasnya tanpa takut kuota habis."
            popular={true}
            msgKey="24h"
          />
          <MonthlyCard />
        </div>
      </div>
    </section>
  )
}
