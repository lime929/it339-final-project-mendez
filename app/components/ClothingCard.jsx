import Image from "next/image";
import Link from "next/link";

export default function ClothingCard({ item }) {  

  return (
    <article className="group bg-zinc-900/70 rounded-lg shadow-md ring-1 ring-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-fit w-72 mx-auto"> 
      <div className="relative aspect-[2/3] overflow-hidden">  
        <Image
          src={item.images?.[0]}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-3"> 
        <h3 className="font-bold text-[#eeeeee] text-base line-clamp-2 mb-1"> 
          {item.name}
        </h3>
        <p className="text-xs text-zinc-400 mb-3">  
          ${item.price} • {item.sizes ? item.sizes.join(', ') : 'One Size'}
        </p>
        
        <Link
          href={`/clothing/${item._id}`}
          className="group relative inline-block w-full text-sm md:text-base font-bold px-3 py-2 rounded-xl bg-[#3f1a2b]/95 border-2 border-[#d946ef]/50 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 overflow-hidden"  
        >
          View Details
        </Link>
      </div>
    </article>
  );
}