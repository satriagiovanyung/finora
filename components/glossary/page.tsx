"use client";

import { useState } from "react";
import SearchBar from "@/components/glossary/SearchBar"; // Sesuaikan path import dengan struktur folder Anda

// Contoh data istilah investasi untuk demo pencarian
const INVESTMENT_GLOSSARY = [
  {
    id: 1,
    term: "Saham",
    definition: "Tanda penyertaan modal seseorang atau pihak (badan usaha) dalam suatu perusahaan atau perseroan terbatas.",
  },
  {
    id: 2,
    term: "Reksadana",
    definition: "Wadah yang dipergunakan untuk menghimpun dana dari masyarakat pemodal untuk selanjutnya diinvestasikan dalam portofolio efek oleh Manajer Investasi.",
  },
  {
    id: 3,
    term: "Obligasi",
    definition: "Surat utang jangka menengah maupun jangka panjang yang dapat dipindahtangankan, berisi janji dari pihak yang menerbitkan untuk membayar imbalan berupa bunga.",
  },
  {
    id: 4,
    term: "Dividen",
    definition: "Bagian laba perusahaan yang dibagikan kepada pemegang saham berdasarkan jumlah saham yang dimiliki.",
  },
  {
    id: 5,
    term: "Capital Gain",
    definition: "Keuntungan yang diperoleh seorang investor dari selisih harga jual yang lebih tinggi dibandingkan dengan harga beli suatu aset.",
  }
];

export default function GlossaryPage() {
  // State untuk menyimpan teks pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // Logika untuk memfilter data berdasarkan teks pencarian (case-insensitive)
  const filteredGlossary = INVESTMENT_GLOSSARY.filter((item) =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0B1528] py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-[#00D4C5] bg-clip-text text-transparent">
            Glosarium Investasi
          </h1>
          <p className="text-sm text-[#94A3B8]">
            Temukan dan pelajari istilah-istilah finansial dengan mudah.
          </p>
        </div>

        {/* Pemasangan SearchBar dengan prop yang benar */}
        <div className="w-full">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* List Hasil Pencarian */}
        <div className="space-y-4">
          {filteredGlossary.length > 0 ? (
            filteredGlossary.map((item) => (
              <div 
                key={item.id} 
                className="p-5 rounded-2xl border border-white/5 bg-[#112A45]/40 backdrop-blur-sm space-y-2 hover:border-[#00D4C5]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#00D4C5]">
                  {item.term}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))
          ) : (
            // Tampilan jika istilah tidak ditemukan
            <div className="text-center py-12 text-[#94A3B8]">
              <p className="text-sm">Istilah &ldquo;{searchQuery}&rdquo; tidak ditemukan.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}