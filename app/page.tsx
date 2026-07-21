"use client";

import Hero from "@/components/home/Hero";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import TopikPopuler from "@/components/home/TopikPopuler";
import LatestArticles from "@/components/home/LatestArticles";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-5 px-6 pt-4 pb-6"> 
      
      {/* Global Header Bar */}
      <div className="flex items-center justify-start mb-1">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D4C5]">
            <span className="font-bold text-[#081626]">F</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">FINORA</span>
        </div>
      </div>

      {/* Komponen lainnya (Hero, Topik, dll) langsung menyusul di bawah Header */}
      <Hero />
      <TopikPopuler />
      <FeaturedArticle />
      <LatestArticles />
      
    </main>
  );
}