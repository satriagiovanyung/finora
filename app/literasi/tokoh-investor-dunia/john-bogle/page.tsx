"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function JohnBoglePage() {
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
            src="/images/john-bogle.jpg" // GANTI DENGAN NAMA FILE GAMBAR JOHN C. BOGLE ANDA
            alt="Ilustrasi John C. Bogle"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-cyan-400 mb-6">John C. Bogle: Bapak Reksa Dana Indeks</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            John C. Bogle (1929–2019) adalah pendiri <strong>Vanguard Group</strong>, salah satu perusahaan manajer investasi terbesar di dunia. Ia dikenal sebagai sosok yang mengubah total cara masyarakat biasa berinvestasi, dengan menciptakan produk yang murah, sederhana, dan bisa diakses siapa saja.
          </p>
          <p>
            Pada tahun 1976, Bogle meluncurkan reksa dana indeks pertama untuk investor ritel, <em>First Index Investment Trust</em> (kini dikenal sebagai Vanguard 500 Index Fund). Saat itu, idenya dianggap gila dan diejek sebagai <em>"Bogle's Folly"</em> oleh para pesaingnya.
          </p>
          
          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 my-4">
            <strong>Filosofi Utama: Jangan Cari Jarum di Tumpukan Jerami, Beli Saja Tumpukannya</strong><br />
            Bogle percaya bahwa alih-alih sibuk mencari saham individu terbaik (jarum), investor akan jauh lebih diuntungkan dengan membeli seluruh pasar sekaligus (tumpukan jerami) melalui reksa dana indeks berbiaya rendah.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Prinsip Investasi ala Bogle:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Biaya adalah Musuh Terbesar:</strong> Bogle menunjukkan bahwa biaya pengelolaan (fee) yang tampak kecil dapat memakan sebagian besar keuntungan investor dalam jangka panjang akibat efek compounding.</li>
            <li><strong>Investasi Pasif Mengalahkan Aktif:</strong> Studinya membuktikan bahwa dalam jangka panjang, mayoritas manajer investasi aktif gagal mengalahkan kinerja indeks pasar secara konsisten.</li>
            <li><strong>Kesederhanaan dan Kesabaran:</strong> Bogle selalu mengingatkan investor untuk tidak panik menjual saat pasar turun, dan tetap berinvestasi secara rutin dalam jangka panjang.</li>
          </ul>

          <p className="mt-4">
            Berkat visinya, jutaan investor ritel di seluruh dunia kini bisa membangun kekayaan melalui reksa dana indeks berbiaya rendah, sebuah warisan yang diperkirakan telah menghemat triliunan dolar bagi para investor secara global.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke George Soros */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia/george-soros">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-cyan-600 to-blue-500 p-4 font-bold shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: George Soros</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}