"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function KrismonAsiaPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Dashboard */}
      <Link href="/literasi/krisis-finansial-dunia" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Menu Krisis
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/krismon-asia.jpg" // GANTI DENGAN NAMA FILE GAMBAR KRISMON ASIA ANDA
            alt="Ilustrasi Krisis Moneter Asia 1997"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}

        <h1 className="text-2xl font-bold text-amber-400 mb-6">Krisis Moneter Asia (1997)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Tahun 1997 menjadi tahun yang tidak akan pernah dilupakan oleh masyarakat Indonesia. Dimulai dari jatuhnya nilai mata uang Baht Thailand, kepanikan menyebar ke seluruh Asia Tenggara seperti efek domino.
          </p>
          <p>
            Krisis ini dipicu oleh besarnya utang luar negeri dalam mata uang asing (Dolar AS) yang dimiliki perusahaan-perusahaan swasta. Ketika nilai mata uang lokal jatuh, perusahaan-perusahaan ini tidak sanggup membayar utang mereka.
          </p>
          
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-100 my-4">
            <strong>Dampak di Indonesia:</strong><br />
            Nilai Rupiah yang awalnya berada di kisaran Rp2.500 per dolar AS, merosot tajam hingga menyentuh angka Rp16.000 lebih. Harga barang kebutuhan pokok melambung tinggi, ribuan perusahaan bangkrut, dan terjadi krisis sosial-politik yang besar di tanah air.
          </div>
          
          <p>
            Pelajaran berharga dari krisis ini adalah bahaya <strong>Ketidakcocokan Mata Uang (Currency Mismatch)</strong>. Berhutang dalam mata uang asing untuk membiayai usaha domestik adalah risiko yang sangat fatal jika tidak disertai dengan manajemen risiko yang kuat. Krisis ini memaksa Indonesia untuk melakukan reformasi perbankan besar-besaran agar sistem keuangan kita menjadi lebih tangguh di masa depan.
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/krisis-finansial-dunia/krisis-2008">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 p-4 font-bold shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Krisis Finansial 2008</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}