"use client";

import Link from "next/link";
import { 
  ArrowLeft, ChevronRight, User, 
  Box, Pizza, Timer, Shield 
} from "lucide-react";
import { motion } from "framer-motion";

export default function LahirnyaBitcoinDashboard() {
  const materiList = [
    { title: "Misteri Satoshi Nakamoto", desc: "Krisis 2008 dan rilisnya Whitepaper.", icon: User, color: "text-gray-400", href: "/literasi/lahirnya-bitcoin/satoshi-nakamoto" },
    { title: "Genesis Block (2009)", desc: "Blok pertama dan pesan tersembunyi di dalamnya.", icon: Box, color: "text-amber-400", href: "/literasi/lahirnya-bitcoin/genesis-block" },
    { title: "Bitcoin Pizza Day (2010)", desc: "Transaksi fisik pertama bernilai triliunan rupiah.", icon: Pizza, color: "text-orange-400", href: "/literasi/lahirnya-bitcoin/pizza-day" },
    { title: "Konsep Halving", desc: "Rahasia mengapa Bitcoin semakin langka dan mahal.", icon: Timer, color: "text-rose-400", href: "/literasi/lahirnya-bitcoin/halving" },
    { title: "Emas Digital Modern", desc: "Evolusi Bitcoin menjadi aset penyimpan kekayaan.", icon: Shield, color: "text-emerald-400", href: "/literasi/lahirnya-bitcoin/emas-digital" },
  ];

  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Home */}
      <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Beranda
      </Link>

      {/* Header dengan Hero Gambar */}
      <div className="mb-8">
        {/* --- HERO GAMBAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-48 sm:h-56 mb-4 rounded-[24px] overflow-hidden border border-white/5"
        >
          <img 
            src="/images/lahirnya-bitcoin.jpg" // GANTI DENGAN NAMA FILE GAMBAR LAHIRNYA BITCOIN ANDA
            alt="Ilustrasi Lahirnya Bitcoin"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/30 to-transparent"></div>
        </motion.div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold mb-2">Lahirnya Bitcoin</h1>
        <p className="text-sm text-[#94A3B8] leading-relaxed">
          Kisah revolusioner bagaimana sebaris kode komputer berhasil menantang sistem perbankan global dan menciptakan aset digital paling berharga di dunia.
        </p>
      </div>

      {/* List Sub-Materi */}
      <div className="flex flex-col gap-3">
        {materiList.map((materi, index) => (
          <Link key={index} href={materi.href}>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="flex items-center justify-between rounded-[20px] bg-[#112A45]/80 p-4 border border-white/5 transition-all hover:bg-[#1E3A5F]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0A1128]/50 border border-white/5">
                  <materi.icon className={`h-5 w-5 ${materi.color}`} />
                </div>
                <div>
                  <h2 className="text-[15px] font-bold text-white">{materi.title}</h2>
                  <p className="text-[11px] leading-snug text-[#94A3B8] mt-0.5">{materi.desc}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-500" />
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}