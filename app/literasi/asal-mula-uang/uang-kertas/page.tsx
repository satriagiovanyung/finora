"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function UangKertasPage() {
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
            src="/images/uang-kertas.jpg" // GANTI DENGAN NAMA FILE GAMBAR UANG KERTAS ANDA
            alt="Ilustrasi Uang Kertas Kuno"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}
        
        <h1 className="text-2xl font-bold text-rose-400 mb-6">Uang Kertas (Abad ke-11)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Meskipun koin logam sangat berguna, mengangkut ribuan koin untuk transaksi skala besar sangatlah berat, memakan tempat, dan rawan dirampok. Solusi dari masalah ini pertama kali ditemukan di <strong>Tiongkok</strong> pada masa Dinasti Tang dan Song.
          </p>
          <p>
            Para pedagang Tiongkok mulai menitipkan koin-koin logam mereka yang berat kepada orang kepercayaan atau lembaga pemerintah. Sebagai gantinya, mereka menerima secarik kertas sebagai <strong>bukti penitipan</strong>.
          </p>
          
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200 my-4">
            <strong>Fakta Penting: Konsep I.O.U</strong><br />
            Pada awalnya, uang kertas bukanlah "uang" itu sendiri, melainkan surat hutang atau <i>Promissory Note</i> (I.O.U - I Owe You). Secarik uang kertas adalah janji tertulis bahwa si pembawa kertas tersebut berhak menukarkannya dengan koin emas/perak asli kapan saja.
          </div>
          
          <p>
            Kertas bernama <i>Jiaozi</i> ini menjadi uang kertas resmi pertama di dunia. Karena sangat ringan dan mudah disembunyikan di balik pakaian, uang kertas dengan cepat diadopsi oleh para pedagang untuk perjalanan jarak jauh.
          </p>
          <p>
            Konsep ini kemudian dibawa ke Eropa oleh penjelajah Marco Polo. Di Eropa, bank-bank mulai menerbitkan uang kertas yang nilainya dijamin oleh cadangan emas yang mereka simpan di brankas (dikenal dengan sistem <strong>Standar Emas</strong>).
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/asal-mula-uang/uang-fiat">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-rose-600 to-pink-500 p-4 font-bold shadow-lg shadow-rose-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Uang Fiat</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}