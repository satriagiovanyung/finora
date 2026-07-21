"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PhilipFisherPage() {
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
            src="/images/philip-fisher.jpg" // GANTI DENGAN NAMA FILE GAMBAR PHILIP FISHER ANDA
            alt="Ilustrasi Philip Fisher"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-teal-400 mb-6">Philip Fisher: Perintis Growth Investing</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Philip Fisher (1907–2004) adalah investor legendaris yang memperkenalkan pendekatan <strong>Growth Investing</strong> (investasi pertumbuhan), sebuah gaya yang berfokus pada kualitas dan potensi jangka panjang perusahaan, bukan sekadar mencari saham murah.
          </p>
          <p>
            Bukunya, <em>"Common Stocks and Uncommon Profits"</em> (1958), begitu berpengaruh sehingga Warren Buffett sendiri pernah berkata bahwa gaya investasinya adalah perpaduan 85% Benjamin Graham dan 15% Philip Fisher—meski seiring waktu, banyak yang menilai pengaruh Fisher terhadap Buffett jauh lebih besar dari itu.
          </p>
          
          <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-100 my-4">
            <strong>Metode Khas: Scuttlebutt</strong><br />
            Fisher mempopulerkan teknik riset "Scuttlebutt" (gosip lapangan), yaitu menggali informasi langsung dari pelanggan, pesaing, pemasok, mantan karyawan, hingga manajemen perusahaan untuk memahami kualitas bisnis secara mendalam—jauh melampaui apa yang tertulis di laporan keuangan.
          </div>
          
          <h2 className="text-base font-bold text-white mt-6 mb-2">Prinsip Investasi ala Fisher:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Fokus pada Kualitas Manajemen:</strong> Fisher percaya bahwa perusahaan hebat digerakkan oleh manajemen yang jujur, kompeten, dan punya visi jangka panjang untuk terus berinovasi.</li>
            <li><strong>Beli dan Tahan Selamanya:</strong> Jika sebuah perusahaan tetap memiliki fundamental dan prospek pertumbuhan yang kuat, Fisher lebih memilih mempertahankan sahamnya dalam waktu sangat lama, bukan sering berpindah-pindah posisi.</li>
            <li><strong>15 Poin Penilaian Saham:</strong> Fisher menyusun daftar 15 pertanyaan kunci untuk menilai kualitas suatu perusahaan, mulai dari potensi pasar produknya hingga integritas manajemen—kerangka berpikir yang masih relevan digunakan investor hingga kini.</li>
          </ul>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Joel Greenblatt */}
      <div className="mt-8">
        <Link href="/literasi/tokoh-investor-dunia/joel-greenblatt">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 p-4 font-bold shadow-lg shadow-teal-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Joel Greenblatt</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}