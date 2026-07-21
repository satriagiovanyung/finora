"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function KomoditasPage() {
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
            src="/images/komoditas.jpg" // GANTI DENGAN NAMA FILE GAMBAR KOMODITAS ANDA
            alt="Ilustrasi Uang Komoditas"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}
        
        <h1 className="text-2xl font-bold text-amber-400 mb-6">Uang Komoditas</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Untuk mengatasi masalah sistem barter, manusia mulai menyepakati satu atau beberapa barang tertentu untuk dijadikan sebagai standar alat tukar. Inilah yang disebut dengan <strong>Uang Komoditas</strong>.
          </p>
          <p>
            Barang yang dipilih biasanya adalah benda yang diakui nilainya oleh semua orang di daerah tersebut, tahan lama, dan mudah dibawa. Pada zaman dahulu, benda-benda ini bisa berupa <strong>kerang, garam, biji kakao, kulit hewan, hingga logam mulia</strong> seperti emas dan perak.
          </p>
          
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 my-4">
            <strong>Fakta Unik:</strong> Kata "Salary" (Gaji) dalam bahasa Inggris berasal dari kata "Salarium" (bahasa Latin), karena pada zaman Romawi Kuno, prajurit dibayar menggunakan garam (Salt) yang saat itu sangat berharga!
          </div>
          
          <p>
            Dengan adanya uang komoditas, transaksi menjadi jauh lebih mudah. Anda tidak perlu lagi mencari orang yang memiliki kebutuhan ganda (seperti dalam barter). Cukup tukarkan barang Anda dengan komoditas yang disepakati (misalnya kerang), lalu gunakan kerang tersebut untuk membeli apa pun yang Anda butuhkan.
          </p>
          <p>
            Namun, seiring berjalannya waktu, membawa berkarung-karung garam atau tumpukan kulit hewan menjadi sangat berat dan tidak praktis untuk transaksi dalam jumlah besar. Hal ini mendorong inovasi selanjutnya dalam sejarah keuangan.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        {/* Sesuaikan URL di bawah ini dengan materi selanjutnya, misal: uang-logam */}
        <Link href="/literasi/asal-mula-uang/koin-pertama">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 p-4 font-bold shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform text-[#081626]">
            <span>Lanjut: koin pertama</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}