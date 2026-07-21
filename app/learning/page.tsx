"use client";

import { LearningCard } from "@/components/learning/LearningCard/LearningCard";
import { learningPaths } from "@/data/learningPath";
import { motion } from "framer-motion";

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-finora-bg">
      <main className="flex-1 overflow-y-auto px-5 pt-6 pb-6 no-scrollbar">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-6 h-48 overflow-hidden rounded-xl border border-white/5 shadow-lg sm:h-56"
        >
          <img
            src="/images/learning-hero.jpg"
            alt="Learning Hero"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-1">
            <h2 className="text-xl font-bold text-white">
              Pilih Jalur Belajar
            </h2>

          
          </div>
        </motion.div>

        {/* Learning Path */}
        <div className="space-y-4">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <LearningCard
                id={path.id}
                number={path.number}
                title={path.title}
                description={path.description}
                lessonCount={path.lessonCount}
                image={path.image}
                color={path.color}
              />
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}