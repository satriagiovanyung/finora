"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SahamVOCPage() {
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
            src="/images/saham-voc.jpg" // GANTI DENGAN NAMA FILE GAMBAR SAHAM & VOC ANDA
            alt="Ilustrasi Lahirnya Saham & VOC"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-emerald-400 mb-6">Lahirnya Saham & VOC</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Pada abad ke-17, tepatnya tahun 1602, sebuah perusahaan Belanda bernama <strong>VOC (Verenigde Oostindische Compagnie)</strong> mengubah wajah dunia ekonomi selamanya. 
          </p>
          <p>
            VOC mendapatkan mandat untuk menguasai perdagangan rempah-rempah di Asia. Namun, ekspedisi pelayaran saat itu sangat mahal dan berisiko tinggi (banyak kapal tenggelam atau diserang bajak laut). VOC tidak bisa membiayai ini sendirian.
          </p>
          
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 my-4">
            <strong>Inovasi Saham:</strong><br />
            VOC mengundang masyarakat luas untuk "patungan" modal. Sebagai bukti kepemilikan modal tersebut, mereka mengeluarkan secarik kertas. Inilah yang diakui sebagai <strong>Saham pertama di dunia</strong>.
          </div>
          
          <p>
            Jika kapal berhasil kembali dengan rempah-rempah yang melimpah, investor akan mendapatkan bagian keuntungan yang disebut <strong>Dividen</strong>. Sebaliknya, jika kapal gagal, risiko kerugian ditanggung bersama.
          </p>
          <p>
            Hebatnya, kertas bukti kepemilikan ini bisa diperjualbelikan antar warga. Hal inilah yang memicu lahirnya <strong>Bursa Efek Amsterdam</strong>, bursa saham resmi pertama di dunia. Sejak saat itu, investasi tidak lagi terbatas pada raja atau bangsawan saja, melainkan setiap orang kini punya kesempatan untuk menjadi bagian dari sebuah bisnis besar.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/sejarah-investasi/wall-street">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 p-4 font-bold shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Wall Street & Industri</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}