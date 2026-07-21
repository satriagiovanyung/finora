"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const contactChannels = [
{
  title: "Email",
  subtitle: "Kolaborasi & Kemitraan",
  desc: "Hubungi Kami untuk peluang kolaborasi, kemitraan, diskusi proyek, maupun pertanyaan seputar FINORA dan pengembangan solusi digital.",
  link: "mailto:satriagiovan505@gmail.com",
  linkText: "Kirim Email",
  icon: Mail,
  type: "lucide",
},
  {
  title: "Instagram",
  subtitle: "Perjalanan & Inovasi",
  desc: "Ikuti perjalanan FINORA untuk mendapatkan pembaruan proyek, edukasi investasi, pengembangan produk, dan berbagai inovasi yang sedang kami bangun.",
  link: "https://www.instagram.com/finor.a1?igsh=MXF6d2pibWZra3VyZw==",
  linkText: "Kunjungi Instagram",
  type: "insta",
},
  {
  title: "TikTok",
  subtitle: "Edukasi & Insight",
  desc: "Jelajahi konten edukasi investasi, teknologi, serta perjalanan pengembangan FINORA melalui video yang informatif dan mudah dipahami.",
  link: "https://www.tiktok.com/@finora02",
  linkText: "Kunjungi TikTok",
  type: "tiktok",
},
];

export default function HubungiKamiPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white font-sans selection:bg-[#00D4C5]/30 flex flex-col items-center pb-12">
      
      <div className="w-full max-w-2xl mx-auto flex flex-col">
        <div className="px-5 pt-6 space-y-5 w-full">
          
          {/* Hero Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="relative w-full h-[240px] rounded-[24px] overflow-hidden border border-white/5 shadow-lg flex flex-col justify-end"
          >
            <div className="absolute inset-0 bg-[#112A45]">
              <Image
                src="/images/hubungi-kami.jpg"
                alt="Contact Background"
                fill
                priority
                className="object-cover object-center opacity-60"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#081626] via-[#0A1128]/80 to-transparent" />
            
            <div className="absolute top-5 left-5 z-20">
              <Link
                href="/finora"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </Link>
            </div>

            <div className="relative z-10 px-6 pb-6 w-full">
              <h1 className="text-3xl font-bold mb-3 tracking-tight text-white">
                Hubungi Kami
              </h1>
              <div className="w-10 h-1 bg-[#00D4C5] rounded-full" />
            </div>
          </motion.div>

          {/* Contact Channels (Journey Style) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={fadeUpVariant}
            className="bg-gradient-to-b from-[#112A45] to-[#081626] border border-white/5 rounded-[24px] p-6 shadow-lg"
          >
            <h2 className="text-lg font-bold text-white mb-6">Saluran Komunikasi</h2>
            
            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />

              <div className="flex flex-col gap-8">
                {contactChannels.map((item, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#112A45] border-2 border-[#00D4C5] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,212,197,0.3)]">
                      <div className="w-2 h-2 rounded-full bg-[#00D4C5]" />
                    </div>

                    <div className="mb-2">
                      <div className="flex items-center gap-2 mb-1">
                        {item.type === 'lucide' && <item.icon className="w-4 h-4 text-white" />}
                        {item.type === 'insta' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        )}
                        {item.type === 'tiktok' && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                        )}
                        <h3 className="text-md font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-[#00D4C5] text-xs font-medium">{item.subtitle}</p>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.desc}</p>
                    
                    <div className="w-full">
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:text-[#081626] hover:bg-[#00D4C5] hover:border-[#00D4C5] transition-all duration-300"
                      >
                        {item.linkText}
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}