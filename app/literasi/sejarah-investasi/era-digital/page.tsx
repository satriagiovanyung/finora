"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EraDigitalPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Dashboard */}
      <Link href="/literasi/sejarah-investasi" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Sejarah Investasi
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/era-aplikasi.jpg" // GANTI DENGAN NAMA FILE GAMBAR ERA APLIKASI ANDA
            alt="Ilustrasi Era Aplikasi Investasi"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-rose-400 mb-6">Era Aplikasi (Abad 21)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Jika di masa lalu investasi membutuhkan proses panjang—seperti menelepon pialang, mengisi formulir fisik yang tebal, dan menunggu berhari-hari—saat ini semuanya berubah berkat internet dan perangkat *mobile*.
          </p>
          <p>
            Kita sedang berada di puncak <strong>demokratisasi investasi</strong>. Dengan munculnya aplikasi investasi di *smartphone*, batasan-batasan geografis dan biaya modal yang tinggi telah runtuh.
          </p>
          
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-100 my-4">
            <strong>Investasi di Ujung Jari:</strong><br />
            Hari ini, Anda bisa membeli saham global, reksa dana, hingga aset digital seperti kripto hanya dalam hitungan detik. Biaya transaksi (komisi) yang dulunya mahal, kini menjadi sangat murah atau bahkan gratis.
          </div>
          
          <p>
            Teknologi telah memungkinkan data pasar yang dulunya hanya dimiliki oleh lembaga keuangan besar, kini bisa diakses oleh siapa saja secara *real-time*. Analisis data, berita ekonomi, dan grafik harga ada di dalam genggaman kita 24/7.
          </p>
          <p>
            Era ini menuntut kita untuk lebih cerdas dan memiliki literasi yang baik. Kemudahan akses yang luar biasa ini adalah pedang bermata dua: sangat membantu bagi mereka yang paham, namun bisa berbahaya bagi mereka yang asal ikut-ikutan tanpa mempelajari ilmunya.
          </p>
        </div>
      </motion.div>

      {/* Tombol Selesai Membaca */}
      <div className="mt-8">
        <Link href="/literasi/sejarah-investasi">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-rose-600 to-pink-500 p-4 font-bold shadow-lg shadow-rose-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Selesai Membaca</span>
            <CheckCircle className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}