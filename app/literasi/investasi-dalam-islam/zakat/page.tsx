"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react"; // Ikon HeartHandshake dihapus
import { motion } from "framer-motion";

export default function ZakatInvestasiPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Dashboard */}
      <Link href="/literasi/investasi-dalam-islam" className="flex items-center gap-2 text-sm text-gray-400 mb-6 mt-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Kembali ke Investasi Syariah
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] bg-[#112A45]/50 p-6 border border-white/5 relative overflow-hidden"
      >
        
        {/* --- HERO GAMBAR --- */}
        <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-white/5">
          <img 
            src="/images/zakat-investasi.jpg" // GANTI DENGAN NAMA FILE GAMBAR ANDA
            alt="Ilustrasi Zakat Investasi"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradasi yang disesuaikan dengan warna background card (#112A45) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112A45] via-[#112A45]/50 to-transparent"></div>
        </div>
        
        <h1 className="text-2xl font-bold text-amber-400 mb-6">Zakat Investasi</h1>
        
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            Dalam Islam, kekayaan yang berkembang wajib disisihkan untuk membersihkan harta dan membantu mereka yang membutuhkan. Begitu pula dengan hasil dari investasi Anda.
          </p>
          <p>
            Zakat investasi adalah zakat yang dikeluarkan dari hasil atau keuntungan yang diperoleh dari aset produktif, seperti saham, reksa dana, sukuk, atau properti yang disewakan.
          </p>
          
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-100 my-4">
            <strong>Ketentuan Umum:</strong><br />
            Secara umum, zakat investasi dikeluarkan sebesar <strong>2,5%</strong> dari hasil keuntungan (setelah dikurangi biaya operasional) jika sudah mencapai nisab (batas minimal wajib zakat) dan telah mencapai haul (telah tersimpan selama satu tahun).
          </div>
          
          <p>
            Mengapa kita harus membayar zakat dari hasil investasi?
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Membersihkan Harta:</strong> Zakat berfungsi menyucikan keuntungan yang kita peroleh dari hal-hal yang mungkin luput dari pandangan kita.</li>
            <li><strong>Menjaga Keberkahan:</strong> Harta yang dikeluarkan zakatnya akan menjadi berkah dan insya Allah akan mendatangkan rezeki yang lebih baik di masa depan.</li>
            <li><strong>Pemerataan Ekonomi:</strong> Investasi yang sukses tidak boleh dinikmati sendiri, tetapi harus berdampak bagi kesejahteraan masyarakat luas.</li>
          </ul>
          
          <p className="mt-4 text-xs text-gray-500">
            *Catatan: Konsultasikan selalu dengan lembaga zakat terpercaya atau ahli syariah mengenai perhitungan zakat yang spesifik sesuai dengan jenis aset investasi yang Anda miliki.
          </p>
        </div>
      </motion.div>

      {/* Tombol Selesai Membaca */}
      <div className="mt-8">
        <Link href="/literasi/investasi-dalam-islam">
          <button className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 p-4 font-bold shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform text-white">
            <span>Selesai Membaca</span>
            <CheckCircle className="h-5 w-5" />
          </button>
        </Link>
      </div>

    </main>
  );
}