import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ArticleNavigation() {
  return (
    <div className="mt-8 pt-8 border-t border-white/5">
      <div className="flex items-center justify-between text-sm font-medium text-slate-400 mb-8">
        <Link href="#" className="flex items-center gap-1.5 hover:text-[#00D4C5] transition-colors">
          <ArrowLeft size={16} />
          Materi Sebelumnya
        </Link>
        <Link href="#" className="flex items-center gap-1.5 hover:text-[#00D4C5] transition-colors">
          Materi Berikutnya
          <ArrowRight size={16} />
        </Link>
      </div>

      <Link 
        href="/learning/dasar-investasi"
        className="flex items-center justify-center w-full py-4 rounded-2xl bg-[#081626] border border-[#00D4C5]/20 text-[#00D4C5] font-semibold hover:bg-[#00D4C5]/10 transition-colors"
      >
        Kembali ke Kategori
      </Link>
    </div>
  );
}