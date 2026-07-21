"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function JoelGreenblattPage() {
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
            src="/images/joel-greenblatt.jpg" // GANTI DENGAN NAMA FILE GAMBAR JOEL GREENBLATT ANDA
            alt="Ilustrasi Joel Greenblatt"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-indigo-400 mb-6">Joel Greenblatt: Pencipta Magic Formula</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Joel Greenblatt adalah pendiri <strong>Gotham Capital</strong>, sebuah hedge fund yang mencatatkan hasil luar biasa, yaitu keuntungan tahunan rata-rata sekitar 40% selama dua dekade. Ia dikenal sebagai investor yang berhasil menerjemahkan prinsip value investing yang rumit menjadi sistem yang sederhana dan bisa ditiru siapa saja.
          </p>
          <p>
            Melalui bukunya, <em>"The Little Book That Beats the Market"</em>, Greenblatt memperkenalkan sebuah strategi kuantitatif yang kini dikenal luas oleh investor ritel di seluruh dunia.
          </p>
          
          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-100 my-4">
            <strong>Konsep Utama: Magic Formula</strong><br />
            Greenblatt merancang formula sederhana untuk mencari "perusahaan bagus dengan harga murah" dengan menggabungkan dua rasio utama: <em>Return on Capital</em> (seberapa efisien perusahaan menghasilkan laba dari modalnya) dan <em>Earnings Yield</em> (seberapa murah harga saham dibanding labanya).
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Prinsip Investasi ala Greenblatt:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Sistematis, Bukan Emosional:</strong> Dengan mengikuti formula yang konsisten, investor bisa menghindari jebakan bias psikologis seperti panik atau euforia saat mengambil keputusan investasi.</li>
            <li><strong>Kombinasi Kualitas dan Harga:</strong> Greenblatt menegaskan bahwa mencari perusahaan berkualitas saja tidak cukup—harga yang dibayar juga harus tetap masuk akal agar keuntungan optimal.</li>
            <li><strong>Kesabaran Tetap Kunci:</strong> Meski formulanya sederhana, Greenblatt mengingatkan bahwa strategi ini butuh waktu bertahun-tahun untuk benar-benar terbukti hasilnya, dan tidak akan selalu mengalahkan pasar setiap tahun.</li>
          </ul>

          <p className="mt-4">
            Warisan terbesar Greenblatt adalah membuktikan bahwa strategi investasi berbasis data dan disiplin bisa dijalankan oleh investor biasa, tanpa perlu menjadi analis profesional di Wall Street.
          </p>
        </div>
      </motion.div>

      {/* Tombol Selesai Membaca */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 p-4 font-bold shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Selesai Membaca</span>
            <CheckCircle className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}