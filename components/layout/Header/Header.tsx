import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-[#081626]/70 px-6 py-4 backdrop-blur-lg border-b border-[rgba(255,255,255,0.08)]">
      
      {/* Area Logo */}
      <Link 
        href="/" 
        className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80 active:scale-95"
      >
        {/* Ikon Logo F dengan warna Primary & Accent FINORA */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4C5] to-[#4DEFE3] shadow-[0_0_20px_rgba(0,212,197,0.2)]">
          <span className="text-lg font-extrabold text-[#081626]">F</span>
        </div>
        
        {/* Teks Logo */}
        <span className="text-xl font-bold tracking-widest text-white">
          FINORA
        </span>
      </Link>

      {/* Area Kosong - Disengaja 
        Sesuai prinsip FINORA: Tidak ada profil, notifikasi, atau menu kompleks.
        Ruang kosong (whitespace) ini memberikan kesan Apple Style yang premium.
      */}
      <div></div>

    </header>
  );
}