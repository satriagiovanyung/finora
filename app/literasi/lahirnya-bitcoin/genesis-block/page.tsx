"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GenesisBlockPage() {
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
            src="/images/genesis-block.jpg" // GANTI DENGAN NAMA FILE GAMBAR GENESIS BLOCK ANDA
            alt="Ilustrasi Genesis Block 2009"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-amber-400 mb-6">Genesis Block (2009)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Setelah dokumen <em>whitepaper</em> dirilis pada Oktober 2008, konsep Bitcoin akhirnya benar-benar "hidup" pada tanggal <strong>3 Januari 2009</strong>. 
          </p>
          <p>
            Pada hari itu, Satoshi Nakamoto menambang blok pertama dalam jaringan Bitcoin yang dikenal dengan sebutan <strong>Genesis Block</strong> atau Blok 0. Ini adalah pondasi pertama dari seluruh rantai blok (<em>blockchain</em>) Bitcoin yang ada hingga hari ini.
          </p>
          
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-100 my-4">
            <strong>Pesan Tersembunyi Satoshi:</strong><br />
            Di dalam baris kode Genesis Block, Satoshi menyisipkan sebuah teks abadi berbunyi:<br />
            <em className="text-amber-300">"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"</em>.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Makna di Balik Pesan Tersebut</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Bukti Waktu (Timestamp):</strong> Mengutip <em>headline</em> surat kabar <em>The Times</em> di Inggris pada hari itu membuktikan bahwa Genesis Block tidak dibuat sebelum tanggal 3 Januari 2009.</li>
            <li><strong>Kritik Keras:</strong> Pesan itu (yang berarti "Kanselir di ambang dana talangan kedua untuk bank") adalah sindiran keras terhadap sistem perbankan tradisional. Satoshi ingin menunjukkan kegagalan sistem uang fiat (uang kertas) di mana pemerintah terus mencetak uang untuk menyelamatkan bank yang serakah, yang pada akhirnya merugikan rakyat karena inflasi.</li>
          </ul>

          <p className="mt-4 text-xs text-gray-500">
            *Fakta Unik: Imbalan 50 Bitcoin dari Genesis Block ini tidak akan pernah bisa dibelanjakan akibat cara kodenya ditulis. Sampai sekarang, 50 BTC tersebut (dan donasi dari penggemar di seluruh dunia) masih abadi di alamat dompet tersebut.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Pizza Day */}
      <div className="mt-8">
        <Link href="/literasi/lahirnya-bitcoin/pizza-day">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 p-4 font-bold shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Bitcoin Pizza Day (2010)</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}