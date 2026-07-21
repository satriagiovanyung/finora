"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  BarChart3,
  CandlestickChart,
  Bitcoin,
  Wallet,
  Landmark,
  Gem,
  Building2,
  Globe2,
  Bot,
  ShieldAlert,
} from "lucide-react";

interface GlossaryCardProps {
  term: string;
  definition: string;
  category: string;
  index: number;
}

const categoryConfig: Record<
  string,
  {
    icon: any;
    color: string;
    bg: string;
  }
> = {
  "Dasar Investasi": {
    icon: Wallet,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },

  Saham: {
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },

  Fundamental: {
    icon: BarChart3,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },

  Teknikal: {
    icon: CandlestickChart,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },

  Crypto: {
    icon: Bitcoin,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },

  "Reksa Dana": {
    icon: Wallet,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },

  Obligasi: {
    icon: Landmark,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },

  Emas: {
    icon: Gem,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },

  Properti: {
    icon: Building2,
    color: "text-stone-300",
    bg: "bg-stone-500/10",
  },

  Ekonomi: {
    icon: Globe2,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },

  AI: {
    icon: Bot,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },

  "Penipuan Investasi": {
    icon: ShieldAlert,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
};

export default function GlossaryCard({
  term,
  definition,
  category,
  index,
}: GlossaryCardProps) {
  const config = categoryConfig[category] ?? {
    icon: BookOpen,
    color: "text-slate-300",
    bg: "bg-slate-500/10",
  };

  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      whileHover={{
        y: -3,
      }}
      className="rounded-3xl border border-white/10 bg-[#112A45] p-5 transition-all"
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${config.bg}`}
        >
          <Icon className={`h-6 w-6 ${config.color}`} />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold text-white">{term}</h3>

            <span
              className={`rounded-full px-3 py-1 text-[10px] font-semibold ${config.bg} ${config.color}`}
            >
              {category}
            </span>
          </div>

          <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
            {definition}
          </p>
        </div>
      </div>
    </motion.div>
  );
}