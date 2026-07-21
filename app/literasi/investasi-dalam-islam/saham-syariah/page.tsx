"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Ikon TrendingUp dihapus
import { motion } from "framer-motion";

export default function SahamSyariahPage() {
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
            src="/images/saham-syariah.jpg" // GANTI DENGAN NAMA FILE GAMBAR ANDA
            alt="Ilustrasi Saham dan Reksa Dana Syariah"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi yang disesuaikan dengan warna background card (#112A45) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/50 to-transparent"></div>
        </div>
        
        <h1 className="text-2xl font-bold text-blue-400 mb-6">Saham & Reksa Dana Syariah</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Banyak orang bertanya: <em>"Apakah jual beli saham itu diperbolehkan dalam Islam?"</em> Jawabannya adalah <strong>boleh</strong>, selama saham tersebut mewakili perusahaan yang kegiatannya halal.
          </p>
          <p>
            Di Indonesia, terdapat daftar khusus bernama <strong>Indeks Saham Syariah Indonesia (ISSI)</strong>. Ini adalah kumpulan perusahaan yang telah disaring oleh Dewan Pengawas Syariah agar sesuai dengan prinsip Islam.
          </p>
          
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-100 my-4">
            <strong>Apa yang membuat saham menjadi "Syariah"?</strong><br />
            Perusahaan tersebut harus lolos seleksi ketat:
            <ul className="list-decimal pl-5 mt-2 space-y-1">
              <li>Kegiatan utama tidak bergerak di bidang yang dilarang (non-halal).</li>
              <li>Rasio utang berbasis bunga dibandingkan dengan total aset tidak boleh terlalu besar (maksimal 45%).</li>
              <li>Pendapatan non-halal dibandingkan total pendapatan sangat kecil (maksimal 10%).</li>
            </ul>
          </div>
          
          <p>
            Selain saham secara individu, cara paling praktis bagi pemula adalah melalui <strong>Reksa Dana Syariah</strong>. Di sini, Anda menyetor uang ke Manajer Investasi, dan mereka yang akan memilihkan sekumpulan saham syariah untuk Anda.
          </p>
          <p>
            Dengan reksa dana syariah, Anda mendapatkan dua keuntungan: <strong>Diverisifikasi</strong> (risiko tersebar di banyak perusahaan) dan <strong>Ketenangan Hati</strong> (karena dikelola sesuai batasan syariat).
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/investasi-dalam-islam/sukuk">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 p-4 font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Sukuk (Obligasi Syariah)</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}