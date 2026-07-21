"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function KodeHammurabiPage() {
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
            src="/images/kode-hammurabi.jpg" // GANTI DENGAN NAMA FILE GAMBAR KODE HAMMURABI ANDA
            alt="Ilustrasi Kode Hammurabi"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-orange-400 mb-6">Kode Hammurabi (1700 SM)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Banyak yang mengira investasi adalah hal modern. Padahal, benih-benih sistem investasi sudah muncul di peradaban <strong>Mesopotamia</strong> (wilayah Irak modern) lebih dari 3.700 tahun yang lalu!
          </p>
          <p>
            <strong>Kode Hammurabi</strong>, yaitu salah satu kumpulan hukum tertulis tertua di dunia yang dibuat oleh Raja Hammurabi dari Babilonia, ternyata berisi aturan yang sangat detail mengenai aktivitas ekonomi.
          </p>
          
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 my-4">
            <strong>Investasi Pertama dalam Sejarah:</strong><br />
            Hukum ini menetapkan aturan baku tentang cara meminjamkan tanah, benih, atau hasil panen kepada petani lain. Jika seorang investor meminjamkan benih, akan ada aturan mengenai berapa bagian yang harus dikembalikan kepada pemilik modal saat panen tiba.
          </div>
          
          <p>
            Ini adalah cikal bakal sistem <strong>Bagi Hasil</strong> dan <strong>Kredit</strong>. Saat itu, emas dan perak belum menjadi satu-satunya alat ukur; barang komoditas (seperti hasil tani) juga digunakan sebagai aset yang bisa diinvestasikan.
          </p>
          <p>
            Sistem ini membuktikan bahwa sejak awal sejarah manusia, konsep "memutar uang" atau "meminjamkan aset untuk mendapatkan keuntungan lebih" sudah menjadi bagian penting dalam membangun peradaban. Tanpa adanya aturan ini di masa lalu, mungkin konsep perbankan dan pasar modal hari ini tidak akan pernah terbentuk.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/sejarah-investasi/saham-voc">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 p-4 font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Saham & VOC</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}