"use client";

import { ArrowLeft, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ArticleHeader() {
  const router = useRouter();

  const handleShare = () => {
    // Implementasi Web Share API jika didukung browser
    if (navigator.share) {
      navigator.share({
        title: 'Apa itu Investasi - FINORA',
        url: window.location.href
      }).catch(console.error);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#050e19]/90 backdrop-blur-xl px-5 py-4 flex items-center justify-between">
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
  );
}