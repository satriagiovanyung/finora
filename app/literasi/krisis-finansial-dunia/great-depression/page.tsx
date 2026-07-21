"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GreatDepressionPage() {
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
            src="/images/great-depression.jpg" // GANTI DENGAN NAMA FILE GAMBAR GREAT DEPRESSION ANDA
            alt="Ilustrasi The Great Depression 1929"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-red-500 mb-6">The Great Depression (1929)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Setelah tahun 1920-an yang penuh optimisme (dikenal sebagai <em>Roaring Twenties</em>), pasar saham Amerika Serikat mengalami kenaikan harga yang tidak masuk akal karena spekulasi masif menggunakan uang pinjaman.
          </p>
          <p>
            Puncaknya terjadi pada <strong>29 Oktober 1929</strong>, yang dikenal sebagai <em>Black Tuesday</em>. Pasar saham Wall Street runtuh total. Nilai perusahaan-perusahaan raksasa lenyap dalam semalam, memicu kepanikan massal di seluruh dunia.
          </p>
          
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-100 my-4">
            <strong>Dampak Nyata:</strong><br />
            Ini bukan sekadar angka di bursa saham. Krisis ini mengakibatkan ribuan bank bangkrut, pabrik tutup, dan tingkat pengangguran melonjak hingga 25%. Seluruh dunia jatuh ke dalam kemiskinan yang berlangsung selama hampir satu dekade.
          </div>
          
          <p>
            Kegagalan ini mengajarkan dunia tentang pentingnya regulasi keuangan yang ketat, pengawasan bank yang lebih baik, serta bahaya dari berinvestasi menggunakan uang pinjaman secara berlebihan. Krisis ini menjadi titik balik bagi sistem ekonomi modern agar tidak membiarkan pasar berjalan tanpa kendali.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/krisis-finansial-dunia/krismon-asia">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-red-600 to-orange-500 p-4 font-bold shadow-lg shadow-red-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Krisis Moneter Asia (1997)</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}