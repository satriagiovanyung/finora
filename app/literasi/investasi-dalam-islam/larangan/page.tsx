"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LaranganInvestasiPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Dashboard */}
      <Link href="/literasi/investasi-dalam-islam" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Investasi Syariah
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/larangan-investasi.jpg" // GANTI DENGAN NAMA FILE GAMBAR ANDA
            alt="Ilustrasi Larangan Investasi"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi yang disesuaikan dengan warna background card (#112A45) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/50 to-transparent"></div>
        </div>

        <h1 className="text-2xl font-bold text-rose-400 mb-6">Riba, Gharar & Maysir</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Dalam berinvestasi sesuai syariat, terdapat tiga pilar utama yang wajib dihindari. Jika salah satu saja terpenuhi, maka investasi tersebut menjadi tidak halal.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-white mb-1">1. Riba (Bunga)</h3>
              <p className="text-gray-400 text-xs">
                Tambahan yang disyaratkan atas pokok utang piutang. Dalam investasi syariah, keuntungan harus bersumber dari bagi hasil usaha, bukan dari bunga tetap yang menjamin keuntungan pasti tanpa melihat hasil bisnis.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-white mb-1">2. Gharar (Ketidakpastian)</h3>
              <p className="text-gray-400 text-xs">
                Ketidakpastian dalam akad. Contohnya adalah investasi pada produk yang informasi bisnisnya tidak jelas, barangnya tidak ada, atau kontrak yang bisa merugikan salah satu pihak karena informasi yang disembunyikan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-white mb-1">3. Maysir (Judi/Spekulasi)</h3>
              <p className="text-gray-400 text-xs">
                Peruntungan yang didasarkan pada spekulasi murni tanpa ada aktivitas ekonomi yang nyata. Seseorang mendapatkan keuntungan dengan cara "untung-untungan" (seperti menebak harga saham dalam detik yang sangat pendek atau trading murni spekulasi tanpa fundamental bisnis).
              </p>
            </div>
          </div>

          <p className="text-sm mt-4 italic text-gray-500">
            Hindari investasi yang menawarkan "Cepat kaya", "Bunga tetap besar setiap bulan", atau "Tanpa risiko" karena seringkali mengandung unsur di atas.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/investasi-dalam-islam/saham-syariah">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-rose-600 to-pink-500 p-4 font-bold shadow-lg shadow-rose-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Saham Syariah</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}