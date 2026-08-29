import Image from "next/image";
import Link from "next/link";

export default function ClothingCard({ item }) {  

  return (
    <article className="group bg-zinc-900/70 rounded-2xl shadow-md ring-1 ring-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-fit w-full mx-auto "> 
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-2xl">
      {/* item img */}
        <Image
          src={item.images?.[0]}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" 
          style={{ objectPosition: item.imagePosition ?? "50%" }}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* item info */}
      <div className="w-full rounded-b-2xl bg-zinc-800/80 pt-3 px-3 pb-4 flex flex-col"> 
        <h3 className="font-bold text-[#eeeeee] text-base line-clamp-2 mb-1"> 
          {item.name}
        </h3>
        <p className="text-xs text-zinc-400 mb-3">  
          ${item.price} • {item.sizes ? item.sizes.join(', ') : 'One Size'}
        </p>
         <p className="text-zinc-300 line-clamp-2 mb-2 text-xs"> 
          {item.description}
        </p>
        
        <Link
          href={`/clothing/${item._id}`}
          className="group relative block w-[60%] mx-auto mt-2 text-[14px] font-normal text-center py-1 rounded-xl bg-[#C28D9E]/95 border-2 border-[#9E5167]/50 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 overflow-hidden"  
        >
          View Details
        </Link>
      </div>
    </article>
  );
}