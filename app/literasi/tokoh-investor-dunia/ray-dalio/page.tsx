"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RayDalioPage() {
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
            src="/images/ray-dalio.jpg" // GANTI DENGAN NAMA FILE GAMBAR RAY DALIO ANDA
            alt="Ilustrasi Ray Dalio"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-cyan-400 mb-6">Ray Dalio: Sang Master Makroekonomi</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Ray Dalio adalah pendiri <strong>Bridgewater Associates</strong>, perusahaan *hedge fund* (pengelola dana lindung nilai) terbesar di dunia. Jika Peter Lynch fokus mencari saham satu per satu (mikro), Ray Dalio adalah kebalikannya: ia melihat gambaran besar ekonomi dunia (makro).
          </p>
          <p>
            Dalio melihat ekonomi layaknya sebuah "mesin" yang bergerak dalam siklus utang jangka pendek dan jangka panjang. Dengan memahami sejarah dan pola siklus ini, ia bisa memprediksi ke mana arah ekonomi akan bergerak.
          </p>
          
          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 my-4">
            <strong>Inovasi Terbesar: All-Weather Portfolio</strong><br />
            Dalio merancang sebuah strategi portofolio "Segala Cuaca". Idenya adalah membuat racikan investasi yang bisa bertahan dan tetap menguntungkan di segala kondisi ekonomi, baik saat inflasi tinggi, deflasi, ekonomi bertumbuh, maupun krisis.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Prinsip (Principles) ala Dalio:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Holy Grail of Investing:</strong> Dalio membuktikan bahwa dengan memiliki 15 aset yang korelasinya rendah (tidak bergerak ke arah yang sama secara bersamaan), Anda bisa memangkas risiko investasi hingga 80% tanpa mengurangi potensi keuntungan.</li>
            <li><strong>Radical Transparency:</strong> Dalam perusahaannya, ia menerapkan prinsip kejujuran radikal. Ide terbaiklah yang menang, tidak peduli apakah itu datang dari anak magang atau dari sang CEO.</li>
            <li><strong>Belajar dari Kesalahan:</strong> Dalio percaya bahwa rasa sakit akibat kerugian atau kegagalan, jika ditambah dengan refleksi (evaluasi), akan menghasilkan kemajuan yang pesat (*Pain + Reflection = Progress*).</li>
          </ul>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke John C. Bogle */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia/john-bogle">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 p-4 font-bold shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: John C. Bogle</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}