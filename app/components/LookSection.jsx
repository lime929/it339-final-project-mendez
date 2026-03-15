import Image from 'next/image';
import ClothingCard from './ClothingCard';
import Link from 'next/link';

export default function LookSection({ look }) {
  return (
    <div id="looks" className="mb-24">
      <div className="relative w-full h-[650px] md:h-[750px] lg:h-[900px] rounded-3xl overflow-hidden mb-12 ring-1 ring-zinc-800/50 shadow-2xl">
        <Image
          src={look.image}
          alt={look.title}
          fill
          className="object-cover [object-position:50%_30%] hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {look.title}
          </h3>
        </div>
        <Link 
          href="/clothing"
          className="absolute top-6 right-6 bg-white/90 hover:bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg"
        >
          SHOP THIS LOOK
        </Link>
      </div>

      {/* Outfit text desc */}

      {/* Items to purchase List */}
      <p className="text-zinc-400 text-lg max-w-5xl mx-auto mb-8">
        {look.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {look.products.map((item) => (
          <ClothingCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
