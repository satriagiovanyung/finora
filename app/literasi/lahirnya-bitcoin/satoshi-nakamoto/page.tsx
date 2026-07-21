"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SatoshiNakamotoPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back */}
      <Link href="/literasi/lahirnya-bitcoin" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Lahirnya Bitcoin
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/satoshi-nakamoto.jpg" // GANTI DENGAN NAMA FILE GAMBAR SATOSHI NAKAMOTO ANDA
            alt="Ilustrasi Misteri Satoshi Nakamoto"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-gray-300 mb-6">Misteri Satoshi Nakamoto</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Setelah Krisis Finansial Global 2008 yang menghancurkan kepercayaan masyarakat terhadap bank sentral dan sistem keuangan tradisional, muncul sebuah solusi revolusioner di internet.
          </p>
          <p>
            Pada tanggal 31 Oktober 2008, seseorang (atau sekelompok orang) dengan nama samaran <strong>Satoshi Nakamoto</strong> menerbitkan sebuah dokumen (<em>whitepaper</em>) berjudul: <em>"Bitcoin: A Peer-to-Peer Electronic Cash System"</em>.
          </p>
          
          <div className="p-4 rounded-xl bg-gray-500/10 border border-gray-500/20 text-gray-200 my-4">
            <strong>Misteri Terbesar Abad ke-21:</strong><br />
            Hingga detik ini, identitas asli Satoshi Nakamoto tidak pernah terungkap. Ia berinteraksi dengan komunitas awal hanya melalui email dan forum internet, lalu tiba-tiba menghilang sepenuhnya pada April 2011, menyerahkan pengembangan Bitcoin kepada komunitas <em>open-source</em>.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Mengapa Ia Tetap Anonim?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Mencegah Titik Kegagalan:</strong> Jika penciptanya diketahui, pemerintah atau pihak tertentu bisa saja menekan atau menangkapnya untuk menghentikan jaringan Bitcoin.</li>
            <li><strong>Desentralisasi Sejati:</strong> Dengan menghilangnya Satoshi, Bitcoin tidak memiliki "CEO". Bitcoin sepenuhnya dimiliki dan dijalankan oleh para penggunanya di seluruh dunia.</li>
            <li><strong>Harta Karun yang Tertidur:</strong> Diketahui bahwa dompet kripto milik Satoshi Nakamoto menyimpan sekitar 1,1 juta keping Bitcoin. Menariknya, tidak ada satu keping pun yang pernah dipindahkan atau dijual sejak hari pertama ditambang!</li>
          </ul>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Genesis Block */}
      <div className="mt-8">
        <Link href="/literasi/lahirnya-bitcoin/genesis-block">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-gray-600 to-slate-500 p-4 font-bold shadow-lg shadow-gray-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Genesis Block (2009)</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}