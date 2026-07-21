"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Pandemi2020Page() {
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
            src="/images/pandemi-2020.jpg" // GANTI DENGAN NAMA FILE GAMBAR PANDEMI 2020 ANDA
            alt="Ilustrasi Krisis Pandemi 2020"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-emerald-400 mb-6">Krisis Pandemi (2020)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Berbeda dengan krisis-krisis sebelumnya yang disebabkan oleh masalah sistem keuangan, krisis tahun 2020 dipicu oleh faktor eksternal yang tak terduga: <strong>Pandemi COVID-19</strong>.
          </p>
          <p>
            Dalam hitungan bulan, ekonomi dunia lumpuh. Kebijakan *lockdown* dan pembatasan sosial secara global menghentikan rantai pasokan, mematikan sektor pariwisata, dan memaksa banyak bisnis untuk tutup secara instan.
          </p>
          
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 my-4">
            <strong>Dunia yang Berubah:</strong><br />
            Krisis ini menjadi akselerator digitalisasi. Perusahaan yang tidak mampu beradaptasi ke model bisnis daring (online) banyak yang gugur, sementara mereka yang mampu beralih ke teknologi justru tumbuh pesat.
          </div>
          
          <p>
            Pemerintah di seluruh dunia merespons krisis ini dengan stimulus besar-besaran untuk menjaga daya beli masyarakat. Meski sempat terjadi kepanikan di pasar saham pada awal Maret 2020, ekonomi dunia menunjukkan resiliensi (ketahanan) yang unik dengan *rebound* yang cukup cepat berkat bantuan teknologi dan stimulus fiskal.
          </p>
          <p>
            Pelajaran dari pandemi 2020 adalah pentingnya memiliki <strong>Dana Darurat</strong> bagi individu, serta diversifikasi bisnis bagi perusahaan. Di dunia yang tidak pasti, kemampuan untuk beradaptasi dengan cepat adalah aset investasi yang paling berharga.
          </p>
        </div>
      </motion.div>

      {/* Tombol Selesai Membaca */}
      <div className="mt-8">
        <Link href="/literasi/krisis-finansial-dunia">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 p-4 font-bold shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Selesai Membaca</span>
            <CheckCircle className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}