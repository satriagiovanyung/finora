"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Krisis2008Page() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Dashboard */}
      <Link href="/literasi/krisis-finansial-dunia" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Menu Krisis
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/krisis-2008.jpg" // GANTI DENGAN NAMA FILE GAMBAR KRISIS 2008 ANDA
            alt="Ilustrasi Krisis Finansial Global 2008"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-blue-400 mb-6">Krisis Finansial Global (2008)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Sering disebut sebagai <em>The Great Recession</em>, krisis ini berawal dari pasar perumahan di Amerika Serikat yang mengalami gelembung (bubble) akibat praktik pemberian kredit yang sangat ceroboh.
          </p>
          <p>
            Bank-bank di AS memberikan pinjaman KPR kepada orang yang sebenarnya tidak mampu membayar (disebut <em>Subprime Mortgage</em>). Kredit-kredit berisiko tinggi ini kemudian dibungkus menjadi produk investasi yang dianggap "aman" oleh lembaga pemeringkat kredit, lalu dijual ke investor di seluruh dunia.
          </p>
          
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-100 my-4">
            <strong>Kehancuran Berantai:</strong><br />
            Ketika para peminjam mulai gagal bayar secara massal, nilai produk investasi tersebut hancur menjadi tidak berharga. Bank raksasa seperti <strong>Lehman Brothers</strong> bangkrut, dan kepanikan menjalar ke seluruh sistem keuangan global karena semua bank saling terhubung.
          </div>
          
          <p>
            Krisis ini adalah contoh nyata betapa berbahayanya ketika keserakahan (greed) dan produk keuangan yang terlalu rumit (dan tidak transparan) dibiarkan tanpa pengawasan yang cukup. Dampaknya terasa hingga bertahun-tahun, menyebabkan jutaan orang kehilangan pekerjaan dan rumah mereka di berbagai belahan dunia.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/krisis-finansial-dunia/pandemi-2020">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 p-4 font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Krisis Pandemi 2020</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}