import React from "react";

interface MobileContainerProps {
  children: React.ReactNode;
}

export default function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="mx-auto flex h-screen w-full max-w-[480px] flex-col bg-[#050D17] relative overflow-y-auto shadow-2xl ring-1 ring-[rgba(255,255,255,0.05)] bg-gradient-to-b from-[#0e2136] to-[#050D17]">
      {children}
    </div>
  );
}