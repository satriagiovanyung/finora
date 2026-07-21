"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ProgramBerbagiPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 pb-8 font-sans text-white">

      {/* ================= HERO ================= */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-5 h-60 overflow-hidden rounded-[24px] border border-white/5"
      >
        <img
          src="/images/program-berbagi.jpg"
          alt="Program Berbagi"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/65 to-transparent" />

        {/* Back */}

        <Link
          href="/finora"
          className="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur transition hover:bg-black/50"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Link>

        {/* Title */}

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-8 text-center">

          <h1 className="text-3xl font-bold tracking-wide">
            Program Berbagi
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-[#00D4C5]" />

        </div>

      </motion.div>

      {/* ================= CONTENT ================= */}

      <div className="space-y-5">

        {/* ================= CARD 50% ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="overflow-hidden rounded-[24px] border border-[#00D4C5]/20 bg-gradient-to-br from-[#112A45] to-[#081626]"
        >

          <div className="p-6">

            <div className="text-center">

              <div className="text-6xl font-extrabold text-[#00D4C5]">
                50%
              </div>

              <p className="mt-3 text-lg font-semibold text-white">
                dari setiap dukungan
              </p>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-400">
                Sebanyak <span className="font-semibold text-white">50%</span>
                {" "}dari setiap dukungan yang diterima akan dialokasikan
                untuk Program Berbagi sebagai bentuk komitmen FINORA
                dalam memberikan manfaat yang lebih luas kepada masyarakat.
              </p>

            </div>

            {/* Progress */}

            

          </div>

        </motion.div>
        
                {/* ================= MENGAPA PROGRAM BERBAGI ================= */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-[24px] border border-white/5 bg-gradient-to-br from-[#112A45]/80 to-[#081626]/90 p-6 backdrop-blur"
        >
          <h2 className="text-xl font-semibold text-white">
            Mengapa Program Berbagi?
          </h2>

          <div className="mt-2 h-1 w-14 rounded-full bg-[#00D4C5]" />

          <p className="mt-5 text-sm leading-8 text-slate-400">
            FINORA percaya bahwa keberhasilan bukan hanya diukur dari
            pertumbuhan, tetapi juga dari manfaat yang dapat diberikan kepada
            orang lain. Oleh karena itu, melalui Program Berbagi, kami
            berkomitmen mengalokasikan sebagian dukungan yang diterima untuk
            membantu kegiatan sosial dan kemanusiaan.
          </p>

          <p className="mt-4 text-sm leading-8 text-slate-400">
            Setiap dukungan yang Anda berikan tidak hanya membantu FINORA terus
            berkembang, tetapi juga ikut memberikan dampak positif bagi mereka
            yang membutuhkan.
          </p>
        </motion.section>

        {/* ================= FOKUS PENYALURAN ================= */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-[24px] border border-white/5 bg-gradient-to-br from-[#112A45]/80 to-[#081626]/90 p-6 backdrop-blur"
        >
          <h2 className="text-xl font-semibold text-white">
            Fokus Penyaluran
          </h2>

          <div className="mt-2 h-1 w-14 rounded-full bg-[#00D4C5]" />

          <div className="mt-6 space-y-5">

            <div className="border-b border-white/5 pb-5">
              <h3 className="font-medium text-white">
                Bantuan Sosial
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Memberikan bantuan kepada masyarakat yang membutuhkan melalui
                berbagai kegiatan sosial yang diselenggarakan secara langsung
                maupun bekerja sama dengan komunitas.
              </p>
            </div>

            <div className="border-b border-white/5 pb-5">
              <h3 className="font-medium text-white">
                Pendidikan
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Mendukung kegiatan pendidikan dan literasi agar semakin banyak
                masyarakat memperoleh akses terhadap ilmu pengetahuan dan
                pembelajaran yang bermanfaat.
              </p>
            </div>

            <div className="border-b border-white/5 pb-5">
              <h3 className="font-medium text-white">
                Kegiatan Kemanusiaan
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Berpartisipasi dalam kegiatan kemanusiaan sebagai bentuk
                kepedulian terhadap sesama, terutama ketika terjadi kondisi yang
                membutuhkan bantuan bersama.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-white">
                Pemberdayaan Masyarakat
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Mendukung program-program yang bertujuan meningkatkan
                kesejahteraan masyarakat melalui kolaborasi dengan berbagai
                pihak yang memiliki visi sosial yang sama.
              </p>
            </div>

          </div>

        </motion.section>

        {/* ================= KOMITMEN TRANSPARANSI ================= */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="rounded-[24px] border border-[#00D4C5]/20 bg-[#00D4C5]/10 p-6"
        >
          <h2 className="text-xl font-semibold text-white">
            Komitmen Transparansi
          </h2>

          <div className="mt-2 h-1 w-14 rounded-full bg-[#00D4C5]" />

          <p className="mt-5 text-sm leading-8 text-slate-300">
            Kami berkomitmen menjalankan Program Berbagi secara bertanggung
            jawab. Informasi mengenai kegiatan, penyaluran, dan penggunaan dana
            akan dipublikasikan secara berkala sebagai bentuk transparansi
            kepada seluruh pendukung FINORA.
          </p>
        </motion.section>
                {/* ================= TIMELINE ================= */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="rounded-[24px] border border-white/5 bg-gradient-to-br from-[#112A45]/80 to-[#081626]/90 p-6 backdrop-blur"
        >
          <h2 className="text-xl font-semibold text-white">
            Alur Program Berbagi
          </h2>

          <div className="mt-2 h-1 w-14 rounded-full bg-[#00D4C5]" />

          <div className="relative mt-8 space-y-8 border-l border-[#00D4C5]/30 pl-6">

            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-[#00D4C5]" />

              <h3 className="font-medium text-white">
                Dukungan Diterima
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Setiap dukungan yang diberikan kepada FINORA akan dicatat dan
                dikelola secara bertanggung jawab.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-[#00D4C5]" />

              <h3 className="font-medium text-white">
                Alokasi Dana
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Sebanyak <strong className="text-white">50%</strong> dialokasikan
                untuk Program Berbagi, sedangkan sisanya digunakan untuk
                pengembangan FINORA.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-[#00D4C5]" />

              <h3 className="font-medium text-white">
                Penyaluran
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Dana disalurkan kepada kegiatan sosial, pendidikan, maupun
                kemanusiaan sesuai program yang telah ditentukan.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-[#00D4C5]" />

              <h3 className="font-medium text-white">
                Laporan
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Ringkasan kegiatan dan penyaluran akan dipublikasikan sebagai
                bentuk transparansi kepada seluruh pendukung FINORA.
              </p>
            </div>

          </div>
        </motion.section>

        <div className="mt-6 space-y-3">

  {/* Triwulan I */}
  <Link
    href="/program-berbagi/laporan/triwulan-1"
    className="flex items-center justify-between rounded-2xl border border-[#00D4C5]/20 bg-white/5 p-4 transition hover:border-[#00D4C5] hover:bg-white/10"
  >
    <div>
      <h3 className="text-base font-semibold text-white">
        Triwulan I 2026
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        Januari – Maret
      </p>
    </div>

    <span className="rounded-lg bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
      Lihat
    </span>
  </Link>

  {/* Triwulan II */}
  <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
    <div>
      <h3 className="text-base font-semibold text-white">
        Triwulan II 2026
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        April – Juni
      </p>
    </div>

    <span className="rounded-lg bg-yellow-500/15 px-3 py-1 text-xs font-medium text-yellow-400">
      Segera
    </span>
  </div>

  {/* Triwulan III */}
  <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
    <div>
      <h3 className="text-base font-semibold text-white">
        Triwulan III 2026
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        Juli – September
      </p>
    </div>

    <span className="rounded-lg bg-yellow-500/15 px-3 py-1 text-xs font-medium text-yellow-400">
      Segera
    </span>
  </div>

  {/* Triwulan IV */}
  <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
    <div>
      <h3 className="text-base font-semibold text-white">
        Triwulan IV 2026
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        Oktober – Desember
      </p>
    </div>

    <span className="rounded-lg bg-yellow-500/15 px-3 py-1 text-xs font-medium text-yellow-400">
      Segera
    </span>
  </div>

</div>
        {/* ================= FOOTER ================= */}

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="pb-6 pt-2 text-center"
        >
          <p className="text-sm leading-7 text-slate-500">
            Terima kasih telah menjadi bagian dari perjalanan FINORA.
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-500">
            Bersama kita belajar, berkembang, dan berbagi untuk Indonesia yang
            lebih baik.
          </p>
        </motion.footer>

      </div>
    </main>
  );
}