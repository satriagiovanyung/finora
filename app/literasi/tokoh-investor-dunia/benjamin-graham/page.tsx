"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BenjaminGrahamPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back */}
      <Link href="/literasi/tokoh-investor-dunia" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Tokoh Investor
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/benjamin-graham.jpg" // GANTI DENGAN NAMA FILE GAMBAR BENJAMIN GRAHAM ANDA
            alt="Ilustrasi Benjamin Graham"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-indigo-400 mb-6">Benjamin Graham: Bapak Value Investing</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Benjamin Graham (1894–1976) adalah sosok yang meletakkan fondasi ilmiah bagi dunia investasi. Ia sering dijuluki sebagai <strong>"Bapak Value Investing"</strong> dan merupakan mentor dari investor paling sukses di dunia, Warren Buffett.
          </p>
          
          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-100 my-4">
            <strong>Konsep Utama: Margin of Safety</strong><br />
            Graham mengajarkan untuk selalu membeli saham dengan harga yang jauh di bawah nilai intrinsiknya. Selisih inilah yang ia sebut sebagai <em>Margin of Safety</em>—sebuah bantalan pelindung agar investor tidak rugi besar jika terjadi kesalahan estimasi.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Filosofi yang Mengubah Dunia:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Mr. Market:</strong> Ia menggambarkan pasar saham sebagai sosok yang emosional. Kadang Mr. Market sangat optimis dan memberi harga terlalu mahal, kadang sangat pesimis dan memberi harga terlalu murah. Investor cerdas tidak boleh terbawa emosi Mr. Market.</li>
            <li><strong>Investasi vs Spekulasi:</strong> Graham menegaskan bahwa investasi adalah aktivitas yang didasarkan pada analisis mendalam, sementara spekulasi hanya mengandalkan keberuntungan.</li>
            <li><strong>Analisis Fundamental:</strong> Fokuslah pada kesehatan keuangan perusahaan (neraca, laba, dan arus kas), bukan pada naik-turunnya harga di layar monitor.</li>
          </ul>

          <p className="mt-4">
            Buku karyanya, <em>"The Intelligent Investor"</em>, hingga hari ini masih dianggap sebagai "kitab suci" bagi investor yang ingin membangun kekayaan secara konsisten dan masuk akal, bukan melalui jalan pintas yang berbahaya.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia/warren-buffett">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 p-4 font-bold shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Warren Buffett</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}