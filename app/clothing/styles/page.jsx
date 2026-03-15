import StylesHero from '../../components/StylesHero';
import LookSection from '../../components/LookSection';
import clothingArray from "@/clothing.json";

export const metadata = {
  title: "Our Styles | White Rabbit Co.",
  description: "Explore curated gothic outfit inspiration from White Rabbit Co. - dark, elegant looks for every occasion.",
};

export default function StylesPage() {
const looks = [
  {
    title: 'Sultry in the Snow',
    image: "/images/ourStyles/Outfit1.jpg",
    description: "Cold weather has never looked this good. These two pieces work together effortlessly: one brings the warmth, the other brings the drama, and together they strike that perfect balance between cozy and commanding. The 'Sultry in the Snow' vibe is all about owning winter instead of hiding from it, looking powerful even when the temperature drops. When you wear White Rabbit Co., you're not just staying warm you're making sure nobody forgets you walked into the room.",
    products: clothingArray.filter(item => ['16', '4'].includes(item._id)),
  },
  {
    title: 'Festival Babe',
    image: "/images/ourStyles/Outfit2.jpg",
    description: "Festival season calls for looks that can keep up with you from the first act to the last, and this pairing does exactly that. The two pieces complement each other beautifully, being bold enough to turn heads in a crowd, but styled with enough intention that you look curated, not chaotic. 'Festival Babe' is for the woman who shows up to every event like she's headlining it, because honestly, she is. White Rabbit Co. pieces are built to move with you, hold their edge all day, and still look incredible in every photo.",
    products: clothingArray.filter(item => ['15', '5'].includes(item._id)),
  },
  {
    title: 'Office Siren',
    image: "/images/ourStyles/Outfit3.jpg",
    description: "Who said work attire has to be boring? This look proves that structured, professional dressing and a dark, alternative aesthetic aren't mutually exclusive. In fact, they're better together. The two pieces balance each other out perfectly: one grounds the look with polish, while the other keeps it unmistakably you. White Rabbit Co. designs for women who refuse to leave their personality at the door, no matter where the day takes them.",
    products: clothingArray.filter(item => ['7', '2'].includes(item._id)),
  },
  {
    title: 'Mysterious Beauty',
    image: "/images/ourStyles/Outfit4.jpg",
    description: "Some looks ask for attention, this one simply commands it without saying a word. These two pieces were made to exist together, each one adding a layer of intrigue that deepens the overall effect, like a secret only the wearer fully understands. 'Mysterious Beauty' is the aesthetic for women who move through the world with quiet confidence and a style that leaves people wondering. With White Rabbit Co., every outfit is a piece of wearable storytelling dark, deliberate, and entirely unforgettable.",
    products: clothingArray.filter(item => ['13', '3'].includes(item._id)),
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
        {/* iterates through each look using json file's data and LookSection's structure */}
        {looks.map((look, index) => (
          <LookSection key={index} look={look} />
        ))}
      </section>
    </main>
  );
}
