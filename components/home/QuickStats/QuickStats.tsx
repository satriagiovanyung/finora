"use client";

import { motion } from "framer-motion";
import { Award, BookOpenText, Target } from "lucide-react";

const stats = [
  { label: "Materi Selesai", value: "12", icon: BookOpenText },
  { label: "Level", value: "Pemula", icon: Award },
  { label: "Target", value: "5/10", icon: Target },
];

export default function QuickStats() {
  return (
    <section className="grid grid-cols-3 gap-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.1 * index, 
              
            }}
            className="flex flex-col items-center justify-center gap-2 rounded-[24px] border border-[rgba(255,255,255,0.05)] bg-[#112A45]/40 py-4 backdrop-blur-sm"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#081626]/60">
              <Icon className="h-4 w-4 text-[#00D4C5]" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-white">{stat.value}</span>
              <span className="text-[9px] uppercase tracking-wider text-[#94A3B8]">
                {stat.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}