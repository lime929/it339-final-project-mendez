import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ item }) { 
  return (
    <article className="group bg-zinc-900/70 rounded-lg shadow-md ring-1 ring-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-fit"> 
      <div className="relative aspect-[4/3] overflow-hidden">  
      {/* item img */}
        <Image
          src={`/images/blog/${item.images[0]}`}
          alt={item.title}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
          priority
        />
      </div>
      
      {/* item info */}
      <div className="p-2 pb-4"> 
        <h3 className="font-bold text-[#eeeeee] text-base line-clamp-2 mb-1"> 
          {item.title}
        </h3>
        <p className="text-xs text-zinc-300 mb-2">  
          {item.tagline}
        </p>
        <p className="text-xs text-zinc-400 mb-2">{item.date}</p> 
          
        <Link
          href={`/blog/${item._id}`}
          className="group relative inline-block w-full text-sm md:text-base font-bold px-3 py-2 rounded-xl bg-[#FF5483]/95 border-2 border-[#CD2251]/50 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 overflow-hidden"  
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}
