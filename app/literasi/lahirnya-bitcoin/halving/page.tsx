"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HalvingPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back */}
      <Link href="/literasi/lahirnya-bitcoin" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Lahirnya Bitcoin
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/halving.jpg" // GANTI DENGAN NAMA FILE GAMBAR HALVING ANDA
            alt="Ilustrasi Konsep Halving Bitcoin"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-rose-400 mb-6">Konsep Halving</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Berbeda dengan uang kertas yang bisa dicetak terus-menerus oleh bank sentral (yang menyebabkan inflasi), Bitcoin dirancang dengan jadwal pasokan yang sangat ketat dan tidak bisa diubah oleh siapapun.
          </p>
          <p>
            Dalam kodenya, Satoshi Nakamoto membatasi jumlah maksimal Bitcoin yang akan pernah ada, yaitu hanya <strong>21 juta keping</strong>. Untuk memastikan Bitcoin tidak ditambang terlalu cepat, ia menciptakan sistem yang disebut <strong>Halving</strong>.
          </p>
          
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-100 my-4">
            <strong>Apa itu Halving?</strong><br />
            Setiap 210.000 blok (kurang lebih setiap 4 tahun sekali), hadiah atau <em>reward</em> yang didapatkan oleh para penambang (<em>miner</em>) akan <strong>dipotong menjadi setengahnya</strong> (50%).
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Mengapa Halving Sangat Penting?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Menciptakan Kelangkaan:</strong> Karena pasokan baru yang masuk ke pasar semakin sedikit setiap 4 tahun, Bitcoin menjadi aset yang semakin langka (defolasioner).</li>
            <li><strong>Siklus Kenaikan Harga:</strong> Secara historis, setiap kali terjadi Halving (2012, 2016, 2020, 2024), harga Bitcoin selalu mengalami lonjakan besar (<em>Bull Market</em>) di tahun-tahun setelahnya karena hukum *supply and demand* (pasokan berkurang, sementara permintaan tetap atau naik).</li>
          </ul>

          <p className="mt-4">
            Sistem Halving ini akan terus berlangsung hingga diperkirakan pada tahun 2140, di mana seluruh 21 juta keping Bitcoin selesai ditambang.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Emas Digital */}
      <div className="mt-8">
        <Link href="/literasi/lahirnya-bitcoin/emas-digital">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-rose-600 to-pink-500 p-4 font-bold shadow-lg shadow-rose-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Emas Digital Modern</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}