import Image from 'next/image';
import BannerImage from '@/assets/images/banner4.jpg';

export default function AboutHero() {
  return (
    <section className="mb-20">
      <div className="relative w-full h-[550px] overflow-hidden rounded-b-3xl">
        <Image
          src={BannerImage}
          alt="Crystals and Pin with eye in middle"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 md:px-8 pb-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              About White Rabbit Co.
            </h1>
            <p className="text-base md:text-lg text-zinc-200 max-w-2xl leading-relaxed">
              Since our small beginnings in 2023, we've been dedicated to crafted gothic
              apparel for the love of the culture. We may still be niche but White Rabbit
              Co. prides itself with being an independent, family-owned business. Whether
              you're goth, emo, or any other flavor of alternative White Rabbit Co. welcomes
              you! Follow us down the rabbit hole.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
