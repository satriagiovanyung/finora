"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Gift,
  GraduationCap,
  Smartphone,
  Users,
  BookOpen,
} from "lucide-react";
import { useRouter } from "next/navigation";

const quickInfo = [
  { icon: GraduationCap, label: "100+ Materi", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: Gift, label: "Gratis", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Smartphone, label: "Mobile", color: "text-amber-400", bg: "bg-amber-400/10" },
  { icon: Users, label: "Komunitas", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: BookOpen, label: "Artikel", color: "text-pink-400", bg: "bg-pink-400/10" },
];

export default function Hero() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      {/* Hero Card Utama */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#112A45] p-6 shadow-2xl shadow-black/30"
      >
        {/* GAMBAR BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-finora.jpg" // GANTI DENGAN NAMA GAMBAR ANDA DI FOLDER public/images/
            alt="Background Finora"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112A45] via-[#112A45]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 via-transparent to-transparent" />
        </div>

        {/* Aksen glow lembut di sudut, menegaskan warna teal brand */}
        <div className="pointer-events-none absolute -right-10 -top-10 z-0 h-40 w-40 rounded-full bg-[#00D4C5]/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex w-fit items-center gap-1.5 rounded-full bg-[#00D4C5]/10 border border-[#00D4C5]/20 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#00D4C5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D4C5] animate-pulse" />
            Belajar • Pahami • Bertumbuh
          </div>

          <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight text-white">
            Mulai Belajar Investasi
            <br />
            <span className="bg-gradient-to-r from-[#00D4C5] to-[#4EE8D8] bg-clip-text text-transparent">
              Bersama FINORA
            </span>
          </h1>

          <p className="max-w-[88%] text-[13px] leading-relaxed text-[#94A3B8]">
            FINORA menghadirkan ratusan materi investasi yang disusun secara sistematis agar proses belajar menjadi lebih mudah, nyaman, dan terarah.
          </p>

          <motion.button
            onClick={() => router.push("/learning")}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="group flex h-[50px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#00D4C5] text-sm font-bold text-[#081626] shadow-lg shadow-[#00D4C5]/25 transition-shadow hover:shadow-[#00D4C5]/40"
          >
            Mulai Belajar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>

      {/* Quick Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-5 rounded-[14px] border border-white/[0.06] bg-[#081626]/50 p-3"
      >
        {quickInfo.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-1.5 py-1 text-center ${
              index !== quickInfo.length - 1 ? "border-r border-white/[0.06]" : ""
            }`}
          >
            <div className={`flex h-7 w-7 items-center justify-center rounded-full ${item.bg}`}>
             {(() => {
  const Icon = item.icon as any;
  return <Icon className={`h-3.5 w-3.5 ${item.color}`} />;
})()}
            </div>
            <span className="text-[9px] font-medium leading-tight text-white">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}