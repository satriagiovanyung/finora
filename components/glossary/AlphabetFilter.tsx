"use client";

interface AlphabetFilterProps {
  selectedLetter: string;
  onSelect: (letter: string) => void;
}

const letters = [
  "Semua",
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
];

export default function AlphabetFilter({
  selectedLetter,
  onSelect,
}: AlphabetFilterProps) {
  return (
    <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onSelect(letter)}
          className={`flex h-10 min-w-[42px] items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-300

            ${
              selectedLetter === letter
                ? "border-[#00D4C5] bg-[#00D4C5] text-[#081626] shadow-lg shadow-cyan-500/20"
                : "border-white/10 bg-[#112A45] text-[#94A3B8] hover:border-[#00D4C5]/40 hover:text-white"
            }`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}