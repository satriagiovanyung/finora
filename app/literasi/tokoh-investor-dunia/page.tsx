"use client";

import Link from "next/link";
import { 
  ArrowLeft, ChevronRight, GraduationCap, 
  TrendingUp, Lightbulb, Briefcase, BookOpen,
  PieChart, Globe, Search, Calculator
} from "lucide-react";
import { motion } from "framer-motion";

export default function TokohInvestorDashboard() {
  const materiList = [
    { title: "Benjamin Graham", desc: "Bapak 'Value Investing' & Guru Warren Buffett.", icon: GraduationCap, color: "text-blue-400", href: "/literasi/tokoh-investor-dunia/benjamin-graham" },
    { title: "Warren Buffett", desc: "Oracle of Omaha, investor tersukses sepanjang masa.", icon: TrendingUp, color: "text-emerald-400", href: "/literasi/tokoh-investor-dunia/warren-buffett" },
    { title: "Charlie Munger", desc: "Tangan kanan Buffett yang rasional & bijak.", icon: BookOpen, color: "text-purple-400", href: "/literasi/tokoh-investor-dunia/charlie-munger" },
    { title: "Peter Lynch", desc: "Prinsip legendaris: 'Beli apa yang kamu pahami'.", icon: Lightbulb, color: "text-amber-400", href: "/literasi/tokoh-investor-dunia/peter-lynch" },
    { title: "Ray Dalio", desc: "Pendiri hedge fund terbesar & ahli siklus ekonomi.", icon: Briefcase, color: "text-rose-400", href: "/literasi/tokoh-investor-dunia/ray-dalio" },
    { title: "John C. Bogle", desc: "Pencetus reksa dana indeks & pendiri Vanguard.", icon: PieChart, color: "text-cyan-400", href: "/literasi/tokoh-investor-dunia/john-bogle" },
    { title: "George Soros", desc: "'The Man Who Broke the Bank of England.'", icon: Globe, color: "text-orange-400", href: "/literasi/tokoh-investor-dunia/george-soros" },
    { title: "Philip Fisher", desc: "Perintis analisis kualitatif & growth investing.", icon: Search, color: "text-teal-400", href: "/literasi/tokoh-investor-dunia/philip-fisher" },
    { title: "Joel Greenblatt", desc: "Pencipta 'Magic Formula' investasi kuantitatif.", icon: Calculator, color: "text-indigo-400", href: "/literasi/tokoh-investor-dunia/joel-greenblatt" },
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
            src="/images/tokoh-investor-dunia.jpg" // GANTI DENGAN NAMA FILE GAMBAR TOKOH INVESTOR DUNIA ANDA
            alt="Ilustrasi Tokoh Investor Dunia"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/30 to-transparent"></div>
        </motion.div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold mb-2">Tokoh Investor Dunia</h1>
        <p className="text-sm text-[#94A3B8] leading-relaxed">
          Belajar langsung dari pola pikir dan strategi para legenda finansial yang telah membuktikan kesuksesan mereka di pasar modal.
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