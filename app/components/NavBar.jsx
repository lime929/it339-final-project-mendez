import Link from "next/link";
import Image from "next/image";
import logoIcon from '@/assets/images/logo.png';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      {/* Promo bar */}
      <div className="text-center text-xs sm:text-sm text-[#1a1a1a] py-2 font-semibold border-b border-gray-200">
        <span>FREE US Shipping w/ $75 orders</span>
      </div>

      <nav className="bg-[#0f0e0e] border-b border-[#333] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Left */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <Image
                src={logoIcon}
                alt="White Rabbit Co. Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-black text-white tracking-tight">
                White Rabbit Co.
              </span>
            </Link>

            {/* Nav links - Center on large screens */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold mx-auto">
              <li>
                <Link
                  href="/clothing"
                  className="text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition"
                >
                  All Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="/clothing/styles"
                  className="text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition"
                >
                  Our Styles
                </Link>
              </li>
              <li>
                <Link
                  href="/clothing/about"
                  className="text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/clothing/blog"
                  className="text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Right icons - Properly right-aligned */}
            <div className="flex items-center gap-2 text-gray-200 text-sm ml-auto">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-transparent hover:border-gray-400 hover:bg-black/20 hover:text-white transition-all duration-200">
                <FaSearch className="text-lg" />
                <span className="hidden sm:inline">Search</span>
              </button>
              
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-transparent hover:border-gray-400 hover:bg-black/20 hover:text-white transition-all duration-200">
                <FaUser className="text-lg" />
                <span className="hidden sm:inline">Login</span>
              </button>
              
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-200 relative">
                <FaShoppingCart className="text-lg" />
                <span className="hidden sm:inline">Cart</span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-xs text-white rounded-full flex items-center justify-center font-bold">3</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
