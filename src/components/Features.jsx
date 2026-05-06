import { Building2, BadgeCheck, CalendarClock, Wifi, Zap, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Building2,
    color: 'text-brand-500',
    bgLight: 'bg-brand-50',
    bgDark: 'dark:bg-brand-900/30',
    border: 'border-brand-100 dark:border-brand-800/40',
    title: 'Infrastruktur Profesional',
    desc: 'Jaringan dibangun dan dikelola oleh teknisi berpengalaman dari perusahaan telekomunikasi. Kabel berkualitas, ODC terstruktur, ODP terpasang rapi — bukan asal colok.',
    tag: 'Standar Perusahaan',
  },
  {
    icon: Zap,
    color: 'text-amber-500',
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-900/20',
    border: 'border-amber-100 dark:border-amber-800/40',
    title: 'Harga Flat, Tanpa FUP',
    desc: 'Bayar sekali, nikmati sebulan penuh tanpa pengurangan kecepatan. Tidak ada batas pemakaian tersembunyi — Netflix, YouTube, dan game online lancar sampai akhir bulan.',
    tag: 'Bebas Batas',
  },
  {
    icon: CalendarClock,
    color: 'text-accent-500',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-900/20',
    border: 'border-emerald-100 dark:border-emerald-800/40',
    title: 'Penanganan Terjadwal',
    desc: 'Laporan gangguan direspons dengan jadwal yang jelas dan transparan. Anda tidak dibiarkan menunggu tanpa kepastian — setiap keluhan tercatat dan ditindaklanjuti.',
    tag: 'Respons Cepat',
  },
  {
    icon: Wifi,
    color: 'text-purple-500',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-900/20',
    border: 'border-purple-100 dark:border-purple-800/40',
    title: 'Jangkauan Luas',
    desc: 'Sinyal kuat yang menjangkau seluruh sudut rumah Anda. Didesain khusus untuk topografi wilayah Sungai Tabuk dan sekitarnya agar coverage optimal.',
    tag: 'Area Luas',
  },
  {
    icon: BadgeCheck,
    color: 'text-rose-500',
    bgLight: 'bg-rose-50',
    bgDark: 'dark:bg-rose-900/20',
    border: 'border-rose-100 dark:border-rose-800/40',
    title: 'Koneksi Terpercaya',
    desc: 'Uptime tinggi dengan sistem backup yang memastikan internet Anda tetap menyala. Lebih dari sekadar ISP — kami mitra digital komunitas Anda.',
    tag: 'Uptime Tinggi',
  },
  {
    icon: HeartHandshake,
    color: 'text-pink-500',
    bgLight: 'bg-pink-50',
    bgDark: 'dark:bg-pink-900/20',
    border: 'border-pink-100 dark:border-pink-800/40',
    title: 'Layanan Berbasis Komunitas',
    desc: 'Kami tumbuh bersama warga Sungai Tabuk. Pendapatan dikelola secara lokal untuk terus meningkatkan infrastruktur dan kualitas layanan di lingkungan Anda.',
    tag: 'Lokal & Peduli',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-700/50 mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Bukan Sekadar Sinyal —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
              Kami Hadirkan Pengalaman
            </span>
          </h2>
          <p className="section-sub max-w-xl mx-auto">
            PT. HOME NETWORK SOLUTION berdiri di atas fondasi profesionalisme, kejujuran harga, dan kepedulian terhadap komunitas. Inilah yang membedakan kami.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, color, bgLight, bgDark, border, title, desc, tag }) => (
            <div
              key={title}
              className={`group p-6 rounded-2xl border bg-white dark:bg-[#0d1a2e]/60 ${border} hover:shadow-xl hover:shadow-brand-500/5 dark:hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl ${bgLight} ${bgDark} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon size={22} className={color} />
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">{tag}</span>

              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
