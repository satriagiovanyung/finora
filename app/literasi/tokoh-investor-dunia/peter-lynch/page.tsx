"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PeterLynchPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back */}
      <Link href="/literasi/tokoh-investor-dunia" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Tokoh Investor
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/peter-lynch.jpg" // GANTI DENGAN NAMA FILE GAMBAR PETER LYNCH ANDA
            alt="Ilustrasi Peter Lynch"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-amber-400 mb-6">Peter Lynch: Beli Apa yang Anda Kenal</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Peter Lynch adalah legenda Wall Street yang mengelola <em>Magellan Fund</em> di Fidelity Investments. Antara tahun 1977 hingga 1990, ia mencetak keuntungan rata-rata <strong>29,2% per tahun</strong>, menjadikannya reksa dana berkinerja terbaik di dunia pada masa itu.
          </p>
          <p>
            Berbeda dengan analis di Wall Street yang menggunakan rumus matematika rumit, Lynch memiliki pendekatan yang sangat membumi dan bisa ditiru oleh investor ritel (masyarakat biasa).
          </p>
          
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-100 my-4">
            <strong>Aturan Emas: "Invest in What You Know"</strong><br />
            Lynch percaya bahwa konsumen biasa memiliki keunggulan dibandingkan analis profesional. Jika Anda menyukai kopi dari suatu kedai lokal yang selalu ramai, atau istri Anda menyukai merek pakaian tertentu yang kualitasnya bagus, itu bisa menjadi sinyal awal untuk menemukan saham yang hebat!
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Konsep "Tenbagger"</h2>
          <p>
            Lynch adalah orang yang mempopulerkan istilah <strong>Tenbagger</strong>, yaitu saham yang harganya naik hingga 10 kali lipat dari harga belinya. 
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Lynch sering menemukan <em>tenbagger</em> bukan dari laporan keuangan di kantor, melainkan saat ia berjalan-jalan di mall, pergi ke supermarket, atau mengobrol dengan keluarganya.</li>
            <li>Ia mengajarkan bahwa riset yang baik dimulai dari mengamati produk dan layanan yang kita gunakan sehari-hari.</li>
            <li>Namun, ia juga memperingatkan: menyukai sebuah produk barulah langkah pertama. Anda tetap wajib memeriksa laporan keuangan perusahaannya sebelum membeli sahamnya.</li>
          </ul>
        </div>
      </motion.div>

{/* Tombol Lanjut ke Charlie Munger */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia/charlie-munger">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 p-4 font-bold shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Charlie Munger</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}