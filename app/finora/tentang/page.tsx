"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function TentangFinoraPage() {
  return (
    <main className="min-h-screen bg-[#0A1128] p-4 pb-8 font-sans text-white">

      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-4 h-56 overflow-hidden rounded-[24px] border border-white/5"
      >
        <img
          src="/images/hero-finora.jpg"
          alt="FINORA"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/70 to-[#0A1128]/20" />

        <Link
          href="/finora"
          className="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur transition hover:bg-black/50"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Link>

        <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide text-white">
              Tentang FINORA
            </h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#00D4C5]" />
          </div>
        </div>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="space-y-4">

        {/* Apa itu */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-[24px] border border-white/5 bg-gradient-to-br from-[#112A45]/80 to-[#081626]/80 p-5 backdrop-blur"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-[#00D4C5]" />
            <h2 className="text-base font-bold tracking-wide text-white">
              Apa itu FINORA?
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-400">
            <strong className="text-white">
              FINORA (Financial Learning Platform)
            </strong>{" "}
            adalah platform edukasi investasi digital yang dirancang untuk
            membantu masyarakat Indonesia memahami dunia keuangan dengan cara
            yang sederhana, terstruktur, dan mudah dipahami.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Materi di FINORA disusun mulai dari dasar-dasar investasi,
            perencanaan keuangan, profil risiko, berbagai instrumen investasi,
            strategi membangun portofolio, hingga cara mengenali penipuan
            investasi. Semua pembelajaran disajikan secara bertahap sehingga
            dapat dipelajari oleh siapa saja, bahkan tanpa pengalaman
            sebelumnya.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Kami percaya bahwa keputusan investasi yang baik selalu berawal dari
            pengetahuan yang benar. Dengan memahami konsep investasi sebelum
            menanamkan dana, setiap orang dapat mengambil keputusan yang lebih
            bijak dan sesuai dengan tujuan keuangannya.
          </p>
        </motion.div>

        {/* Visi */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-[24px] border border-white/5 bg-gradient-to-br from-[#112A45]/80 to-[#081626]/80 p-5 backdrop-blur"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-sky-400" />
            <h2 className="text-base font-bold tracking-wide text-white">
              Visi Kami
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-400">
            Menjadi platform edukasi investasi digital terpercaya di Indonesia
            yang membantu masyarakat membangun literasi keuangan, mengambil
            keputusan investasi yang lebih bijak, serta mencapai tujuan
            keuangan jangka panjang melalui pembelajaran yang mudah diakses
            oleh semua kalangan.
          </p>
        </motion.div>

        {/* Misi */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-[24px] border border-white/5 bg-gradient-to-br from-[#112A45]/80 to-[#081626]/80 p-5 backdrop-blur"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-pink-400" />
            <h2 className="text-base font-bold tracking-wide text-white">
              Misi Kami
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Menyediakan materi edukasi investasi yang lengkap, terstruktur, dan mudah dipahami oleh investor pemula maupun yang ingin memperdalam pengetahuan.",
              "Membantu masyarakat memahami berbagai instrumen investasi, strategi pengelolaan portofolio, serta prinsip investasi yang sehat.",
              "Meningkatkan kesadaran masyarakat terhadap risiko penipuan investasi melalui edukasi dan literasi keuangan yang terpercaya.",
              "Mendorong kebiasaan berinvestasi yang disiplin, bertanggung jawab, dan berorientasi pada tujuan keuangan jangka panjang.",
            ].map((text, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-sm font-semibold text-pink-400/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mengapa FINORA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-[24px] border border-white/5 bg-gradient-to-br from-[#112A45]/80 to-[#081626]/80 p-5 backdrop-blur"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-amber-400" />
            <h2 className="text-base font-bold tracking-wide text-white">
              Mengapa Memilih FINORA?
            </h2>
          </div>

          <div className="divide-y divide-white/5">
            {[
              {
                title: "Materi Terstruktur",
                desc: "Belajar investasi dimulai dari konsep paling dasar hingga strategi pengelolaan portofolio secara bertahap.",
              },
              {
                title: "Mudah Dipahami",
                desc: "Seluruh materi menggunakan bahasa yang sederhana sehingga mudah dipahami oleh siapa saja.",
              },
              {
                title: "Edukasi Anti Penipuan",
                desc: "Pelajari berbagai modus investasi ilegal, skema Ponzi, robot trading ilegal, hingga cara melindungi diri sebelum berinvestasi.",
              },
              {
                title: "Belajar Berbagai Instrumen",
                desc: "Pelajari saham, reksa dana, obligasi, emas, aset kripto, properti, serta strategi investasi lainnya dalam satu tempat.",
              },
            ].map((item, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-7 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-[24px] border border-[#00D4C5]/20 bg-[#00D4C5]/10 p-5 text-center"
        >
          <h2 className="text-lg font-bold text-white">
            Belajar Investasi Dimulai dari Pengetahuan
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            FINORA hadir untuk membantu Anda memahami investasi dengan lebih
            percaya diri. Karena investasi terbaik bukan sekadar mencari
            keuntungan terbesar, tetapi membuat keputusan yang tepat
            berdasarkan pengetahuan yang benar.
          </p>
        </motion.div>

      </div>
    </main>
  );
}