"use client";

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

interface CategoryFilterProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const categories = [
  "Semua",
  "Dasar Investasi",
  "Saham",
  "Fundamental",
  "Teknikal",
  "Crypto",
  "Reksa Dana",
  "Obligasi",
  "Emas",
  "Properti",
  "Ekonomi",
  "AI",
  "Penipuan Investasi",
];

const categoryConfig: Record<
  string,
  {
    icon: any;
    color: string;
  }
> = {
  Semua: {
    icon: BookOpen,
    color: "bg-slate-600 text-white",
  },

  "Dasar Investasi": {
    icon: Wallet,
    color: "bg-cyan-500 text-white",
  },

  Saham: {
    icon: TrendingUp,
    color: "bg-green-500 text-white",
  },

  Fundamental: {
    icon: BarChart3,
    color: "bg-blue-500 text-white",
  },

  Teknikal: {
    icon: CandlestickChart,
    color: "bg-purple-500 text-white",
  },

  Crypto: {
    icon: Bitcoin,
    color: "bg-orange-500 text-white",
  },

  "Reksa Dana": {
    icon: Wallet,
    color: "bg-pink-500 text-white",
  },

  Obligasi: {
    icon: Landmark,
    color: "bg-amber-500 text-white",
  },

  Emas: {
    icon: Gem,
    color: "bg-yellow-500 text-black",
  },

  Properti: {
    icon: Building2,
    color: "bg-stone-500 text-white",
  },

  Ekonomi: {
    icon: Globe2,
    color: "bg-indigo-500 text-white",
  },

  AI: {
    icon: Bot,
    color: "bg-emerald-500 text-white",
  },

  "Penipuan Investasi": {
    icon: ShieldAlert,
    color: "bg-red-500 text-white",
  },
};

export default function CategoryFilter({
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const Icon = categoryConfig[category].icon;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300

            ${
              selectedCategory === category
                ? `${categoryConfig[category].color} border-transparent shadow-lg scale-105`
                : "border-white/10 bg-[#112A45] text-[#94A3B8] hover:border-[#00D4C5]/40 hover:text-white"
            }`}
          >
            <Icon size={14} />
            {category}
          </button>
        );
      })}
    </div>
  );
}