"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, Share2, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { categoryDetails } from "@/data/category-details";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ArticlePage({ 
  params 
}: { 
  params: Promise<{ categoryId: string, materialId: string }> 
}) {
  const router = useRouter();
  const { categoryId, materialId } = React.use(params);
  
  const category = categoryDetails.find(
    (cat) => cat.id === categoryId || slugify(cat.title) === slugify(categoryId)
  );
  
  const materialIndex = category 
    ? category.materials.findIndex(
        (m) =>
          m.id.toString() === materialId ||
          slugify(m.title) === slugify(materialId) ||
          m.title.toLowerCase() === materialId.toLowerCase()
      )
    : -1;
    
  const material = category && materialIndex !== -1 ? category.materials[materialIndex] : null;
  
  if (!category || !material) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-5 text-center bg-finora-bg text-white">
        <h1 className="text-xl font-bold mb-2">Materi tidak ditemukan</h1>
        <p className="text-sm text-slate-400 mb-6 max-w-xs">
          Pastikan link dashboard atau ID materi di data Anda sudah sesuai.
        </p>
        <button 
          onClick={() => router.back()} 
          className="px-6 py-3 bg-finora-primary text-finora-bg font-bold rounded-2xl hover:opacity-90 transition-opacity"
        >
          Kembali
        </button>
      </div>
    );
  }

  const prevMaterial = category.materials[materialIndex - 1];
  const nextMaterial = category.materials[materialIndex + 1];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${material.title} - FINORA`,
        url: window.location.href
      }).catch(console.error);
    }
  };

  return (
    // PERUBAHAN 1: Hapus pb-24 di sini dan gunakan h-full flex flex-col
    <div className="h-full flex flex-col font-sans selection:bg-finora-primary/30 selection:text-white bg-finora-bg">
      
      {/* HEADER */}
      <header className="shrink-0 bg-finora-bg/90 backdrop-blur-xl px-5 py-4 flex items-center justify-between border-b border-white/5 z-40">
        <button 
          onClick={() => router.back()} 
          className="p-2 -ml-2 text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={handleShare}
          className="p-2 -mr-2 text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
        >
          <Share2 size={22} />
        </button>
      </header>

      {/* KONTEN ARTIKEL */}
      {/* PERUBAHAN 2: Pastikan menggunakan flex-1 dan pb-6 */}
      <main className="flex-1 overflow-y-auto no-scrollbar px-5 pb-6 pt-2">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* HERO */}
<div className="relative mb-8 h-56 overflow-hidden rounded-3xl">
  <img
    src={material.image}
    alt={material.title}
    className="h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#081626] via-black/20 to-transparent" />

  <div className="absolute bottom-5 left-5 right-5">


    <h1 className="mt-3 text-3xl font-bold text-white">
      {material.title}
    </h1>

    <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
      <Clock size={15} />
      {material.time}
    </div>
  </div>
</div>


{/* Isi Konten */}
<div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-loose prose-headings:text-white prose-headings:font-bold prose-strong:text-white prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2">
  {material.content ? (
    <div
      dangerouslySetInnerHTML={{ __html: material.content }}
    />
  ) : (
    <p>Konten belum tersedia untuk materi ini.</p>
  )}
</div>

          {/* Ringkasan */}
          {material.summary && (
            <div className="mt-12 p-6 rounded-3xl bg-finora-primary/5 border border-finora-primary/20 flex gap-4 items-start shadow-finora-soft">
              <div className="p-2.5 bg-finora-primary/10 rounded-xl text-finora-primary shrink-0">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-finora-primary font-semibold mb-2">Ringkasan Singkat</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {material.summary}
                </p>
              </div>
            </div>
          )}

          {/* Navigasi Footer (Tombol Prev/Next & Kembali) */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex items-center justify-between text-sm font-medium text-slate-400 mb-8">
              {prevMaterial ? (
                <Link href={`/learning/${category.id}/${prevMaterial.id}`} className="flex items-center gap-1.5 hover:text-finora-primary transition-colors">
                  <ChevronLeft size={16} /> Sebelumnya
                </Link>
              ) : <div></div>}
              
              {nextMaterial ? (
                <Link href={`/learning/${category.id}/${nextMaterial.id}`} className="flex items-center gap-1.5 hover:text-finora-primary transition-colors">
                  Berikutnya <ChevronRight size={16} />
                </Link>
              ) : <div></div>}
            </div>

            <Link 
              href={`/learning/${category.id}`}
              className="flex items-center justify-center w-full py-4 rounded-2xl bg-finora-card border border-finora-primary/20 text-finora-primary font-semibold hover:bg-finora-primary/10 transition-colors"
            >
              Kembali ke Daftar Materi
            </Link>
          </div>
          
        </motion.article>
      </main>
    </div>
  );
}