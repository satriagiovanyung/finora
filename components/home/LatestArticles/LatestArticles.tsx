"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";

export default function LatestArticles() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">
          Update Terbaru
        </h3>

        {/* <button className="text-[10px] font-bold uppercase text-[#00D4C5]">
          Lihat Semua
        </button> */}
      </div>

      <div className="flex flex-col gap-3">
        {articles
  .filter((article) => !article.featured)
  .map((article) => (
          <Link key={article.slug} href={`/artikel/${article.slug}`}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex cursor-pointer items-center gap-3 rounded-[12px] border border-white/10 bg-[#112A45] p-3 hover:border-[#00D4C5]/40 transition"
            >
              <div className="h-16 w-16 overflow-hidden rounded-md">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-[#00D4C5]">
                  {article.category}
                </span>

                <h4 className="mt-1 text-sm font-bold text-white">
                  {article.title}
                </h4>

                <p className="mt-1 text-xs text-[#94A3B8]">
                  {article.readTime}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}