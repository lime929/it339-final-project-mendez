import Link from "next/link";
import Image from "next/image";
import logoIcon from '@/assets/images/logo.png';

export default function NavBar() {
  return (
    <nav className="bg-[#0f0e0e]/95 backdrop-blur-md border-b border-[#541212]/50 shadow-2xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
          <Image
            src={logoIcon}
            alt="White Rabbit Co. Logo"
            width={44}
            height={44}
            className="
              rounded-xl 
              ring-2 
              ring-[#4B3A55]/70             
              group-hover:ring-4 
              group-hover:ring-[#E8D7FF]/80   
              transition-all
              duration-300
            "
          />
          <span className="text-2xl lg:text-3xl font-black text-white bg-clip-text text-transparent drop-shadow-lg">
            White Rabbit Co.
          </span>
        </Link>

        {/* Links */}
        <ul className="flex flex-row gap-6 lg:gap-8">
          <li>
            <Link 
              href="/clothing"
              className="group relative text-lg font-semibold text-[#E8D7FF] px-6 py-3 rounded-xl
                         bg-[#6A4C7A] hover:bg-[#5A3F6A]
                         border border-[#4B3A55]/50
                         hover:text-[#2F1A19]
                         hover:outline hover:outline-2 hover:outline-[#E8D7FF]/70 hover:outline-offset-2
                         transition-all duration-300 hover:shadow-md hover:shadow-[#6B201B]/20"
            >
              <span className="relative z-10">All Clothing</span>
              <span className="absolute inset-0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link 
              href="/clothing/styles"
              className="group relative text-lg font-semibold text-[#E8D7FF] px-6 py-3 rounded-xl
                         bg-[#6A4C7A] hover:bg-[#5A3F6A]
                         border border-[#4B3A55]/50
                         hover:text-[#2F1A19]
                         hover:outline hover:outline-2 hover:outline-[#E8D7FF]/70 hover:outline-offset-2
                         transition-all duration-300 hover:shadow-md hover:shadow-[#6B201B]/20"
            >
              <span className="relative z-10">Our Styles</span>
              <span className="absolute inset-0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
