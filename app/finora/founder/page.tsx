"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Compass } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5} 
  },
};

const projects = [
  {
    title: "FINORA",
    subtitle: "Digital Investment Handbook",
    desc: "Platform edukasi investasi yang menyediakan artikel, learning path, glosarium, serta materi investasi untuk meningkatkan literasi keuangan masyarakat.",
  },
  {
    title: "NeuraTrade",
    subtitle: "AI Trading Signal Platform",
    desc: "Platform berbasis Machine Learning yang dikembangkan untuk menghasilkan sinyal trading saham menggunakan data historis dan Feature Engineering.",
  },
  {
    title: "Nura Rumah Preloved",
    subtitle: "Sustainable Marketplace",
    desc: "Marketplace barang preloved yang berfokus pada kualitas, kepercayaan, dan keberlanjutan melalui konsep ekonomi sirkular.",
    link: "https://nura-preloved.vercel.app/", // Ganti "#" dengan URL website NURA
    linkText: "Kunjungi NURA"
  },
];

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white font-sans selection:bg-[#00D4C5]/30 flex flex-col items-center">
      
      {/* Mobile-First Container */}
      <div className="w-full max-w-2xl mx-auto flex flex-col">
        
        {/* Content Section (Stacked Cards) */}
        <div className="px-5 pt-6 pb-2 space-y-5 w-full">
          
          {/* 0. Hero Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="relative w-full h-[240px] rounded-[24px] overflow-hidden border border-white/5 shadow-lg flex flex-col justify-end"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[#112A45]">
              <Image
                src="/images/founder1.jpg" // Pastikan gambar ini tersedia di public/images/
                alt="Founder Background"
                fill
                priority
                className="object-cover object-center opacity-80"
              />
            </div>
            
            {/* Gradient Overlay (Efek kabut diturunkan drastis agar gambar lebih jelas) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081626] via-[#081626]/20 to-transparent" />
            
            {/* Back Button diarahkan ke /finora */}
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
              <h1 className="text-3xl font-bold mb-3 tracking-tight text-white drop-shadow-md">
                Founder
              </h1>
              <div className="w-10 h-1 bg-[#00D4C5] rounded-full shadow-[0_0_8px_#00D4C5]" />
            </div>
          </motion.div>

          {/* 1. About Founder Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUpVariant}
            className="bg-gradient-to-b from-[#112A45] to-[#081626] border border-white/5 rounded-[24px] p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-white mb-5">About Founder</h2>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-[#00D4C5]">Satria Giovan</h3>
              <p className="text-gray-400 text-sm font-medium mt-1">Founder</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Saya memiliki latar belakang dan minat mendalam pada Business Analysis, Artificial Intelligence, Financial Technology, Machine Learning, dan Web Development. Saya percaya bahwa teknologi dapat menjadi sarana untuk memberikan manfaat nyata melalui edukasi, inovasi, dan solusi digital yang berkelanjutan.
            </p>
          </motion.div>

          {/* 2. Projects in Development Card (Journey Layout) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUpVariant}
            className="bg-gradient-to-b from-[#112A45] to-[#081626] border border-white/5 rounded-[24px] p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-white mb-6">Projects in Development</h2>
            
            <div className="relative">
              {/* Garis vertikal timeline */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />

              <div className="flex flex-col gap-8">
                {projects.map((project, idx) => (
                  <div key={idx} className="relative pl-10">
                    {/* Node/Titik pada timeline */}
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#112A45] border-2 border-[#00D4C5] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,212,197,0.3)]">
                      <div className="w-2 h-2 rounded-full bg-[#00D4C5]" />
                    </div>

                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-[#00D4C5] text-xs font-medium">{project.subtitle}</p>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    
                    {/* Render tombol jika ada link */}
                    {project.link && (
                      <div className="mt-5 w-full flex justify-center">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:text-[#081626] hover:bg-[#00D4C5] hover:border-[#00D4C5] transition-all duration-300"
                        >
                          {project.linkText}
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Vision Card (Professional Style) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUpVariant}
            className="bg-gradient-to-b from-[#112A45] to-[#081626] border border-white/5 rounded-[24px] p-6 shadow-lg relative overflow-hidden"
          >
            {/* Elegant Top Border Accent */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#00D4C5]/50 to-transparent" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#00D4C5]/10 rounded-lg">
                <Compass className="w-5 h-5 text-[#00D4C5]" />
              </div>
              <h2 className="text-lg font-bold text-white tracking-wide uppercase">Vision</h2>
            </div>
            
            <div className="border-l-2 border-[#00D4C5]/30 pl-4 py-1 mt-2">
              <p className="text-gray-300 text-sm leading-relaxed italic font-light">
                "Membangun solusi digital yang menggabungkan teknologi, edukasi, dan inovasi untuk memberikan manfaat nyata bagi masyarakat."
              </p>
            </div>
          </motion.div>

          {/* 4. Thank You Card (Professional Style) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUpVariant}
            className="bg-gradient-to-b from-[#081626] to-[#112A45] border border-white/10 rounded-[24px] p-8 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-10 h-1 bg-[#00D4C5] rounded-full mb-5" />
            <h2 className="text-2xl font-bold text-white mb-3">Thank You</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Terima kasih telah meluangkan waktu untuk mengenal perjalanan di balik FINORA. Setiap dukungan, kepercayaan, dan apresiasi yang diberikan menjadi semangat bagi kami untuk terus belajar, berinovasi, dan menghadirkan solusi digital yang memberikan manfaat nyata bagi masyarakat.
            </p>
          </motion.div>
          
        </div>

        {/* Custom Footer */}
        <footer className="w-full text-center pb-8 pt-4 px-6">
          <div className="space-y-6">
            
            {/* Footer Message */}
            <div className="space-y-1">
              <p className="text-white text-[13px] font-medium">
                Thank you for exploring the journey behind FINORA.
              </p>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[280px] mx-auto">
                Building digital solutions through technology, education, and innovation.
              </p>
            </div>

            {/* Developer Info */}
            <div className="space-y-0.5">
              <p className="text-gray-500 text-[11px] font-medium">Designed & Developed by</p>
              <p className="text-[#00D4C5] text-sm font-bold">Satria Giovan</p>
              <p className="text-gray-500 text-[9px] tracking-widest uppercase mt-0.5">Founder & Developer</p>
            </div>

            {/* Copyright */}
            <div className="pt-1">
              <p className="text-gray-600 text-[11px] font-medium">
                © 2026 FINORA. All rights reserved.
              </p>
            </div>

          </div>
        </footer>

      </div>
    </main>
  );
}