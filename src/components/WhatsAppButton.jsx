import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6283861483090?text=Halo%2C%20saya%20ingin%20info%20layanan%20RT-Digital."
      target="_blank"
      rel="noreferrer"
      id="floating-wa-btn"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-6 right-5 z-50 group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-accent-500 hover:bg-accent-600 text-white shadow-2xl shadow-accent-500/40 hover:shadow-accent-500/60 active:scale-95 transition-all duration-300"
    >
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="text-sm font-bold overflow-hidden max-w-0 group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap">
        Chat CS Kami
      </span>
    </a>
  )
}
