"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GeorgeSorosPage() {
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
            src="/images/george-soros.jpg" // GANTI DENGAN NAMA FILE GAMBAR GEORGE SOROS ANDA
            alt="Ilustrasi George Soros"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-orange-400 mb-6">George Soros: Sang Spekulan Legendaris</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            George Soros adalah salah satu pengelola dana lindung nilai (hedge fund) paling kontroversial dan sukses sepanjang sejarah. Melalui perusahaannya, <strong>Quantum Fund</strong>, ia dikenal karena keberaniannya mengambil posisi taruhan besar terhadap pergerakan mata uang dan pasar global.
          </p>
          <p>
            Namanya melambung dunia pada tanggal <strong>16 September 1992</strong>, hari yang dikenal sebagai <em>"Black Wednesday"</em>. Soros memasang taruhan besar-besaran bahwa Poundsterling Inggris akan jatuh, dan ia benar—keuntungannya dari transaksi tersebut mencapai lebih dari 1 miliar dolar AS dalam satu hari, sehingga ia dijuluki <em>"The Man Who Broke the Bank of England."</em>
          </p>
          
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-100 my-4">
            <strong>Konsep Utama: Teori Refleksivitas</strong><br />
            Soros percaya bahwa persepsi investor tidak hanya mencerminkan realitas pasar, tetapi juga ikut membentuk realitas itu sendiri. Ketakutan dan keserakahan investor bisa menciptakan gelembung atau kehancuran yang berjalan lebih jauh dari yang dibenarkan oleh fundamental ekonomi.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Gaya Investasi ala Soros:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Macro Trading:</strong> Berbeda dari Peter Lynch atau Warren Buffett yang fokus memilih saham perusahaan, Soros bermain di level makro—menganalisis kebijakan pemerintah, suku bunga, dan nilai tukar mata uang antar negara.</li>
            <li><strong>Berani Mengambil Posisi Besar:</strong> Ketika Soros yakin dengan analisisnya, ia tidak ragu memasang taruhan dalam jumlah sangat besar, sebuah gaya yang berisiko tinggi namun bisa menghasilkan keuntungan luar biasa.</li>
            <li><strong>Akui Kesalahan dengan Cepat:</strong> Soros dikenal disiplin dalam memotong kerugian (cut loss) secepat mungkin begitu ia menyadari analisisnya keliru, alih-alih mempertahankan posisi karena gengsi.</li>
          </ul>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Philip Fisher */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia/philip-fisher">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 p-4 font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Philip Fisher</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}