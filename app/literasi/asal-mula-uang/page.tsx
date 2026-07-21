"use client";

import Link from "next/link";
import { 
  ArrowLeft, ChevronRight, Handshake, Gem, 
  CircleDollarSign, ScrollText, Banknote, Smartphone 
} from "lucide-react";
import { motion } from "framer-motion";

export default function AsalMulaUangDashboard() {
  const materiList = [
    { title: "Sistem Barter", desc: "Cara manusia bertransaksi ribuan tahun lalu.", icon: Handshake, color: "text-orange-400", href: "/literasi/asal-mula-uang/barter" },
    { title: "Uang Komoditas", desc: "Kerang, garam, dan bongkahan emas.", icon: Gem, color: "text-purple-400", href: "/literasi/asal-mula-uang/komoditas" },
    { title: "Koin Pertama (600 SM)", desc: "Inovasi Kerajaan Lydia mencetak koin resmi.", icon: CircleDollarSign, color: "text-yellow-400", href: "/literasi/asal-mula-uang/koin-pertama" },
    { title: "Uang Kertas (Abad 11)", desc: "Solusi pedagang Tiongkok dari beratnya koin.", icon: ScrollText, color: "text-rose-400", href: "/literasi/asal-mula-uang/uang-kertas" },
    { title: "Uang Fiat (1971)", desc: "Lepasnya uang dari cadangan standar emas.", icon: Banknote, color: "text-emerald-400", href: "/literasi/asal-mula-uang/uang-fiat" },
    { title: "Era Digital & Kripto", desc: "Uang sebagai angka di layar ponsel.", icon: Smartphone, color: "text-blue-400", href: "/literasi/asal-mula-uang/era-digital" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <main className="min-h-screen bg-[#0A1128] p-4 font-sans text-white">
      
      {/* Tombol Back ke Home */}
      <Link href="/" className="mb-6 mt-2 flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
        <ArrowLeft size={16} /> Kembali ke Beranda
      </Link>

      {/* Header & Hero Image */}
      <div className="mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-6 h-48 w-full overflow-hidden rounded-xl border border-white/5 shadow-lg sm:h-56"
        >
          <img 
            src="/images/dashboard-uang.jpg" 
            alt="Ilustrasi Sejarah Uang"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="mb-2 text-2xl font-bold">Asal Mula Uang</h1>
          <p className="leading-relaxed text-[#94A3B8] text-sm">
            Pilih tahapan sejarah di bawah ini untuk memahami evolusi paling penting dalam peradaban manusia.
          </p>
        </motion.div>
      </div>

      {/* List Sub-Materi dengan Jarak Bawah (pb-6) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-3 pb-6"
      >
        {materiList.map((materi, index) => (
          <Link key={index} href={materi.href}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 0.98, backgroundColor: "#1E3A5F" }}
              whileTap={{ scale: 0.95 }}
              className="group flex cursor-pointer items-center justify-between rounded-[20px] border border-white/5 bg-[#112A45]/80 p-4 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/5 bg-[#0A1128]/50 transition-colors group-hover:border-white/10">
                  <materi.icon className={`h-5 w-5 ${materi.color}`} />
                </div>
                <div>
                  <h2 className="text-[15px] font-bold text-white transition-colors group-hover:text-[#00D4C5]">{materi.title}</h2>
                  <p className="mt-0.5 text-[11px] leading-snug text-[#94A3B8]">{materi.desc}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-[#00D4C5]" />
            </motion.div>
          </Link>
        ))}
      </motion.div>
      
    </main>
  );
}