"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WallStreetPage() {
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
            src="/images/wall-street.jpg" // GANTI DENGAN NAMA FILE GAMBAR WALL STREET ANDA
            alt="Ilustrasi Wall Street & Revolusi Industri"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-blue-400 mb-6">Wall Street & Revolusi Industri</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Setelah keberhasilan pasar modal di Eropa, pusat gravitasi keuangan dunia berpindah ke New York, Amerika Serikat, seiring dengan meledaknya <strong>Revolusi Industri</strong> pada abad ke-18 dan 19.
          </p>
          <p>
            Dunia saat itu berubah total. Penemuan mesin uap memungkinkan pabrik-pabrik raksasa berdiri, dan pembangunan rel kereta api melintasi benua membutuhkan biaya yang tidak masuk akal besarnya. Pengusaha dan negara membutuhkan dana yang jauh lebih besar daripada sekadar patungan pedagang rempah.
          </p>
          
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-100 my-4">
            <strong>Lahirnya Raksasa:</strong><br />
            Di sinilah <strong>Wall Street</strong> menjadi jantung ekonomi dunia. Perusahaan-perusahaan besar seperti perusahaan baja, tambang, dan transportasi kereta api berlomba-lomba melantai di bursa saham untuk mendapatkan modal publik.
          </div>
          
          <p>
            Investasi mulai berkembang tidak hanya dalam bentuk saham, tetapi juga <strong>Obligasi</strong> (surat utang). Pemerintah dan perusahaan menerbitkan obligasi untuk membiayai pembangunan infrastruktur publik secara besar-besaran.
          </p>
          <p>
            Periode ini adalah era di mana investasi menjadi penggerak utama pertumbuhan ekonomi global. Rakyat mulai bisa ikut serta mendanai perusahaan raksasa, dan konsep kekayaan melalui pasar modal mulai dikenal luas oleh masyarakat Amerika, yang kemudian menyebar ke seluruh dunia.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/sejarah-investasi/reksa-dana">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 p-4 font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Reksa Dana</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}