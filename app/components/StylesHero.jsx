import Image from 'next/image';
import BannerImage from '@/assets/images/banner3.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={BannerImage} 
        alt="White Rabbit Co. Style Inspiration"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
          White Rabbit Co.
        </h2>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-8">
          Fall into dark fashion. Explore occult-inspired outfits.
        </p>
        <a href="/clothing" 
          className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all shadow-2xl hover:shadow-white/20"
        >
          Shop the Looks
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
