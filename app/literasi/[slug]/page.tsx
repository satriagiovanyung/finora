// "use client";

// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { motion } from "framer-motion";
// import { 
//     ArrowLeft, BookOpen, Clock, ChevronRight,
//   RefreshCcw, Gem, CircleDollarSign, Banknote, Bitcoin, // Ikon Uang
//   History, Ship, Factory, TrendingUp, // Ikon Sejarah
//   Scale, Ban, PieChart, HeartHandshake, // Ikon Islam
//   Flower2, TrendingDown, Landmark, Home, // Ikon Krisis
//   User, Glasses, Target, Globe, // Ikon Tokoh
//   AlertCircle, Link2, Pizza, Database // Ikon Kripto
// } from "lucide-react";

// interface Chapter {
//   id: string;
//   title: string;
//   durasi: string;
//   icon: any; // Menggunakan any untuk ikon komponen
//   color: string;
// }

// interface TopicData {
//   title: string;
//   description: string;
//   chapters: Chapter[];
// }

// const literasiDatabase: Record<string, TopicData> = {
//   "asal-mula-uang": {
//     title: "Asal Mula Uang",
//     description: "Pelajari sejarah panjang bagaimana manusia bertransaksi dari sistem barter hingga uang digital.",
//     chapters: [
//       { id: "sistem-barter", title: "1. Sistem Barter & Kelemahannya", durasi: "5 Menit", icon: RefreshCcw, color: "text-amber-500" },
//       { id: "uang-barang", title: "2. Era Uang Barang (Komoditas)", durasi: "6 Menit", icon: Gem, color: "text-emerald-500" },
//       { id: "uang-logam", title: "3. Munculnya Uang Logam", durasi: "7 Menit", icon: CircleDollarSign, color: "text-yellow-400" },
//       { id: "uang-kertas", title: "4. Lahirnya Uang Kertas", durasi: "8 Menit", icon: Banknote, color: "text-green-400" },
//       { id: "uang-digital", title: "5. Era Uang Digital & Kripto", durasi: "10 Menit", icon: Bitcoin, color: "text-orange-500" },
//     ],
//   },
//   "sejarah-investasi": {
//     title: "Sejarah Investasi",
//     description: "Mengenal awal mula konsep investasi di dunia sejak ribuan tahun lalu hingga era modern.",
//     chapters: [
//       { id: "konsep-awal", title: "1. Konsep Awal Berinvestasi", durasi: "5 Menit", icon: History, color: "text-stone-400" },
//       { id: "bursa-pertama", title: "2. VOC & Bursa Saham Pertama", durasi: "10 Menit", icon: Ship, color: "text-blue-400" },
//       { id: "revolusi-industri", title: "3. Revolusi Industri", durasi: "8 Menit", icon: Factory, color: "text-red-400" },
//       { id: "era-modern", title: "4. Era Investasi Modern", durasi: "7 Menit", icon: TrendingUp, color: "text-emerald-400" },
//     ],
//   },
//   "investasi-dalam-islam": {
//     title: "Investasi dalam Islam",
//     description: "Memahami prinsip syariah dalam berinvestasi agar transaksi membawa berkah dan terhindar dari riba.",
//     chapters: [
//       { id: "konsep-dasar", title: "1. Konsep Ekonomi Syariah", durasi: "6 Menit", icon: Scale, color: "text-emerald-500" },
//       { id: "larangan-syariah", title: "2. Riba, Gharar, dan Maysir", durasi: "9 Menit", icon: Ban, color: "text-red-500" },
//       { id: "instrumen-syariah", title: "3. Instrumen Syariah", durasi: "8 Menit", icon: PieChart, color: "text-blue-400" },
//       { id: "zakat-investasi", title: "4. Zakat dalam Investasi", durasi: "5 Menit", icon: HeartHandshake, color: "text-yellow-500" },
//     ],
//   },
//   "krisis-finansial-dunia": {
//     title: "Krisis Finansial Dunia",
//     description: "Belajar dari sejarah krisis ekonomi terbesar di dunia untuk memahami risiko dan dinamika pasar.",
//     chapters: [
//       { id: "tulip-mania", title: "1. Tulip Mania (1637)", durasi: "6 Menit", icon: Flower2, color: "text-pink-400" },
//       { id: "great-depression", title: "2. The Great Depression (1929)", durasi: "8 Menit", icon: TrendingDown, color: "text-red-500" },
//       { id: "krisis-moneter", title: "3. Krisis Moneter Asia (1997)", durasi: "7 Menit", icon: Landmark, color: "text-amber-500" },
//       { id: "subprime-mortgage", title: "4. Krisis Subprime (2008)", durasi: "10 Menit", icon: Home, color: "text-blue-500" },
//     ],
//   },
//   "tokoh-investor-dunia": {
//     title: "Tokoh Investor Dunia",
//     description: "Pelajari strategi dan filosofi dari para investor paling sukses dalam sejarah pasar modal.",
//     chapters: [
//       { id: "benjamin-graham", title: "1. Benjamin Graham", durasi: "6 Menit", icon: User, color: "text-slate-400" },
//       { id: "warren-buffett", title: "2. Warren Buffett", durasi: "8 Menit", icon: Glasses, color: "text-amber-500" },
//       { id: "peter-lynch", title: "3. Peter Lynch", durasi: "7 Menit", icon: Target, color: "text-red-500" },
//       { id: "ray-dalio", title: "4. Ray Dalio", durasi: "8 Menit", icon: Globe, color: "text-blue-500" },
//     ],
//   },
//   "lahirnya-bitcoin": {
//     title: "Lahirnya Bitcoin",
//     description: "Menelusuri awal mula kemunculan mata uang kripto pertama dan teknologi blockchain yang mendasarinya.",
//     chapters: [
//       { id: "krisis-2008", title: "1. Kemunculan Satoshi", durasi: "7 Menit", icon: AlertCircle, color: "text-red-500" },
//       { id: "teknologi-blockchain", title: "2. Apa itu Blockchain?", durasi: "9 Menit", icon: Link2, color: "text-blue-400" },
//       { id: "pizza-bitcoin", title: "3. Transaksi Pizza Bitcoin", durasi: "5 Menit", icon: Pizza, color: "text-orange-400" },
//       { id: "emas-digital", title: "4. Emas Digital Baru", durasi: "6 Menit", icon: Database, color: "text-yellow-500" },
//     ],
//   }
// };

// export default function LiterasiDashboard() {
//   const params = useParams();
//   const slug = (params?.slug as string) || "";

//   const data: TopicData = literasiDatabase[slug] || {
//     title: slug ? slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) : "Materi Literasi",
//     description: "Materi untuk topik ini sedang dalam tahap penyusunan tim Finora.",
//     chapters: [],
//   };

//   return (
//     // Padding bottom diubah ke pb-4 agar tidak ada jeda jauh dengan bottom navigation
//     <main className="min-h-screen bg-[#0A1128] p-4 font-sans text-white pb-4">
      
//       {/* Tombol Back */}
//       <div className="mb-6 mt-2 flex items-center">
//         <Link href="/">
//           <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#112A45] transition-colors hover:bg-[#233A70]">
//             <ArrowLeft className="h-5 w-5 text-white" />
//           </div>
//         </Link>
//       </div>

//       {/* Header Topik Literasi */}
//       <div className="mb-8 flex items-start gap-4">
//         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-white shadow-lg">
//           <BookOpen className="h-7 w-7" />
//         </div>
//         <div className="flex flex-col">
//           <h1 className="text-xl font-bold leading-tight">{data.title}</h1>
//           <p className="mt-1 text-sm text-[#94A3B8] leading-relaxed">
//             {data.description}
//           </p>
//         </div>
//       </div>

//       {/* List Bab Materi */}
//       <div className="flex flex-col gap-3">
//         <h3 className="text-sm font-bold text-[#00D4C5] mb-2 px-1">Daftar Bab Pembelajaran</h3>
        
//         {data.chapters.length > 0 ? (
//           data.chapters.map((bab, index) => {
//             const Icon = bab.icon; // Menarik ikon spesifik untuk tiap bab

//             return (
//               <Link key={index} href={`/literasi/${slug}/${bab.id}`}>
//                 <motion.div
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="group flex cursor-pointer items-center justify-between rounded-[20px] border border-white/5 bg-[#112A45]/60 p-4 backdrop-blur-sm transition-all hover:border-[#00D4C5]/50 hover:bg-[#112A45]"
//                 >
//                   <div className="flex items-center gap-4">
//                     {/* Kotak Ikon Dinamis */}
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#0A1128] shadow-inner">
//                       <Icon className={`h-6 w-6 ${bab.color}`} />
//                     </div>

//                     <div className="flex flex-col">
//                       <h4 className="text-sm font-semibold text-white">{bab.title}</h4>
//                       <div className="mt-1 flex items-center gap-1 text-[10px] text-[#94A3B8]">
//                         <Clock className="h-3 w-3" /> {bab.durasi}
//                       </div>
//                     </div>
//                   </div>

//                   <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-[#00D4C5]" />
//                 </motion.div>
//               </Link>
//             );
//           })
//         ) : (
//           <div className="text-center text-sm text-gray-500 mt-10">
//             Belum ada materi untuk topik ini.
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }