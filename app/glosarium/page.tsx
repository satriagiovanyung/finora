"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { istilahList } from "@/components/glossary/data/glossaryData";

export default function GlosariumPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

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

  const categoryColors: Record<string, string> = {
    Semua: "bg-slate-700 text-slate-200 border-slate-600",
    "Dasar Investasi": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    Saham: "bg-green-500/20 text-green-300 border-green-500/40",
    Fundamental: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    Teknikal: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    Crypto: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    "Reksa Dana": "bg-pink-500/20 text-pink-300 border-pink-500/40",
    Obligasi: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    Emas: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
    Properti: "bg-stone-500/20 text-stone-300 border-stone-500/40",
    Ekonomi: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    AI: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    "Penipuan Investasi": "bg-red-500/20 text-red-300 border-red-500/40",
  };

  const filtered = useMemo(() => {
    return istilahList.filter((item) => {
      const keyword =
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase());

      const category =
        selectedCategory === "Semua" ||
        item.category === selectedCategory;

      return keyword && category;
    });
  }, [search, selectedCategory]);

  return (
    // pb-20 disesuaikan agar tidak menabrak bottom navigation
    <main className="min-h-screen bg-[#0A1128] px-4 pb-20 text-white font-sans">
      
      {/* Bagian Atas (Tidak Sticky) - Hero Image dengan Judul & Subtitle di dalamnya */}
      <div className="pt-6 mb-2">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-white/5 shadow-lg"
        >
          <img 
            src="/images/glosarium-hero.jpg" // PASTIKAN GAMBAR INI ADA DI FOLDER public/images/
            alt="Ilustrasi Kamus Glosarium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent"></div>

          {/* Judul & Subtitle di dalam hero gambar */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h1 className="text-xl font-bold text-white">Glosarium</h1>
            <p className="text-xs text-slate-300 mt-1">
              {istilahList.length} istilah tersedia
            </p>
          </div>
        </motion.div>
      </div>

      {/* Header Sticky (Search, Filter) */}
      {/* Ditambahkan backdrop-blur agar terlihat premium saat di-scroll */}
      <div className="sticky top-0 z-20 bg-[#0A1128]/95 backdrop-blur-sm py-4 -mx-4 px-4 border-b border-white/5 shadow-sm">
        {/* Search */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            size={18}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari istilah..."
            className="w-full rounded-xl border border-white/10 bg-[#112A45] py-3 pl-10 pr-4 text-sm text-white outline-none transition focus:border-[#00D4C5]"
          />
        </motion.div>

        {/* Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === category
                  ? categoryColors[category]
                  : "border-white/10 bg-[#112A45] text-[#94A3B8] hover:bg-[#1E3A5F]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* List Hasil Pencarian */}
      <section className="mt-4 flex flex-col gap-3">
        {filtered.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl border border-white/10 bg-[#112A45] p-6 text-center text-[#94A3B8]"
          >
            Tidak ada istilah ditemukan untuk <span className="font-bold text-white">&ldquo;{search}&rdquo;</span>.
          </motion.div>
        ) : (
          filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 0.98, backgroundColor: "#162D4A" }} // Efek interaktif
              transition={{ delay: index * 0.02, type: "spring", stiffness: 100 }}
              className="rounded-2xl border border-white/10 bg-[#112A45]/80 p-5 cursor-pointer transition-colors"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-bold text-[#00D4C5]">
                  {item.term}
                </h3>

                <span
                  className={`rounded-full border px-2 py-1 text-[10px] font-semibold ${
                    categoryColors[item.category] ??
                    "bg-slate-500/20 text-slate-300 border-slate-500/40"
                  }`}
                >
                  {item.category}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[#94A3B8]">
                {item.definition}
              </p>
            </motion.div>
          ))
        )}
      </section>
    </main>
  );
}