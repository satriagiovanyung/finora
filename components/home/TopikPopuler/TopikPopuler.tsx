"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Coins,
  Landmark,
  Scale,
  Globe,
  User,
  Bitcoin,
} from "lucide-react";

const topics = [
  { name: "Asal Mula Uang", icon: Coins, color: "text-yellow-500", href: "/literasi/asal-mula-uang" },
  { name: "Sejarah Investasi", icon: Landmark, color: "text-emerald-500", href: "/literasi/sejarah-investasi" },
  { name: "Investasi dalam Islam", icon: Scale, color: "text-green-500", href: "/literasi/investasi-dalam-islam" },
  { name: "Krisis Finansial Dunia", icon: Globe, color: "text-blue-500", href: "/literasi/krisis-finansial-dunia" },
  { name: "Tokoh Investor Dunia", icon: User, color: "text-purple-500", href: "/literasi/tokoh-investor-dunia" },
  { name: "Lahirnya Bitcoin", icon: Bitcoin, color: "text-orange-500", href: "/literasi/lahirnya-bitcoin" },
];

export default function TopikPopuler() {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-lg font-bold text-white">Literasi Investasi</h3>
      
      <div className="grid grid-cols-3 gap-3">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Link key={topic.name} href={topic.href} className="block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // Tetap kotak dengan rounded-[12px], diganti menjadi div agar tidak error saat dibungkus Link
                className="flex h-full flex-col items-center justify-center gap-2 rounded-[12px] bg-[#112A45] p-3 border border-[rgba(255,255,255,0.05)] cursor-pointer hover:border-[#00D4C5]/30 transition-colors"
              >
                {/* Ikon dengan warna dinamis */}
                <Icon className={`h-6 w-6 ${topic.color}`} />
                <span className="text-[10px] font-medium text-center text-white">{topic.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}