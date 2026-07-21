"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari istilah investasi..."
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#112A45]
          py-3
          pl-11
          pr-12
          text-sm
          text-white
          placeholder:text-[#94A3B8]
          outline-none
          transition-all
          duration-300
          focus:border-[#00D4C5]
          focus:ring-2
          focus:ring-[#00D4C5]/20
        "
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            rounded-full
            p-1
            text-[#94A3B8]
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}