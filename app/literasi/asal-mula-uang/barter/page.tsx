"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BarterPage() {
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
            src="/images/barter.jpg" // GANTI DENGAN NAMA FILE GAMBAR ANDA
            alt="Ilustrasi Sistem Barter"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}
        
        <h1 className="text-2xl font-bold text-orange-400 mb-6">Sistem Barter</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Sebelum uang ditemukan, bagaimana cara manusia zaman purba mendapatkan barang yang mereka butuhkan? Jawabannya adalah dengan saling bertukar barang, atau yang dikenal dengan <strong>Sistem Barter</strong>.
          </p>
          <p>
            Konsepnya sangat sederhana: Jika Anda adalah seorang petani yang memiliki banyak gandum dan sedang ingin memakan daging, Anda harus mencari seorang pemburu yang memiliki daging dan ingin menukarnya.
          </p>
          
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 my-4">
            <strong>Masalah Utama Barter:</strong> Sistem ini sangat merepotkan karena membutuhkan apa yang disebut <i>"Double Coincidence of Wants"</i> (Kecocokan Ganda).
          </div>
          
          <p>
            Bayangkan jika pemburu yang memiliki daging tersebut ternyata tidak menginginkan gandum Anda, melainkan ia menginginkan sebuah sepatu. Maka transaksi tidak bisa terjadi. 
          </p>
          <p>
            Anda harus berkeliling mencari pembuat sepatu, menukar gandum Anda dengan sepatu, baru kemudian membawa sepatu itu ke si pemburu untuk ditukar dengan daging. Sangat melelahkan, bukan?
          </p>
          <p>
            Selain itu, sangat sulit menentukan nilai tukar yang adil. Berapa karung gandum yang setara dengan satu potong daging sapi liar? Karena kerumitan dan ketidakpraktisan inilah, peradaban manusia mulai mencari solusi alat tukar yang lebih baik.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/asal-mula-uang/komoditas">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 p-4 font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Uang Komoditas</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}