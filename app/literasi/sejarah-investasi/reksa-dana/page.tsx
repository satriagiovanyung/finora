"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ReksaDanaPage() {
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
            src="/images/reksa-dana.jpg" // GANTI DENGAN NAMA FILE GAMBAR REKSA DANA ANDA
            alt="Ilustrasi Lahirnya Reksa Dana"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-purple-400 mb-6">Lahirnya Reksa Dana</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Sebelum tahun 1920-an, pasar saham adalah "permainan" bagi orang kaya dan mereka yang memiliki akses langsung ke pialang (broker) di Wall Street. Orang biasa hampir tidak memiliki akses untuk berinvestasi dengan aman.
          </p>
          <p>
            Semua berubah pada tahun 1924 ketika <em>Massachusetts Investors Trust</em> meluncurkan konsep <strong>Reksa Dana</strong> (Mutual Fund) pertama di Amerika Serikat. Ini adalah terobosan besar dalam demokratisasi investasi.
          </p>
          
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-100 my-4">
            <strong>Apa itu Reksa Dana?</strong><br />
            Reksa dana memungkinkan masyarakat untuk "patungan" modal receh, yang kemudian dikumpulkan menjadi dana besar. Dana ini dikelola oleh seorang manajer investasi profesional untuk dibelikan berbagai macam saham dan obligasi.
          </div>
          
          <p>
            Dengan adanya reksa dana, seseorang tidak perlu lagi pusing menganalisis laporan keuangan perusahaan satu per satu atau memiliki uang jutaan dolar untuk memulai. Cukup dengan modal kecil, Anda sudah bisa memiliki portofolio saham yang terdiversifikasi (disebar ke banyak perusahaan).
          </p>
          <p>
            Inovasi ini mengubah paradigma investasi dari kegiatan yang eksklusif bagi kaum elit menjadi kegiatan yang bisa dilakukan oleh siapa saja, mulai dari guru, karyawan kantor, hingga petani. Ini adalah langkah kunci menuju inklusi keuangan modern yang kita rasakan saat ini.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/sejarah-investasi/era-digital">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 p-4 font-bold shadow-lg shadow-purple-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Era Aplikasi Digital</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}