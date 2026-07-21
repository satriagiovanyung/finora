"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CharlieMungerPage() {
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
            src="/images/charlie-munger.jpg" // GANTI DENGAN NAMA FILE GAMBAR CHARLIE MUNGER ANDA
            alt="Ilustrasi Charlie Munger"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-violet-400 mb-6">Charlie Munger: Sang Master Model Mental</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Charlie Munger (1924–2023) adalah tangan kanan sekaligus rekan pemikir Warren Buffett di Berkshire Hathaway. Ia dikenal karena kecerdasannya yang luar biasa tajam, gaya bicaranya yang ceplas-ceplos, dan kebijaksanaannya yang melampaui sekadar urusan uang.
          </p>
          <p>
            Dialah orang yang mengubah cara pandang Buffett dari sekadar membeli "saham murah berkualitas buruk" menjadi "membeli bisnis hebat dengan harga yang wajar".
          </p>
          
          <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-100 my-4">
            <strong>Konsep Utama: Mental Models (Model Mental)</strong><br />
            Munger mengajarkan bahwa untuk menjadi cerdas, kita tidak bisa hanya tahu satu bidang ilmu. Kita harus memiliki <em>"Jaring-jaring Model Mental"</em> yang diambil dari berbagai disiplin ilmu seperti psikologi, sejarah, matematika, fisika, dan biologi.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Filosofi Kehidupan & Investasi Munger:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Inversion (Berpikir Terbalik):</strong> Alih-alih bertanya "Bagaimana caranya agar saya sukses?", Munger selalu bertanya "Apa hal-hal yang pasti akan membuat saya hancur?" Lalu ia akan menghindari hal-hal tersebut.</li>
            <li><strong>Lollapalooza Effect:</strong> Efek luar biasa (baik positif maupun negatif) yang terjadi ketika beberapa bias psikologis atau faktor manusia bergabung secara bersamaan menuju arah yang sama.</li>
            <li><strong>Kurangi Kebodohan:</strong> Munger percaya bahwa kesuksesan jangka panjang tidak datang dari mencoba menjadi jenius setiap saat, melainkan dari konsisten berusaha untuk <em>tidak menjadi bodoh</em>.</li>
          </ul>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Ray Dalio */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia/ray-dalio">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 p-4 font-bold shadow-lg shadow-violet-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Ray Dalio</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}