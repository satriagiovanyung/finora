import "./globals.css";
import { BottomNav } from "@/components/layout/BottomNavigation/BottomNavigation"; // Pastikan path ini benar

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#050e19] h-screen flex justify-center"> {/* Gunakan h-screen */}
        
        {/* Kontainer utama dengan flex-col */}
        <div className="w-full max-w-md bg-[#081626] h-full flex flex-col shadow-2xl overflow-hidden">
          
          {/* Konten Utama: overflow-y-auto agar bisa scroll hanya di bagian ini */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          
          {/* Bottom Nav akan selalu dipaksa ke bawah oleh flex-col */}
          <BottomNav />
          
        </div>
      </body>
    </html>
  );
}