import { BookOpen } from "lucide-react";

interface ArticleSummaryProps {
  content: string;
}

export default function ArticleSummary({ content }: ArticleSummaryProps) {
  return (
    <div className="mt-12 p-6 rounded-3xl bg-[#00D4C5]/5 border border-[#00D4C5]/20 flex gap-4 items-start shadow-[0_8px_32px_-12px_rgba(0,212,197,0.1)]">
      <div className="p-2.5 bg-[#00D4C5]/10 rounded-xl text-[#00D4C5] shrink-0">
        <BookOpen size={20} />
      </div>
      <div>
        <h3 className="text-[#00D4C5] font-semibold mb-2">Ringkasan</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}