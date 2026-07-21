"use client";

import Link from "next/link";
import { 
  ArrowLeft, ChevronRight, Flower2, 
  TrendingDown, Map, Home, Activity 
} from "lucide-react";
import { motion } from "framer-motion";

export default function KrisisFinansialDashboard() {
  const materiList = [
    { title: "Tulip Mania (1637)", desc: "Gelembung ekonomi pertama di dunia akibat bunga.", icon: Flower2, color: "text-rose-400", href: "/literasi/krisis-finansial-dunia/tulip-mania" },
    { title: "The Great Depression (1929)", desc: "Kehancuran terbesar bursa saham Wall Street.", icon: TrendingDown, color: "text-red-500", href: "/literasi/krisis-finansial-dunia/great-depression" },
    { title: "Krisis Moneter Asia (1997)", desc: "Badai ekonomi yang meruntuhkan rupiah.", icon: Map, color: "text-amber-400", href: "/literasi/krisis-finansial-dunia/krismon-asia" },
    { title: "Krisis Finansial Global (2008)", desc: "Tragedi kredit perumahan macet di AS.", icon: Home, color: "text-blue-400", href: "/literasi/krisis-finansial-dunia/krisis-2008" },
    { title: "Krisis Pandemi (2020)", desc: "Lumpuhnya ekonomi dunia akibat lockdown.", icon: Activity, color: "text-emerald-400", href: "/literasi/krisis-finansial-dunia/pandemi-2020" },
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
            src="/images/krisis-finansial-dunia.jpg" // GANTI DENGAN NAMA FILE GAMBAR KRISIS FINANSIAL DUNIA ANDA
            alt="Ilustrasi Krisis Finansial Dunia"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/30 to-transparent"></div>
        </motion.div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold mb-2">Krisis Finansial Dunia</h1>
        <p className="text-sm text-[#94A3B8] leading-relaxed">
          Sejarah selalu berulang. Pelajari berbagai krisis ekonomi terbesar di dunia agar kita lebih bijak dan waspada dalam mengelola keuangan.
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