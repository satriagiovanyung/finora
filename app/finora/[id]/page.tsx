"use client";

import { useParams, useRouter } from "next/navigation";
import { finoraContent } from "@/data/finora-content"; // Import data di atas
import { ArrowLeft } from "lucide-react";

export default function ContentPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as keyof typeof finoraContent;
  
  // Mengambil konten berdasarkan ID (tentang, dukung, dll)
  const content = finoraContent[id];

  if (!content) return <div>Konten tidak ditemukan.</div>;

  return (
    <main className="min-h-screen bg-[#0A1128] p-6 text-white font-sans">
      <button onClick={() => router.back()} className="mb-6 flex items-center gap-2 text-[#00D4C5]">
        <ArrowLeft size={20} /> Kembali
      </button>

      <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
      <p className="text-[#94A3B8] leading-relaxed">{content.body}</p>
    </main>
  );
}