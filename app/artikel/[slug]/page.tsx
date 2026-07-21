"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { articles } from "@/data/articles";

export default function ArticlePage() {
  const params = useParams();

  const article = articles.find(
    (item) => item.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-finora-bg">
      <main className="mx-auto max-w-3xl px-5 pt-6 pb-12">

        {/* Tombol Kembali */}
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>

        {/* Hero */}
        <div className="relative mb-6 h-60 overflow-hidden rounded-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081626] via-transparent to-transparent" />
        </div>

        {/* Category */}
        <span className="rounded-full bg-[#00D4C5]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00D4C5]">
          {article.category}
        </span>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-bold leading-tight text-white">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="mt-4 mb-8 flex items-center gap-5 text-sm text-[#94A3B8]">

          <div className="flex items-center gap-1">
            <Clock size={16} />
            {article.readTime}
          </div>

          <div className="flex items-center gap-1">
            <BookOpen size={16} />
            Tim FINORA
          </div>

        </div>

        <div className="mb-8 border-b border-white/10"></div>

        {/* Content */}
        <article className="space-y-6 text-[16px] leading-8 text-[#CBD5E1]">

          {article.content.map((section, index) => (
            <div key={index}>

              {section.heading && (
                <h2 className="mb-4 mt-8 text-2xl font-bold text-white">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((paragraph, i) => (
                <p key={i} className="mb-5">
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="list-disc space-y-2 pl-6">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

            </div>
          ))}

        </article>

        {/* Tips */}
        {article.tip && (
          <div className="my-10 rounded-2xl border border-[#00D4C5]/30 bg-[#00D4C5]/10 p-6">

            <h3 className="mb-3 text-xl font-bold text-[#00D4C5]">
              💡 Tips FINORA
            </h3>

            <p className="leading-8 text-[#CBD5E1]">
              {article.tip}
            </p>

          </div>
        )}

      </main>
    </div>
  );
}