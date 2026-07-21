"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Ikon BookOpen dihapus
import { motion } from "framer-motion";

export default function PrinsipDasarSyariahPage() {
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
            src="/images/prinsip-syariah.jpg" // GANTI DENGAN NAMA FILE GAMBAR ANDA
            alt="Ilustrasi Prinsip Dasar Syariah"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi yang disesuaikan dengan warna background card (#112A45) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/50 to-transparent"></div>
        </div>
        
        <h1 className="text-2xl font-bold text-emerald-400 mb-6">Prinsip Dasar Syariah</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Dalam Islam, investasi bukanlah sekadar mencari keuntungan materi, melainkan sebuah bentuk kegiatan ekonomi yang harus memberikan manfaat bagi masyarakat luas dan tetap berada dalam koridor hukum Allah SWT.
          </p>
          <p>
            Islam sangat melarang menimbun harta (uang yang didiamkan saja). Harta harus diputar dalam sektor produktif agar ekonomi tumbuh dan bermanfaat bagi orang banyak. Namun, ada batasan-batasan ketat yang harus dipatuhi.
          </p>
          
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 my-4">
            <strong>Prinsip Emas: Al-Ghunm bil Ghurm</strong><br />
            Dalam syariah berlaku prinsip: <i>"Keuntungan tidak bisa diperoleh tanpa menanggung risiko."</i> Sistem bagi hasil harus adil; jika usaha untung maka dibagi bersama, jika rugi (bukan karena kelalaian) maka ditanggung bersama pula.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Syarat Utama Investasi Syariah:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Sektor Halal:</strong> Tidak boleh berinvestasi pada perusahaan yang memproduksi barang haram (alkohol, rokok, daging babi, pornografi, senjata ilegal, atau judi).</li>
            <li><strong>Bebas Riba:</strong> Tidak boleh ada jaminan bunga tetap (bunga pasti) di awal, karena bunga dianggap sebagai tambahan yang tidak adil (riba). Keuntungan harus berasal dari sistem bagi hasil (nisbah) yang disepakati.</li>
            <li><strong>Transparansi (Bebas Gharar):</strong> Bisnis harus jelas objeknya. Tidak boleh ada ketidakpastian atau unsur penipuan dalam akad investasi.</li>
          </ul>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/investasi-dalam-islam/larangan">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 p-4 font-bold shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Larangan (Riba, Gharar, Maysir)</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}