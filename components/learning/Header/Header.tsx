import { ChevronLeft, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#081626]/80 backdrop-blur-md border-b border-white/5 p-5 flex items-center justify-between">
      {/* Tombol Back */}
      <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors">
        <ChevronLeft size={24} className="text-white" />
      </button>
      
      {/* Judul */}
      <h1 className="text-lg font-bold text-white tracking-tight">Learning Path</h1>
      
      {/* Search Icon */}
      <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors">
        <Search size={20} className="text-white" />
      </button>
    </header>
  );
};