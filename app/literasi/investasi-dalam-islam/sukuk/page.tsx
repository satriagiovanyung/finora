"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Ikon ScrollText dihapus
import { motion } from "framer-motion";

export default function SukukPage() {
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
            src="/images/sukuk.jpg" // GANTI DENGAN NAMA FILE GAMBAR ANDA
            alt="Ilustrasi Sukuk Obligasi Syariah"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi yang disesuaikan dengan warna background card (#112A45) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/50 to-transparent"></div>
        </div>
        
        <h1 className="text-2xl font-bold text-purple-400 mb-6">Sukuk (Obligasi Syariah)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Mungkin Anda pernah mendengar tentang Obligasi (surat utang). Dalam sistem konvensional, obligasi adalah cara meminjam uang dengan janji membayar bunga tetap (riba). Islam melarang hal ini.
          </p>
          <p>
            Sebagai alternatif, Islam mengenal <strong>Sukuk</strong>. Berbeda dengan obligasi, sukuk <strong>bukanlah surat utang</strong>, melainkan bukti kepemilikan atas suatu aset atau proyek.
          </p>
          
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-100 my-4">
            <strong>Cara Kerja Sukuk:</strong><br />
            Penerbit sukuk (misalnya negara atau perusahaan) menggunakan dana dari investor untuk membiayai proyek fisik (seperti membangun gedung, jalan tol, atau bandara). Investor tidak mendapatkan "bunga", melainkan mendapatkan <strong>bagi hasil (Imbalan)</strong> dari keuntungan proyek tersebut.
          </div>
          
          <p>
            Di Indonesia, Sukuk Negara (sering disebut SBSN atau Sukuk Ritel) adalah salah satu instrumen investasi paling aman karena dijamin oleh pemerintah. Ini sangat cocok bagi Anda yang menginginkan investasi yang <em>low-risk</em> namun tetap sesuai dengan prinsip syariat.
          </p>
          <p>
            Dengan membeli Sukuk, Anda secara tidak langsung ikut berkontribusi membangun negara. Dana Anda tidak sekadar diputar dalam angka, melainkan benar-benar mewujud menjadi infrastruktur nyata yang memberikan manfaat bagi masyarakat luas.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/investasi-dalam-islam/zakat">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 p-4 font-bold shadow-lg shadow-purple-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Zakat Investasi</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
} 