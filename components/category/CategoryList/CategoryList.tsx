"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  TrendingUp, 
  PieChart, 
  FileText, 
  CircleDollarSign, 
  Bitcoin, 
  Building, 
  BookOpenText, 
  LineChart 
} from "lucide-react";

// Data Kategori
const categories = [
  { id: "saham", title: "Saham", count: "32 Materi", icon: TrendingUp },
  { id: "reksadana", title: "Reksadana", count: "18 Materi", icon: PieChart },
  { id: "obligasi", title: "Obligasi", count: "12 Materi", icon: FileText },
  { id: "emas", title: "Emas", count: "10 Materi", icon: CircleDollarSign },
  { id: "crypto", title: "Crypto", count: "15 Materi", icon: Bitcoin },
  { id: "properti", title: "Properti", count: "8 Materi", icon: Building },
  { id: "fundamental", title: "Fundamental", count: "20 Materi", icon: BookOpenText },
  { id: "teknikal", title: "Teknikal", count: "25 Materi", icon: LineChart },
];

export default function CategoryList() {
  return (
    <section className="flex flex-col gap-3 py-6">
      {categories.map((cat, index) => {
        const Icon = cat.icon;
        return (
          <Link key={cat.id} href={`/kategori/${cat.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.05 * index, 
                ease: "easeOut" 
              }}
              className="group flex items-center justify-between rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#112A45]/40 p-5 backdrop-blur-sm transition-all hover:bg-[#112A45] hover:border-[#00D4C5]/30 active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081626]/60">
                  <Icon className="h-6 w-6 text-[#00D4C5]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-white">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-[#94A3B8]">
                    {cat.count}
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </section>
  );
}