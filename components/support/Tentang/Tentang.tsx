"use client";

import { motion } from "framer-motion";
import { Heart, Coffee, ExternalLink } from "lucide-react";

export default function Dukung() {
  return (
    <section className="flex flex-col gap-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#112A45]/40 p-6 backdrop-blur-md"
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E11D48]/20 blur-3xl" />

        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E11D48]/10 text-[#E11D48]">
            <Heart className="h-8 w-8 fill-[#E11D48]" />
          </div>
          
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">Dukung FINORA</h2>
            <p className="text-sm text-[#94A3B8]">
              Bantu kami terus mengembangkan materi edukasi yang berkualitas.
            </p>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E11D48] py-3 text-sm font-bold text-white transition-all hover:bg-[#E11D48]/90 active:scale-[0.98]">
            <Coffee className="h-4 w-4" /> Traktir Kopi
          </button>
        </div>
      </motion.div>
    </section>
  );
}