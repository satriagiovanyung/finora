"use client";

import { motion } from "framer-motion";
import { ChevronLeft, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { categoryDetails } from "@/data/category-details";

// Warna kartu
const cardColors = [
  { iconBg: "bg-blue-500/15", iconText: "text-blue-400", hoverBorder: "hover:border-blue-500/50", arrow: "text-blue-400" },
  { iconBg: "bg-emerald-500/15", iconText: "text-emerald-400", hoverBorder: "hover:border-emerald-500/50", arrow: "text-emerald-400" },
  { iconBg: "bg-purple-500/15", iconText: "text-purple-400", hoverBorder: "hover:border-purple-500/50", arrow: "text-purple-400" },
  { iconBg: "bg-amber-500/15", iconText: "text-amber-400", hoverBorder: "hover:border-amber-500/50", arrow: "text-amber-400" },
  { iconBg: "bg-pink-500/15", iconText: "text-pink-400", hoverBorder: "hover:border-pink-500/50", arrow: "text-pink-400" },
];

export default function CategoryDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const category = categoryDetails.find(
    (cat) => cat.id === params.categoryId
  );

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-finora-bg text-white">
        <div className="text-center">
          <h1 className="text-xl font-bold">
            Kategori tidak ditemukan
          </h1>

          <button
            onClick={() => router.back()}
            className="mt-4 text-[#00D4C5]"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-finora-bg text-white">

      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/5 bg-finora-bg/95 px-5 py-4 backdrop-blur-md">

        <button onClick={() => router.back()}>
          <ChevronLeft size={26} />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
          {category.title}
        </h1>

        <div className="w-6" />
      </header>

      <main className="px-5 py-6">
<div className="relative mb-8 h-48 overflow-hidden rounded-2xl">
<img
  src={category.banner} 
  alt={category.title}
  className="h-full w-full object-cover"
/>

  <div className="absolute inset-0 bg-gradient-to-t from-[#081626] via-black/20 to-transparent" />

  <div className="absolute bottom-5 left-5">
    <h2 className="text-2xl font-bold text-white">
      {category.title}
    </h2>


  </div>
</div>


        <div className="space-y-5">

          {category.materials.map((item, index) => {
            const theme = cardColors[index % cardColors.length];

            return (
              <Link
                key={item.id}
                href={`/learning/${category.id}/${item.id}`}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`group mb-4 flex items-center justify-between rounded-2xl border border-white/5 bg-[#112A45] p-4 shadow-lg transition-all hover:-translate-y-0.5 ${theme.hoverBorder}`}
                >
                  <div className="flex items-center gap-1">

                    <div
                      className={`rounded-lg p-2 ${theme.iconBg} ${theme.iconText}`}
                    >
                      <FileText size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-400">
                        {item.time}
                      </p>
                    </div>

                  </div>

                  <ChevronRight
                    size={20}
                    className={`${theme.arrow} transition group-hover:translate-x-1`}
                  />
                </motion.div>
              </Link>
            );
          })}

        </div>

      </main>
    </div>
  );
}