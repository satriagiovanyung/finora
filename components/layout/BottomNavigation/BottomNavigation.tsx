"use client";

import Link from "next/link";
// Ikon User dihapus, diganti dengan Sparkles untuk menu Finora
import { Home, BookOpen, BookA, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", href: "/", icon: Home },
    { name: "Learning Path", href: "/learning", icon: BookOpen },
    { name: "Glosarium", href: "/glosarium", icon: BookA },
    { name: "Finora", href: "/finora", icon: Sparkles }, // Nama, URL, dan ikon sudah diubah
  ];

  return (
    // Menggunakan sticky agar selalu di bawah saat konten discroll
    <nav className="sticky bottom-0 w-full bg-[#081626]/90 backdrop-blur-md border-t border-white/10 z-50">
      <div className="grid grid-cols-4 py-3 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className="flex flex-col items-center justify-center gap-1.5"
            >
              <Icon 
                size={22} 
                className={isActive ? "text-[#00D4C5]" : "text-slate-500"} 
              />
              <span className={`text-[9px] font-medium ${isActive ? "text-[#00D4C5]" : "text-slate-500"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}