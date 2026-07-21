'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Coins, Landmark } from 'lucide-react';
import Link from 'next/link';

// Definisi tipe data kategori
interface CategoryItem {
  id: string;
  title: string;
  count: number;
  icon: React.ElementType;
  colorClass: string;
  bgClass: string;
  slug: string;
}

// Data statis kategori
const categoriesData: CategoryItem[] = [
  {
    id: 'cat-saham',
    title: 'Saham',
    count: 32,
    icon: TrendingUp,
    colorClass: 'text-[#00D4C5]', // Primary
    bgClass: 'bg-[#00D4C5]/10',
    slug: 'saham',
  },
  {
    id: 'cat-reksadana',
    title: 'Reksa Dana',
    count: 24,
    icon: PieChart,
    colorClass: 'text-[#4DEFE3]', // Accent
    bgClass: 'bg-[#4DEFE3]/10',
    slug: 'reksa-dana',
  },
  {
    id: 'cat-kripto',
    title: 'Aset Kripto',
    count: 18,
    icon: Coins,
    colorClass: 'text-[#FFB938]', // Yellow Warning/Gamification color
    bgClass: 'bg-[#FFB938]/10',
    slug: 'kripto',
  },
  {
    id: 'cat-obligasi',
    title: 'Obligasi',
    count: 12,
    icon: Landmark,
    colorClass: 'text-[#A78BFA]', // Purple for fixed income
    bgClass: 'bg-[#A78BFA]/10',
    slug: 'obligasi',
  },
];

const Categories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="w-full px-6 py-4 mb-6">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-lg font-bold text-finora-white">Jelajahi Topik</h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-3"
      >
        {categoriesData.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div key={category.id} variants={itemVariants}>
              <Link
                href={`/article?category=${category.slug}`}
                className="group flex flex-col items-start justify-center rounded-[20px] border border-finora-border bg-finora-card/50 p-4 transition-all duration-300 hover:border-finora-primary/30 hover:bg-finora-surface hover:shadow-finora-soft"
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-2xl ${category.bgClass} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={20} className={category.colorClass} strokeWidth={2.5} />
                </div>
                <h3 className="mb-0.5 text-sm font-semibold text-finora-white">
                  {category.title}
                </h3>
                <span className="text-[11px] font-medium text-finora-text-secondary">
                  {category.count} Materi
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Categories;