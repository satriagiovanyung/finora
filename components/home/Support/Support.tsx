'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, LifeBuoy } from 'lucide-react';

const Support = () => {
  return (
    <section className="w-full px-6 py-4 mb-28">
      {/* Container Kartu Support
        Menggunakan kombinasi gradient halus dan ornament blur untuk 
        memberikan kesan mendalam (depth) khas desain premium Apple.
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-[24px] border border-finora-border bg-gradient-to-br from-finora-card to-finora-surface p-6 shadow-finora-soft"
      >
        {/* Ornamen Visual Latar Belakang */}
        <div className="absolute -right-10 -top-10 z-0 h-32 w-32 rounded-full bg-finora-primary/10 blur-[40px]" />
        <div className="absolute -bottom-10 -left-10 z-0 h-32 w-32 rounded-full bg-finora-accent/10 blur-[40px]" />

        {/* Konten Utama */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-finora-primary/20 text-finora-primary">
            <Headphones size={28} strokeWidth={2} />
          </div>
          
          <h2 className="mb-2 text-lg font-bold text-finora-white">
            Butuh Bantuan?
          </h2>
          
          <p className="mb-6 text-[13px] leading-relaxed text-finora-text-secondary">
            Tim edukasi FINORA siap memandu perjalanan investasi Anda. Jangan ragu untuk berdiskusi bersama kami!
          </p>
          
          {/* Tombol Aksi - Kontras tinggi menggunakan warna putih */}
          <button className="flex w-full items-center justify-center gap-2 rounded-[16px] bg-finora-white py-3.5 text-sm font-semibold text-finora-bg transition-all hover:bg-gray-200 active:scale-[0.98]">
            <LifeBuoy size={18} />
            Hubungi Support
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Support;