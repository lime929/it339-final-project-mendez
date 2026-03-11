import Image from 'next/image';
import Link from "next/link";
import AboutImage from '@/assets/images/banner2.jpg';

export default function SpringSaleBanner() {
  return (
    <section className="relative w-full bg-[#0f0e0e] overflow-hidden">
      <div className="relative w-full h-[450px] md:h-[500px]">
        {/* CHANGE IMAGE */}
        <Image
          src={AboutImage}
          alt="Spring Sale - 40% Off All Items"
          fill
          className="w-full h-full object-cover brightness-75" 
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0e]/80 via-[#0f0e0e]/50 to-transparent"></div>

        <div className="absolute left-8 md:left-16 bottom-12 md:bottom-16 w-full max-w-2xl"> 
          <p className="text-[#ff5483] font-semibold text-sm md:text-base mb-4 tracking-wider uppercase drop-shadow-lg">
            SPRING SALE - White Rabbit Co.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
            40% OFF ALL CLOTHING
          </h2>
          <p className="text-[#9aa3a9] text-base md:text-lg leading-relaxed mb-8 drop-shadow-md max-w-lg">
  Get 40% off ALL clothing, dresses, blouses, and accessories automatically at checkout.{' '}
  <span className="mt-4 block mb-6"> {/* Use span + block */}
    Limited time only - stock up on your dark essentials before they're gone. No code needed.
  </span>
  <span className="text-white font-semibold block mt-2">March 13 - April 21</span>
</p>

          {/* CHANGE RED COLOR TO PINK */}
          <Link
            href="/clothing"
            className="group relative inline-block text-base font-bold px-8 py-4 rounded-xl bg-[#541212]/95 hover:bg-[#541212] border-2 border-[#ff5483]/50 hover:border-[#ff5483] text-white backdrop-blur-sm shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Shop Sale Now</span> 
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff5483]/20 to-[#541212]/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
