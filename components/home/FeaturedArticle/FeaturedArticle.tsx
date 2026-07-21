"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { articles } from "@/data/articles";

export default function FeaturedArticle() {
  const article = articles.find((item) => item.featured);

  if (!article) return null;

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">
          Artikel Pilihan
        </h3>

        <span className="text-[11px] font-medium text-[#94A3B8]">
          Terbaru
        </span>
      </div>

      <Link href={`/artikel/${article.slug}`}>
        <motion.article
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.2 }}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#112A45] shadow-lg shadow-black/20 hover:border-[#00D4C5]/30"
        >
          <div className="relative h-40 w-full overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#081626] via-[#081626]/30 to-transparent" />

            <span className="absolute left-4 top-4 rounded-full border border-[#00D4C5]/20 bg-[#00D4C5]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#00D4C5]">
              {article.category}
            </span>

            <div className="absolute bottom-3 right-4 flex items-center gap-1 text-[11px] text-white/80">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </div>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-xl font-bold text-white group-hover:text-[#00D4C5]">
              {article.title}
            </h2>

            <p className="line-clamp-2 text-sm text-[#94A3B8]">
              {article.content[0].paragraphs[0]}
            </p>

            <div className="mt-2 flex w-fit items-center gap-1.5 rounded-xl bg-[#00D4C5] px-4 py-2 text-sm font-semibold text-[#081626]">
              Baca Sekarang
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </motion.article>
      </Link>
    </section>
  );
}