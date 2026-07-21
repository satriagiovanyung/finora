"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TulipManiaPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      <Link href="/literasi/krisis-finansial-dunia" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Menu Krisis
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden">
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/tulip-mania.jpg" // GANTI DENGAN NAMA FILE GAMBAR TULIP MANIA ANDA
            alt="Ilustrasi Tulip Mania 1637"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-rose-400 mb-6">Tulip Mania (1637)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Tahukah Anda bahwa krisis ekonomi pertama di dunia tidak disebabkan oleh saham, melainkan oleh <strong>bunga Tulip</strong>?
          </p>
          <p>
            Pada abad ke-17 di Belanda, bunga Tulip menjadi simbol status sosial. Harga umbi Tulip melonjak gila-gilaan karena semua orang—dari petani hingga bangsawan—ikut berspekulasi demi keuntungan cepat.
          </p>
          
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-100 my-4">
            <strong>Puncak Kegilaan:</strong><br />
            Pada puncaknya, satu umbi Tulip jenis langka dihargai setara dengan <strong>sebuah rumah mewah</strong> di Amsterdam!
          </div>

          <p>
            Pada Februari 1637, "gelembung" itu pecah. Tiba-tiba tidak ada lagi pembeli, dan harga jatuh bebas dalam hitungan hari. Banyak orang kehilangan segalanya. Ini adalah pelajaran abadi tentang bahaya <strong>FOMO (Fear of Missing Out)</strong> dalam investasi.
          </p>
        </div>
      </motion.div>

      <div className="mt-8">
        <Link href="/literasi/krisis-finansial-dunia/great-depression">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 p-4 font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: The Great Depression</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </main>
  );
}