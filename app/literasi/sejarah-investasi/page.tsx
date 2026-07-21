"use client";

import Link from "next/link";
import { 
  ArrowLeft, ChevronRight, Scale, Ship, 
  Building2, PieChart, Smartphone 
} from "lucide-react"; // Ikon Landmark dihapus
import { motion } from "framer-motion";

export default function SejarahInvestasiDashboard() {
  const materiList = [
    { title: "Kode Hammurabi (1700 SM)", desc: "Awal mula sistem kredit dan bunga.", icon: Scale, color: "text-orange-400", href: "/literasi/sejarah-investasi/kode-hammurabi" },
    { title: "Lahirnya Saham & VOC", desc: "Saham pertama di dunia abad ke-17.", icon: Ship, color: "text-emerald-500", href: "/literasi/sejarah-investasi/saham-voc" },
    { title: "Wall Street & Industri", desc: "Pasar modal dan revolusi industri.", icon: Building2, color: "text-blue-400", href: "/literasi/sejarah-investasi/wall-street" },
    { title: "Lahirnya Reksa Dana", desc: "Investasi mulai merakyat di tahun 1924.", icon: PieChart, color: "text-purple-400", href: "/literasi/sejarah-investasi/reksa-dana" },
    { title: "Era Aplikasi Digital", desc: "Investasi di ujung jari abad ke-21.", icon: Smartphone, color: "text-rose-400", href: "/literasi/sejarah-investasi/era-digital" },
  ];

  // Konfigurasi animasi muncul berurutan (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <main className="min-h-screen bg-[#0A1128] p-4 text-white pb-20 font-sans">
      
      {/* Tombol Back ke Menu Utama */}
      <Link href="/" className="mb-6 mt-2 flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white">
        <ArrowLeft size={16} /> Kembali ke Beranda
      </Link>

      {/* Header & Hero Image */}
      <div className="mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-6 h-48 w-full overflow-hidden rounded-xl border border-white/5 shadow-lg sm:h-56"
        >
          <img 
            src="/images/dashboard-sejarah.jpg" // GANTI DENGAN NAMA FILE GAMBAR ANDA
            alt="Ilustrasi Sejarah Investasi"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="mb-2 text-2xl font-bold">Sejarah Investasi</h1>
          <p className="leading-relaxed text-[#94A3B8] text-sm">
            Pilih topik di bawah ini untuk mempelajari bagaimana cara manusia berinvestasi dari masa ke masa.
          </p>
        </motion.div>
      </div>

      {/* List Sub-Materi */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-3 pb-6"
      >
        {materiList.map((materi, index) => (
          <Link key={index} href={materi.href}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 0.98, backgroundColor: "#1E3A5F" }}
              whileTap={{ scale: 0.95 }}
              className="group flex cursor-pointer items-center justify-between rounded-[20px] border border-white/5 bg-[#112A45]/80 p-4 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/5 bg-[#0A1128]/50 transition-colors group-hover:border-white/10">
                  <materi.icon className={`h-5 w-5 ${materi.color}`} />
                </div>
                <div>
                  <h2 className="text-[15px] font-bold text-white transition-colors group-hover:text-[#00D4C5]">{materi.title}</h2>
                  <p className="mt-0.5 text-[11px] leading-snug text-[#94A3B8]">{materi.desc}</p>
                </div>
              </div>
              {/* Animasi panah bergeser saat di-hover */}
              <ChevronRight className="h-5 w-5 text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-[#00D4C5]" />
            </motion.div>
          </Link>
        ))}
      </motion.div>
      
    </main>
  );
}