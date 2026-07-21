"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EmasDigitalPage() {
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
            src="/images/emas-digital.jpg" // GANTI DENGAN NAMA FILE GAMBAR EMAS DIGITAL ANDA
            alt="Ilustrasi Emas Digital Modern"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-emerald-400 mb-6">Emas Digital Modern</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Tujuan awal Satoshi Nakamoto menciptakan Bitcoin adalah sebagai "Uang Tunai Elektronik" (<em>Electronic Cash</em>) untuk transaksi sehari-hari. Namun, seiring berjalannya waktu, cara dunia memandang Bitcoin telah berevolusi.
          </p>
          <p>
            Karena jaringan Bitcoin semakin besar, transaksinya terkadang menjadi lambat dan mahal untuk ukuran secangkir kopi. Sebagai gantinya, Bitcoin kini lebih dipandang sebagai <strong>Penyimpan Nilai (Store of Value)</strong> layaknya emas.
          </p>
          
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 my-4">
            <strong>Mengapa Disebut "Emas Digital"?</strong><br />
            Seperti emas fisik, Bitcoin jumlahnya terbatas (langka) dan membutuhkan "energi" besar untuk ditambang. Namun, Bitcoin memiliki keunggulan yang tidak dimiliki emas fisik: ia sangat mudah dibawa (cukup di dalam HP), mudah dibagi menjadi pecahan kecil (Satoshi), dan bisa dikirim ke ujung dunia dalam hitungan menit.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Adopsi Institusional</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Dulu, Bitcoin hanya diminati oleh para <em>nerd</em> komputer dan dianggap sebagai "uang mainan" internet.</li>
            <li>Saat ini, perusahaan raksasa dunia, dana pensiun, dan bahkan beberapa negara (seperti El Salvador) telah menjadikan Bitcoin sebagai cadangan kekayaan resmi mereka untuk melawan inflasi.</li>
            <li>Persetujuan <strong>ETF Bitcoin Spot</strong> oleh regulator Amerika Serikat menjadi bukti tak terbantahkan bahwa Bitcoin kini telah sah menjadi kelas aset besar di dunia keuangan tradisional.</li>
          </ul>

          <p className="mt-4">
            Dari sebuah dokumen PDF berisi 9 halaman di tahun 2008, Bitcoin telah mengubah sejarah finansial dunia selamanya. Ia bukan sekadar kode komputer, melainkan simbol kebebasan finansial di era digital.
          </p>
        </div>
      </motion.div>

      {/* Tombol Selesai Membaca */}
      <div className="mt-8">
        <Link href="/literasi/lahirnya-bitcoin">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 p-4 font-bold shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Selesai Membaca</span>
            <CheckCircle className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}