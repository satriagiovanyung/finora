"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Send, ExternalLink } from "lucide-react";

// Animasi standar FINORA
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5} 
  },
};

// Data fasilitas komunitas (Tanpa Ikon)
const benefits = [
  {
    title: "Ruang Diskusi Terbuka",
    desc: "Tempat santai untuk bertukar pikiran dan pengalaman seputar belajar investasi.",
  },
  {
    title: "Berbagi Informasi",
    desc: "Saling berbagi berita terkini dan perkembangan kondisi pasar finansial.",
  },
  {
    title: "Bahan Belajar Tambahan",
    desc: "Akses ke modul atau referensi bacaan yang dibagikan oleh sesama anggota.",
  },
  {
    title: "Sesi Obrolan Suara",
    desc: "Obrolan santai berbasis suara (Voice Chat) untuk membahas topik tertentu.",
  },
  {
    title: "Membangun Relasi",
    desc: "Temukan teman diskusi dari berbagai latar belakang untuk saling memotivasi.",
  },
  {
    title: "Lingkungan yang Nyaman",
    desc: "Grup dipantau oleh moderator agar diskusi tetap sehat dan sesuai dengan topik.",
  },
];

export default function KomunitasPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white font-sans selection:bg-[#00D4C5]/30 flex flex-col items-center pb-12">
      
      {/* Mobile-First Container */}
      <div className="w-full max-w-2xl mx-auto flex flex-col">
        <div className="px-5 pt-6 space-y-5 w-full">
          
          {/* 1. Hero Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="relative w-full h-[240px] rounded-[24px] overflow-hidden border border-white/5 shadow-lg flex flex-col justify-end"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[#112A45]">
              <Image
                src="/images/community-hero-bg.jpg" // Pastikan gambar ini tersedia di folder public
                alt="Komunitas Background"
                fill
                priority
                className="object-cover object-center opacity-60"
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081626] via-[#0A1128]/80 to-transparent" />
            
            {/* Back Button */}
            <div className="absolute top-5 left-5 z-20">
              <Link
                href="/finora"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </Link>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 px-6 pb-6 w-full">
              <h1 className="text-3xl font-bold mb-3 tracking-tight text-white flex items-center gap-2">
                Komunitas
              </h1>
              <div className="w-10 h-1 bg-[#00D4C5] rounded-full" />
            </div>
          </motion.div>

          {/* 2. Fasilitas & Manfaat (Journey / Timeline Layout) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUpVariant}
            className="bg-gradient-to-b from-[#112A45] to-[#081626] border border-white/5 rounded-[24px] p-6 shadow-lg"
          >
            <h2 className="text-lg font-bold text-white mb-6">Manfaat Bergabung</h2>
            
            <div className="relative">
              {/* Garis vertikal timeline */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />

              <div className="flex flex-col gap-8">
                {benefits.map((item, idx) => (
                  <div key={idx} className="relative pl-10">
                    {/* Node/Titik pada timeline */}
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#112A45] border-2 border-[#00D4C5] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,212,197,0.3)]">
                      <div className="w-2 h-2 rounded-full bg-[#00D4C5]" />
                    </div>

                    <div className="mb-1">
                      <h3 className="text-md font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Intro & Join Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUpVariant}
            className="bg-gradient-to-b from-[#112A45] to-[#081626] border border-white/5 rounded-[24px] p-6 md:p-8 shadow-lg flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Glow Background Indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#229ED9]/10 blur-[50px] rounded-full pointer-events-none" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#229ED9] to-[#1C88BA] shadow-lg shadow-[#229ED9]/20 mb-5">
              <Send className="h-7 w-7 text-white ml-1" />
            </div>

            <h2 className="text-xl font-bold text-white mb-3">
              Bergabung Bersama Kami
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Wadah berkumpulnya para pengguna FINORA untuk saling berinteraksi, berdiskusi, dan berbagi informasi seputar pembelajaran finansial.
            </p>

            <a 
              href="https://t.me/+hyWzekx-MQ5iMTJl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full max-w-[280px] py-3.5 bg-[#229ED9] rounded-xl text-sm font-bold text-white hover:bg-[#1C88BA] hover:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#229ED9]/20"
            >
              <Send className="h-4 w-4" />
              Menuju Grup Telegram
              <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
            </a>
          </motion.div>

        </div>
      </div>
    </main>
  );
}