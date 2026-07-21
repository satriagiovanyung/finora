"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WarrenBuffettPage() {
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
            src="/images/warren-buffett.jpg" // GANTI DENGAN NAMA FILE GAMBAR WARREN BUFFETT ANDA
            alt="Ilustrasi Warren Buffett"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-emerald-400 mb-6">Warren Buffett: Sang Oracle dari Omaha</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Warren Buffett (lahir 1930) adalah murid langsung dari Benjamin Graham dan kini dikenal sebagai investor tersukses sepanjang masa. Melalui perusahaannya, <strong>Berkshire Hathaway</strong>, ia membuktikan bahwa konsistensi dan kesabaran bisa mengalahkan spekulasi pasar.
          </p>
          <p>
            Berbeda dengan gurunya yang murni mencari saham "murah" (sekalipun kualitas perusahaannya biasa saja), Buffett memodifikasi strategi tersebut setelah bertemu dengan partner bisnisnya, Charlie Munger.
          </p>
          
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 my-4">
            <strong>Prinsip Emas Buffett:</strong><br />
            <i>"Jauh lebih baik membeli perusahaan yang luar biasa dengan harga yang wajar, daripada membeli perusahaan yang wajar dengan harga yang luar biasa murah."</i>
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Pilar Investasi ala Warren Buffett:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Economic Moat (Parit Ekonomi):</strong> Ia hanya membeli perusahaan yang memiliki "benteng" pelindung dari pesaingnya, seperti kekuatan merek (contoh: Coca-Cola, Apple).</li>
            <li><strong>Circle of Competence:</strong> Jangan berinvestasi pada bisnis yang tidak Anda pahami. Fokuslah pada apa yang Anda mengerti dengan baik.</li>
            <li><strong>Jangka Waktu Panjang:</strong> Buffett pernah berkata, <em>"Jangka waktu favorit saya dalam memegang saham adalah: selamanya."</em> Kekayaan terbesarnya datang dari efek bunga berbunga (compounding interest) selama puluhan tahun.</li>
          </ul>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia/peter-lynch">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 p-4 font-bold shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Peter Lynch</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>  

    </main>
  );
}