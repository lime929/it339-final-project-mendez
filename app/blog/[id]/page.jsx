"use client";

import { useRouter } from "next/navigation";
import { use, Fragment } from "react";
import Image from "next/image";
import blogArray from "@/blog.json";

export default function BlogPage({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const item = blogArray.find((m) => m._id === id);

  return (
    <main className="min-h-screen bg-[#fafafa] border-b border-[#333] text-zinc-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <button
          type="button"
          onClick={() => router.replace("/blog")}
          className="group inline-flex items-center gap-2 mb-8 text-[11px] uppercase tracking-[0.22em] text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
        >
          <span aria-hidden="true" className="text-base leading-none transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          <span className="font-medium">Back to all stories</span>
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

          {/* iterates through all tags in json file using their length */}
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
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl">
            {item.tagline}
          </p>
        </section>

{/* Displays article paragraphs and inserts the third image after paragraph 2 */}
<article className="max-w-none">
  {item.content.split("\n\n").map((paragraph, i) => (
    <Fragment key={i}>
      <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-6">
        {paragraph}
      </p>

      {i === 1 && item.images?.[2] && (
        <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] my-10 overflow-hidden rounded-2xl ring-1 ring-zinc-800 shadow-xl">
          <Image
            src={`/images/blog/${item.images[2]}`}
            alt={`${item.title} featured look`}
            fill
            className="object-cover"
          />
        </div>
      )}
    </Fragment>
  ))}
</article>



  
        {/* Second image & text */}
{item.images?.[1] && (
  <section>
    <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-800">
      <Image
        src={`/images/blog/${item.images[1]}`}
        alt={`${item.title} detail`}
        fill
        className="object-cover"
      />
    </div>

    <p className="mt-6 text-sm md:text-base text-zinc-900 leading-relaxed">
      {item.intro}
    </p>
  </section>
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