"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Info, Heart, Users, ChevronRight, HeartHandshake, Headphones, MessageCircle 
} from "lucide-react";

const finoraMenus = [
  { title: "Tentang Finora", description: "Pelajari visi, misi, dan tujuan aplikasi Finora.", icon: Info, color: "text-blue-500", href: "/finora/tentang" },
  { title: "Dukung Finora", description: "Bantu kami terus berkembang memberikan edukasi.", icon: Heart, color: "text-pink-500", href: "/finora/dukung" },
  { title: "Program Berbagi", description: "50% dari nominal dukungan disalurkan kepada yang butuh.", icon: HeartHandshake, color: "text-orange-500", href: "/finora/berbagi" },
  { title: "Founder Finora", description: "Kenalan dengan tim pengembang di balik Finora.", icon: Users, color: "text-purple-500", href: "/finora/founder" },
  { title: "Hubungi Kami", description: "Sampaikan kritik, saran, atau peluang kolaborasi.", icon: Headphones, color: "text-emerald-400", href: "/finora/hubungikami" },
  { title: "Gabung Komunitas", description: "Diskusi, tanya jawab, dan berbagi portofolio.", icon: MessageCircle, color: "text-red-500", href: "/finora/komunitas" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function FinoraPage() {
  return (
    // pb-12 mengurangi ruang bawah agar lebih rapat
    <main className="min-h-screen bg-[#0A1128] p-4 pb-12 font-sans text-white">
      
      {/* Hero Section dengan Judul & Subtitle di dalam gambar */}
      <div className="mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-6 h-48 w-full overflow-hidden rounded-xl border border-white/5 shadow-lg sm:h-56"
        >
          <img 
            src="/images/finora-hero.jpg" 
            alt="Finora App"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent"></div>

          {/* Judul & Subtitle di dalam hero gambar */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h1 className="mb-1 text-2xl font-bold text-white">Finora</h1>
            <p className="text-sm leading-relaxed text-slate-300 max-w-[90%]">
              Pusat Informasi & Dukungan untuk perjalanan finansial Anda.
            </p>
          </div>
        </motion.div>
      </div>

      {/* List Menu - mb-2 membuat jarak lebih rapat dengan navigasi bawah */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-3 mb-2"
      >
        {finoraMenus.map((menu, index) => {
          const Icon = menu.icon;
          return (
            <Link key={index} href={menu.href}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 0.98, backgroundColor: "#1E3A5F" }}
                whileTap={{ scale: 0.95 }}
                className="group flex cursor-pointer items-center justify-between rounded-[20px] border border-white/5 bg-[#112A45]/80 p-4 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/5 bg-[#0A1128]/50 transition-colors group-hover:border-white/10">
                    <Icon className={`h-5 w-5 ${menu.color}`} />
                  </div>
                  <div>
                    <h2 className="text-[15px] font-bold text-white transition-colors group-hover:text-[#00D4C5]">{menu.title}</h2>
                    <p className="mt-0.5 text-[11px] leading-snug text-[#94A3B8]">{menu.description}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-[#00D4C5]" />
              </motion.div>
            </Link>
          );
        })}
      </motion.section>

    </main>
  );
}