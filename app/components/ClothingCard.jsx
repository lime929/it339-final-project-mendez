import Image from "next/image";
import Link from "next/link";

export default function ClothingCard({ item }) {  

  return (
    <article className="group bg-zinc-900/70 rounded-lg shadow-md ring-1 ring-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-fit"> 
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
          ${item.price} • {item.sizes?.[0] || 'One Size'}
        </p>
        
        <Link
          href={`/clothing/${item._id}`}
          className="block w-full bg-[#541212] hover:bg-[#468a9a] text-[#eeeeee] text-center py-2 px-3 rounded-lg font-semibold text-xs transition-all"  
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
