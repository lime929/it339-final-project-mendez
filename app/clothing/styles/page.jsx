'use client';
import StylesHero from '../../components/StylesHero';
import LookSection from '../../components/LookSection';
import clothingArray from "@/clothing.json";

export default function StylesPage() {
    const looks = [
  {
    title: 'Skater Chic',
    image: "/images/ourStyles/outfit1.jpg",
    products: clothingArray.filter(item => ['2', '16'].includes(item._id)),
  },
];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-zinc-100">
      <StylesHero />
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
          Style Inspo
        </h1>
        <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-20">
          Discover gothic looks from White Rabbit Co. Curated outfits for dark fashion lovers.
        </p>
        {looks.map((look, index) => (
          <LookSection key={index} look={look} />
        ))}
      </section>
    </main>
  );
}
