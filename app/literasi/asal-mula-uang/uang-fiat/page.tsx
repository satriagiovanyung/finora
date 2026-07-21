"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function UangFiatPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Dashboard */}
      <Link href="/literasi/asal-mula-uang" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Asal Mula Uang
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/uang-fiat.jpg" // GANTI DENGAN NAMA FILE GAMBAR UANG FIAT ANDA
            alt="Ilustrasi Uang Fiat"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi gelap agar gambar menyatu dengan background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/40 to-transparent"></div>
        </div>
        {/* ---------------------------------------- */}
        
        <h1 className="text-2xl font-bold text-emerald-400 mb-6">Uang Fiat (1971)</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Selama berabad-abad, uang kertas yang beredar di masyarakat selalu dijamin oleh cadangan emas fisik (sistem ini disebut <strong>Standar Emas</strong>). Artinya, Anda selalu bisa menukarkan uang kertas Anda dengan emas yang setara di bank sentral.
          </p>
          <p>
            Namun, sejarah berubah drastis pada <strong>15 Agustus 1971</strong>. Presiden Amerika Serikat saat itu, Richard Nixon, secara sepihak membatalkan sistem Standar Emas untuk Dolar AS (peristiwa ini dikenal sebagai <i>Nixon Shock</i>).
          </p>
          
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 my-4">
            <strong>Apa itu Uang Fiat?</strong><br />
            Sejak saat itu, dunia menggunakan <strong>Uang Fiat</strong>. Kata "Fiat" berasal dari bahasa Latin yang berarti <i>"Biarlah terjadi"</i> atau <i>"Keputusan"</i>. Nilai uang Fiat tidak lagi didukung oleh emas, melainkan didukung murni oleh <strong>kepercayaan masyarakat dan jaminan pemerintah</strong>.
          </div>
          
          <p>
            Rupiah, Dolar, Yen, dan hampir seluruh mata uang negara yang kita gunakan saat ini adalah Uang Fiat. Selembar uang Rp100.000 bernilai seratus ribu bukan karena kertasnya berharga, melainkan karena pemerintah dan hukum menyatakan itu sah, dan kita semua memercayainya.
          </p>
          <p>
            Kelemahannya? Karena tidak lagi terikat pada emas fisik yang langka, pemerintah bisa mencetak uang ini sebanyak yang mereka mau. Jika uang dicetak terlalu banyak, nilainya akan merosot dan terjadilah <strong>Inflasi</strong> (harga barang menjadi naik).
          </p>
        </div>
      </motion.div>

      {/* Tombol Lanjut ke Materi Berikutnya */}
      <div className="mt-8">
        <Link href="/literasi/asal-mula-uang/era-digital">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 p-4 font-bold shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Lanjut: Era Digital & Kripto</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}