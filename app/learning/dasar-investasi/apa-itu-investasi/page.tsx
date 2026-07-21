"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleSummary from "@/components/article/ArticleSummary";
import ArticleNavigation from "@/components/article/ArticleNavigation";

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#050e19] font-sans pb-28 selection:bg-[#00D4C5]/30 selection:text-white">
      <ArticleHeader />

      <main className="px-5">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5,  }}
        >
          {/* Badge & Metadata */}
          <div className="mt-6 mb-4">
            <span className="inline-block px-3 py-1 bg-[#00D4C5] text-[#050e19] text-xs font-bold rounded-full tracking-wide">
              Dasar Investasi
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-white leading-tight tracking-tight mb-3">
            Apa itu Investasi
          </h1>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              5 menit baca
            </span>
            <span>•</span>
            <span>12 Juni 2025</span>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-56 md:h-72 rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-black/50">
            {/* Ganti src dengan gambar ilustrasi dari database/CDN Anda */}
            <Image 
              src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop"
              alt="Ilustrasi pertumbuhan investasi"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-loose prose-p:mb-6 prose-headings:text-white prose-headings:font-bold">
            <p>
              Investasi adalah kegiatan menempatkan dana atau aset dengan harapan memperoleh keuntungan di masa depan. 
            </p>
            <p>
              Investasi berbeda dengan menabung. Jika menabung tujuannya untuk menyimpan uang, maka investasi tujuannya adalah mengembangkan nilai uang agar tidak tergerus oleh inflasi seiring berjalannya waktu.
            </p>
            
            {/* Contoh penggunaan elemen markdown lainnya jika diperlukan */}
            {/* <h2>Mengapa Ini Penting?</h2> */}
            {/* <ul><li>Melawan inflasi</li><li>Mencapai kebebasan finansial</li></ul> */}
          </div>

          {/* Summary Section */}
          <ArticleSummary 
            content="Investasi adalah cara mengembangkan uang agar nilainya bertambah di masa depan melalui berbagai instrumen." 
          />

          {/* Navigation */}
          <ArticleNavigation />
          
        </motion.article>
      </main>
    </div>
  );
}