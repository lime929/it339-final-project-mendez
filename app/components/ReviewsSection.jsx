export default function ReviewsSection() {

  const reviews = [
    {
      name: "Raven M.",
      location: "Chicago, IL",
      quote: "White Rabbit Co. is the only brand that actually gets my style. Every piece I've ordered feels like it was made specifically for me: dark, feminine, and completely unapologetic. The quality is unreal for the price, and I get compliments every single time I wear anything from here. I've already converted three of my friends.",
    },
    {
      name: "Ashely K.",
      location: "Portland, OR",
      quote: "I've been searching for gothic clothing that doesn't feel cheap or costumey for years, and White Rabbit Co. finally did it. The fabrics are luxurious, the silhouettes are flattering, and the details, lace, velvet, the little hardware touches, feel intentional. This is the kind of brand I'll be loyal to for a long time.",
    },
    {
      name: "Maria H.",
      location: "Austin, TX",
      quote: "Ordering from White Rabbit Co. felt like someone finally built a store for people like me. The packaging alone made me feel special, but the clothes are what kept me coming back. I ordered the velvet jacket and wore it three times in the first week. It's the kind of piece that makes you walk more confidently and as completely yourself.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-zinc-800">
          What Our Coven Says
        </h2>
        <p className="text-xl text-zinc-700 text-center max-w-2xl mx-auto mb-20">
          Real words from real women who refused to blend in.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-4 ring-1 ring-zinc-800/50 shadow-2xl">
              <p className="text-zinc-300 text-lg leading-relaxed">"{r.quote}"</p>
              <div className="mt-auto pt-4 border-t border-zinc-800">
                <p className="text-white font-bold">{r.name}</p>
                <p className="text-zinc-500 text-sm">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}