"use client";

import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

export default function ArtikelPanduanMemulaiInvestasi() {
  return (
    <div className="min-h-screen bg-finora-bg">
      <main className="max-w-2xl mx-auto px-5 pt-6 pb-12">

        {/* Tombol Kembali */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white transition-colors mb-5"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </Link>

        {/* Hero Image */}
        <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-6">
          <img
            src="/images/featured.jpg"
            alt="Panduan Memulai Investasi"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081626] via-[#081626]/20 to-transparent" />
        </div>

        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-[#00D4C5]/20 bg-[#00D4C5]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00D4C5]">
          Fundamental
        </span>

        {/* Judul */}
        <h1 className="mt-4 text-3xl font-bold leading-tight text-white">
          Panduan Memulai Investasi untuk Pemula
        </h1>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-5 text-sm text-[#94A3B8]">
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>5 menit baca</span>
          </div>

          <div className="flex items-center gap-1.5">
            <BookOpen size={16} />
            <span>Tim FINORA</span>
          </div>
        </div>

        {/* Garis */}
        <div className="my-8 border-b border-white/10" />

        {/* Artikel */}
        <article className="text-[#CBD5E1] text-[16px] leading-8">

          <p className="mb-6">
            Investasi merupakan salah satu cara terbaik untuk membangun
            kekayaan dalam jangka panjang. Dengan berinvestasi, uang yang
            dimiliki memiliki peluang untuk berkembang sehingga dapat
            membantu mencapai berbagai tujuan keuangan di masa depan.
          </p>

          <p className="mb-10">
            Banyak orang menganggap investasi hanya untuk mereka yang
            memiliki modal besar. Padahal, saat ini investasi dapat dimulai
            dengan nominal yang terjangkau. Yang terpenting adalah memahami
            dasar-dasarnya sebelum mulai berinvestasi.
          </p>

          {/* ====================== */}

          <h2 className="text-2xl font-bold text-white mb-4">
            1. Tentukan Tujuan Keuangan
          </h2>

          <p className="mb-5">
            Sebelum memilih instrumen investasi, tentukan terlebih dahulu
            tujuan keuanganmu. Tujuan yang jelas akan membantu menentukan
            strategi investasi yang tepat.
          </p>

          <ul className="list-disc pl-6 space-y-3 mb-10">
            <li>Dana darurat.</li>
            <li>Dana pendidikan.</li>
            <li>Membeli rumah.</li>
            <li>Dana pensiun.</li>
            <li>Membangun kekayaan jangka panjang.</li>
          </ul>

          {/* ====================== */}

          <h2 className="text-2xl font-bold text-white mb-4">
            2. Kenali Profil Risiko
          </h2>

          <p className="mb-8">
            Setiap orang memiliki toleransi risiko yang berbeda. Oleh karena
            itu, penting untuk mengetahui profil risiko sebelum memilih
            instrumen investasi.
          </p>

          <h3 className="text-xl font-bold text-white mb-2">
            Konservatif
          </h3>

          <p className="mb-6">
            Mengutamakan keamanan modal dan menghindari fluktuasi harga yang
            besar. Investor konservatif biasanya lebih memilih instrumen
            dengan risiko rendah meskipun potensi keuntungannya lebih kecil.
          </p>

          <h3 className="text-xl font-bold text-white mb-2">
            Moderat
          </h3>

          <p className="mb-6">
            Bersedia menerima risiko dalam tingkat sedang demi memperoleh
            potensi keuntungan yang lebih baik. Profil ini cocok bagi
            investor yang menginginkan keseimbangan antara risiko dan
            imbal hasil.
          </p>

          <h3 className="text-xl font-bold text-white mb-2">
            Agresif
          </h3>

          <p className="mb-10">
            Siap menghadapi fluktuasi pasar yang tinggi demi mengejar
            pertumbuhan investasi dalam jangka panjang.
          </p>

          {/* ====================== */}

          <h2 className="text-2xl font-bold text-white mb-4">
            3. Mulai dari Instrumen yang Sesuai
          </h2>

          <p className="mb-5">
            Sebagai pemula, tidak perlu langsung memilih instrumen yang
            berisiko tinggi. Mulailah dari investasi yang mudah dipahami dan
            sesuai dengan tujuan keuanganmu.
          </p>

          <ul className="list-disc pl-6 space-y-3 mb-10">
            <li>Reksa Dana Pasar Uang.</li>
            <li>Obligasi Pemerintah.</li>
            <li>Emas.</li>
            <li>Saham.</li>
          </ul>

          {/* ====================== */}

          <div className="rounded-2xl border border-[#00D4C5]/30 bg-[#00D4C5]/10 p-6 my-10">
            <h3 className="text-xl font-bold text-[#00D4C5] mb-3">
              💡 Tips FINORA
            </h3>

            <p className="leading-8 text-[#CBD5E1]">
              Tidak perlu menunggu memiliki modal besar untuk mulai
              berinvestasi. Mulailah dengan nominal yang sesuai kemampuanmu,
              lakukan secara rutin, dan fokus pada tujuan jangka panjang.
              Konsistensi lebih penting daripada jumlah modal di awal.
            </p>
          </div>

          {/* ====================== */}

          <h2 className="text-2xl font-bold text-white mb-4">
            Kesimpulan
          </h2>

          <p>
            Memulai investasi tidak harus rumit. Dengan menentukan tujuan
            keuangan, memahami profil risiko, serta memilih instrumen yang
            sesuai, kamu dapat membangun kebiasaan investasi yang sehat sejak
            dini. Ingatlah bahwa investasi adalah perjalanan jangka panjang,
            sehingga disiplin dan konsistensi menjadi kunci utama untuk
            mencapai tujuan finansialmu.
          </p>

        </article>

      </main>
    </div>
  );
}