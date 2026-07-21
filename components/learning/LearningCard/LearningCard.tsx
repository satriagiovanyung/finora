"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface LearningCardProps {
  id: string;
  number: string;
  title: string;
  description: string;
  lessonCount: number;
  image: string;
  color: string;
}

export const LearningCard = ({
  id,
  number,
  title,
  description,
  lessonCount,
  image,
}: LearningCardProps) => {
  return (
    <Link href={`/learning/${id}`} className="block">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#112A45] p-3 shadow-md transition-all hover:border-[#00D4C5]/40 hover:shadow-lg"
      >
        {/* Gambar */}
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Konten */}
        <div className="flex flex-1 flex-col">

          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[#00D4C5]/10 px-2 py-0.5 text-[10px] font-bold text-[#00D4C5]">
              BAB {number}
            </span>

            <ChevronRight
              size={16}
              className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
            />
          </div>

          <h3 className="mt-1 text-sm font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">
            {description}
          </p>

          <span className="mt-2 w-fit rounded-full bg-white/5 px-2 py-1 text-[10px] font-semibold text-[#00D4C5]">
            {lessonCount} Materi
          </span>

        </div>
      </motion.div>
    </Link>
  );
};