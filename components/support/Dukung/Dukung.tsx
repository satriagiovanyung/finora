"use client";

import { motion } from "framer-motion";
import { Heart, DollarSign, Mail, Users } from "lucide-react";

export default function Dukung() {
  const supportOptions = [
    { title: "Donasi", icon: DollarSign, desc: "Bantu operasional server." },
    { title: "Sponsor", icon: Heart, desc: "Jadilah mitra FINORA." },
    { title: "Kontributor", icon: Users, desc: "Bantu menulis materi." },
    { title: "GitHub", icon: Github, desc: "Bantu kembangkan kode." },
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