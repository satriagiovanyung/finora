"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PizzaDayPage() {
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
            src="/images/pizza-day.jpg" // GANTI DENGAN NAMA FILE GAMBAR PIZZA DAY ANDA
            alt="Ilustrasi Bitcoin Pizza Day 2010"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-orange-400 mb-6">Bitcoin Pizza Day (2010)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Di awal kemunculannya, Bitcoin tidak memiliki nilai tukar yang pasti terhadap mata uang fisik seperti Dolar atau Rupiah. Ia hanya ditambang dan dikirim antar para penggemar kriptografi sebagai eksperimen.
          </p>
          <p>
            Hingga akhirnya, sebuah peristiwa bersejarah terjadi pada <strong>22 Mei 2010</strong>.
          </p>
          
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-100 my-4">
            <strong>Transaksi Fisik Pertama:</strong><br />
            Seorang *programmer* bernama Laszlo Hanyecz menulis di sebuah forum internet, menawarkan <strong>10.000 Bitcoin</strong> bagi siapa saja yang mau membelikannya dua loyang pizza. Seorang pengguna lain menerima tawaran itu dan memesankan dua loyang Papa John's Pizza senilai sekitar $41 (Rp600 ribuan) untuk dikirim ke rumah Laszlo.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Mengapa Ini Sangat Penting?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Pembuktian Nilai:</strong> Itulah hari pertama di mana Bitcoin terbukti bisa digunakan sebagai alat tukar untuk membeli barang di dunia nyata. Sejak saat itu, tanggal 22 Mei selalu dirayakan oleh komunitas kripto di seluruh dunia sebagai <em>Bitcoin Pizza Day</em>.</li>
            <li><strong>Pizza Termahal di Dunia:</strong> Seiring meroketnya harga Bitcoin, 10.000 BTC yang dulu ditukar dengan dua loyang pizza tersebut kini bernilai triliunan rupiah! </li>
          </ul>

          <p className="mt-4">
            Meskipun Laszlo sering ditanya apakah ia menyesal, ia selalu menjawab tidak. Baginya, ia merasa bangga bisa menjadi bagian dari sejarah yang membuktikan bahwa sistem uang internet ciptaan Satoshi Nakamoto benar-benar bisa berfungsi.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Halving */}
      <div className="mt-8">
        <Link href="/literasi/lahirnya-bitcoin/halving">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 p-4 font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Konsep Halving</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}