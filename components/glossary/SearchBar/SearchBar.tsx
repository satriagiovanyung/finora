"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    // Tambahkan class: sticky top-4 z-40
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-4 z-40 relative flex w-full items-center"
    >
      <Search className="absolute left-4 h-5 w-5 text-[#94A3B8]" />
      <input
        type="text"
        placeholder="Cari istilah atau materi..."
        className="w-full rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#050D17]/80 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-[#94A3B8] backdrop-blur-md transition-all focus:border-[#00D4C5]/50 focus:outline-none focus:ring-1 focus:ring-[#00D4C5]/50"
      />
    </motion.div>
  );
} 