"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function KoinPertamaPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Dashboard */}
      <Link href="/literasi/asal-mula-uang" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Asal Mula Uang
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/koin-pertama.jpg" // GANTI DENGAN NAMA FILE GAMBAR KOIN ANDA
            alt="Ilustrasi Koin Pertama Lydia"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}
        
        <h1 className="text-2xl font-bold text-yellow-500 mb-6">Koin Pertama (600 SM)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Membawa timbangan setiap kali pergi ke pasar untuk menimbang emas murni sangatlah tidak praktis. Oleh karena itu, manusia menciptakan inovasi besar berikutnya: <strong>Koin Resmi</strong>.
          </p>
          <p>
            Sekitar tahun <strong>600 Sebelum Masehi</strong>, Kerajaan Lydia (kini wilayah Turki modern) yang dipimpin oleh Raja Alyattes mencetak koin resmi pertama di dunia. Koin ini terbuat dari <i>Electrum</i>, sebuah campuran alami antara emas dan perak.
          </p>
          
          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-100 my-4">
            <strong>Inovasi Terbesar Koin Lydia:</strong><br />
            Raja Lydia memberikan "Cap Stempel" (biasanya bergambar kepala singa) pada setiap koin. Cap ini adalah garansi resmi dari kerajaan bahwa berat dan kemurnian logam tersebut sudah standar.
          </div>
          
          <p>
            Berkat stempel kerajaan tersebut, masyarakat tidak perlu lagi repot menimbang dan menguji emas setiap kali berdagang. Mereka hanya perlu <strong>menghitung jumlah koinnya</strong>. Ini adalah revolusi besar yang mempercepat laju perdagangan dunia kuno.
          </p>
          <p>
            Namun, seiring berkembangnya perdagangan antar negara, para saudagar mulai membeli barang dalam jumlah yang sangat masif. Tentu saja, membawa ribuan koin logam di atas kapal dagang atau kereta kuda menjadi masalah baru karena sangat berat dan memakan banyak tempat.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/asal-mula-uang/uang-kertas">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500 p-4 font-bold shadow-lg shadow-yellow-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Uang Kertas</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}