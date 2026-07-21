"use client";

import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";
import { istilahList } from "@/components/glossary/data/glossaryData";

export default function GlossaryList() {
  return (
    <section className="flex flex-col gap-4 py-6">
      <div>
        <h2 className="text-xl font-bold text-white">
          Glosarium Investasi
        </h2>

        <p className="mt-1 text-sm text-[#94A3B8]">
          {istilahList.length} istilah tersedia
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {istilahList.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#112A45]/40 p-5 backdrop-blur-md transition-all hover:border-[#00D4C5]/30 hover:bg-[#112A45]/60"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#081626]/70">
                <BookMarked className="h-4 w-4 text-[#00D4C5]" />
              </div>

              <div className="flex-1">
                <span className="inline-flex rounded-full bg-[#00D4C5]/10 px-2 py-1 text-[10px] font-medium text-[#00D4C5]">
                  {item.category}
                </span>

                <h3 className="mt-2 text-base font-bold text-white">
                  {item.term}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#94A3B8]">
                  {item.definition}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}