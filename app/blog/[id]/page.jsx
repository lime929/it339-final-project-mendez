"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import blogArray from "@/blog.json";

export default function BlogPage({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const item = blogArray.find((m) => m._id === id);

  return (
    <main className="min-h-screen bg-[#fafafa] border-b border-[#333] text-zinc-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => router.replace("/blog")}
          className="group inline-flex items-center gap-2 mb-8 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 px-5 py-2.5 rounded-full text-xs font-semibold border border-zinc-700 hover:border-zinc-500 transition-all"
        >
          Back to all stories
        </button>

          {/* Header */}
        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-pink-400 mb-3">
            Dark fashion tips
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            {item.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600">
            <span>{item.date}</span>
                              {/* iterates through all tags in json file */}

            {item.tags && item.tags.length > 0 && (
              <>
              {/* dash */}
                <span className="h-0.5 w-4 bg-zinc-700" />
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-[11px] uppercase tracking-wide text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        {/* Hero image */}
        {item.images?.[0] && (
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-10 overflow-hidden rounded-2xl ring-1 ring-zinc-800 shadow-xl">
            <Image
              src={`/images/blog/${item.images[0]}`}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Tagline */}
        <section className="mb-14">
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-2xl">
            {item.tagline}
          </p>
        </section>

        <article className="prose prose-sm md:prose-base max-w-none prose-a:text-pink-400 hover:prose-a:text-pink-300 prose-p:leading-relaxed">
  {item.content.split("\n\n").map((paragraph, i) => (
    <p key={i}>{paragraph}</p>
  ))}
</article>

        {/* Second image + intro side by side */}
        {item.images?.[1] && (
          <div className="mt-14 grid gap-6 md:grid-cols-2 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-zinc-800">
              <Image
                src={`/images/blog/${item.images[1]}`}
                alt={`${item.title} detail`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center h-full">
              <p className="text-sm md:text-base text-zinc-900 leading-relaxed">
                {item.intro}
              </p>
            </div>
          </div>
        )}

        {/* Tags at bottom */}
        {item.tags && item.tags.length > 0 && (
          <footer className="mt-10 pt-8 border-t border-zinc-800">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-3">
              Tagged
            </h2>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-[11px] uppercase tracking-wide text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        )}
      </div>
    </main>
  );
}