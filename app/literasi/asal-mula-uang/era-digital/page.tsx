"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EraDigitalPage() {
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
            src="/images/era-digital.jpg" // GANTI DENGAN NAMA FILE GAMBAR ERA DIGITAL ANDA
            alt="Ilustrasi Era Digital & Kripto"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}
        
        <h1 className="text-2xl font-bold text-blue-400 mb-6">Era Digital & Kripto</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Di abad ke-21 ini, uang fisik seperti kertas dan koin mulai perlahan ditinggalkan. Kemajuan teknologi internet membawa kita ke era <strong>Uang Digital</strong>.
          </p>
          <p>
            Saat kita menggunakan kartu kredit, m-banking, atau e-wallet (seperti Gopay/OVO), kita tidak sedang memindahkan uang fisik. Kita hanya memindahkan "data angka" dari komputer satu bank ke komputer bank lainnya.
          </p>
          
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-100 my-4">
            <strong>Fakta Mengejutkan:</strong><br />
            Lebih dari <strong>90% uang di seluruh dunia</strong> saat ini hanya eksis sebagai angka di layar komputer, bukan dalam bentuk uang tunai fisik!
          </div>
          
          <p>
            Namun, sistem perbankan digital modern tetap memiliki titik lemah: sistem ini <strong>Tersentralisasi (Terpusat)</strong>. Bank atau pemerintah memiliki kendali penuh. Mereka bisa mencetak uang tanpa batas, membekukan rekening Anda, atau menaikkan biaya admin kapan saja.
          </p>
          <p>
            Sebagai respons terhadap kelemahan tersebut, lahirlah <strong>Mata Uang Kripto (Cryptocurrency)</strong> seperti Bitcoin pada tahun 2009. Kripto beroperasi di atas teknologi jaringan <i>Blockchain</i> yang <strong>Terdesentralisasi</strong>, artinya tidak ada satupun bank, perusahaan, atau negara yang mengendalikannya secara tunggal, dan pasokannya dibatasi secara matematis oleh kode komputer.
          </p>
        </div>
      </motion.div>

      {/* Tombol Selesai Membaca */}
      <div className="mt-8">
        <Link href="/literasi/asal-mula-uang">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Selesai Membaca</span>
            <CheckCircle className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}