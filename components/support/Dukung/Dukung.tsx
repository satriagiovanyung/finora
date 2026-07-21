"use client";

import { motion } from "framer-motion";
import { Heart, DollarSign, Mail, Users } from "lucide-react";

const GithubIcon = (props: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Dukung() {
  const supportOptions = [
    { title: "Donasi", icon: DollarSign, desc: "Bantu operasional server." },
    { title: "Sponsor", icon: Heart, desc: "Jadilah mitra FINORA." },
    { title: "Kontributor", icon: Users, desc: "Bantu menulis materi." },
    { title: "GitHub", icon: GithubIcon, desc: "Bantu kembangkan kode." },
    { title: "Email", icon: Mail, desc: "Hubungi kami." },
  ];

  return (
    <section className="flex flex-col gap-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white">Dukung FINORA</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
          FINORA adalah proyek independen. Dukungan Anda membantu kami menjaga platform ini tetap gratis dan berkualitas untuk siapa saja.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4">
        {supportOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <motion.button
              key={option.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="flex w-full items-center gap-4 rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#112A45]/40 p-5 text-left transition-all hover:bg-[#112A45] hover:border-[#00D4C5]/30 active:scale-[0.98]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#081626]/60">
                <Icon className="h-6 w-6 text-[#00D4C5]" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{option.title}</h3>
                <p className="text-xs text-[#94A3B8]">{option.desc}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}