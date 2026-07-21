"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function DukungFinoraPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 pb-8 font-sans text-white">

      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-4 h-56 overflow-hidden rounded-[24px] border border-white/5"
      >
        <img
          src="/images/support-finora.jpg"
          alt="Dukung FINORA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/70 to-[#0A1128]/20" />

        {/* Back Button */}
        <Link
          href="/finora"
          className="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur transition hover:bg-black/50"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Link>

        {/* Title */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide text-white">
              Dukung FINORA
            </h1>

            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#00D4C5]" />
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">

        {/* ================= Tentang ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-[24px] border border-white/5 bg-gradient-to-br from-[#112A45]/80 to-[#081626]/80 p-6 backdrop-blur"
        >
          <h2 className="text-lg font-semibold text-white">
            Mengapa Dukungan Anda Berarti?
          </h2>

          <div className="mt-2 h-1 w-14 rounded-full bg-[#00D4C5]" />

          <p className="mt-5 text-sm leading-7 text-slate-400">
            FINORA dikembangkan secara mandiri dengan tujuan membantu
            masyarakat Indonesia memahami dunia investasi melalui materi yang
            sederhana, terstruktur, dan mudah dipahami.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Setiap bentuk dukungan yang diberikan akan membantu kami terus
            mengembangkan FINORA agar tetap menjadi sumber pembelajaran yang
            berkualitas dan dapat diakses oleh siapa saja.
          </p>
        </motion.div>

        <h2 className="text-lg font-semibold text-white">
  Dukungan Anda Digunakan Untuk
</h2>

<div className="mt-2 h-1 w-14 rounded-full bg-[#00D4C5]" />

<div className="mt-5 space-y-5">

  <div className="border-b border-white/5 pb-5">
    <h3 className="font-medium text-white">
      Pengembangan Fitur
    </h3>

    <p className="mt-2 text-sm leading-7 text-slate-400">
      Mengembangkan fitur-fitur baru untuk meningkatkan pengalaman belajar,
      memperluas fungsionalitas aplikasi, dan menghadirkan inovasi yang
      bermanfaat bagi pengguna.
    </p>
  </div>

  <div className="border-b border-white/5 pb-5">
    <h3 className="font-medium text-white">
      Materi Edukasi dan Riset
    </h3>

    <p className="mt-2 text-sm leading-7 text-slate-400">
      Melakukan riset, menyusun materi pembelajaran baru, serta memperbarui
      konten agar tetap relevan dengan perkembangan dunia investasi dan
      literasi keuangan.
    </p>
  </div>

  <div className="border-b border-white/5 pb-5">
    <h3 className="font-medium text-white">
      Infrastruktur Server
    </h3>

    <p className="mt-2 text-sm leading-7 text-slate-400">
      Membantu biaya operasional server, domain, keamanan sistem, dan layanan
      pendukung agar FINORA tetap stabil, aman, dan dapat diakses kapan saja.
    </p>
  </div>

  <div>
    <h3 className="font-medium text-white">
      Tim Pengembang
    </h3>

    <p className="mt-2 text-sm leading-7 text-slate-400">
      Memberikan apresiasi kepada tim pengembang atas waktu, tenaga, dan
      dedikasi dalam merancang, membangun, memelihara, serta terus
      mengembangkan FINORA agar menjadi platform edukasi investasi yang
      bermanfaat bagi masyarakat Indonesia.
    </p>
  </div>

</div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-[24px] border border-[#00D4C5]/20 bg-[#112A45]/80 p-6"
        >
          <h2 className="text-lg font-semibold text-white">
            Dukung Pengembangan FINORA
          </h2>

          <div className="mt-2 h-1 w-14 rounded-full bg-[#00D4C5]" />

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Jika Anda merasa FINORA bermanfaat, Anda dapat memberikan dukungan
            secara sukarela. Setiap kontribusi akan membantu kami terus
            menghadirkan materi edukasi investasi yang berkualitas bagi
            masyarakat Indonesia.
          </p>

          <a
            href="https://saweria.co/Finora"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#00D4C5] px-5 py-3 text-sm font-semibold text-[#081626] transition hover:opacity-90"
          >
            Dukung FINORA
          </a>
        </motion.div>

        {/* ================= Footer ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="rounded-[24px] border border-white/5 bg-[#081626] p-6 text-center"
        >
          <h2 className="text-lg font-semibold text-white">
            Terima Kasih
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Dukungan Anda, sekecil apa pun, menjadi motivasi bagi kami untuk
            terus mengembangkan FINORA sebagai platform edukasi investasi yang
            terpercaya, mudah dipahami, dan bermanfaat bagi masyarakat
            Indonesia.
          </p>
        </motion.div>

      </div>
    </main>
  );
}