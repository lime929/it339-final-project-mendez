'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import logoIcon from '@/assets/images/logo.png';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Promo bar */}
      <div className="bg-zinc py-2 text-center text-xs sm:text-sm text-zinc-900 font-semibold border-b border-zinc-800">
        <span>FREE US Shipping w/ $75 orders</span>
      </div>

      <nav className="bg-[#0f0e0e] border-b border-[#333] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="relative flex h-16 items-center justify-between">
            
            {/* Mobile menu button: always positioned absolute left and hidden on md+ screens */}
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center md:justify-start">
              {/* Logo */}
              <Link href="/" className="flex flex-shrink-0 items-center gap-2 hover:opacity-90 transition">
                <Image
                  src={logoIcon}
                  alt="White Rabbit Co. Logo"
                  width={40}
                  height={40}
                  className="rounded h-10 w-auto"
                  priority
                />
                <span className="hidden md:block text-xl font-black text-white tracking-tight mr-9">
                  White Rabbit Co.
                </span>
              </Link>

              {/* Desktop Nav Links*/}
              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4 lg:space-x-6">
                  <Link
                    href="/clothing"
                    className={`${
                      pathname === "/clothing" ? "border-b-2 border-white text-white" : "text-zinc-300 hover:text-white hover:border-b-2 hover:border-white"
                    } text-sm font-semibold pb-1 transition-all`}
                  >
                    All Clothing
                  </Link>
                  <Link
                    href="/clothing/styles"
                    className={`${
                      pathname === "/clothing/styles" ? "border-b-2 border-white text-white" : "text-zinc-300 hover:text-white hover:border-b-2 hover:border-white"
                    } text-sm font-semibold pb-1 transition-all`}
                  >
                    Our Styles
                  </Link>
                  <Link
                    href="/clothing/about"
                    className={`${
                      pathname === "/clothing/about" ? "border-b-2 border-white text-white" : "text-zinc-300 hover:text-white hover:border-b-2 hover:border-white"
                    } text-sm font-semibold pb-1 transition-all`}
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className={`${
                      pathname === "/blog" ? "border-b-2 border-white text-white" : "text-zinc-300 hover:text-white hover:border-b-2 hover:border-white"
                    } text-sm font-semibold pb-1 transition-all`}
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* icons on right are always right aligned on mobile and static on md+ screens */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:ml-6 md:pr-0">
              <div className="flex items-center gap-2 text-zinc-400">
                <button className="p-2 rounded-full hover:bg-zinc-800 hover:text-white transition-all">
                  <FaSearch className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </button>
                
                <button className="p-2 rounded-full hover:bg-zinc-800 hover:text-white transition-all">
                  <FaUser className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </button>
                
                <button className="relative p-2 rounded-full border border-zinc-600 hover:border-white hover:bg-white/10 transition-all">
                  <FaShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-xs text-white rounded-full flex items-center justify-center font-bold">3</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0f0e0e]/95 backdrop-blur-md border-t border-zinc-700 px-4 pb-4 pt-2 space-y-1">
            <Link
              href="/clothing"
              className={`${
                pathname === "/clothing" ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Clothing
            </Link>
            <Link
              href="/clothing/styles"
              className={`${
                pathname === "/clothing/styles" ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Styles
            </Link>
            <Link
              href="/clothing/about"
              className={`${
                pathname === "/clothing/about" ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog" ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              } block rounded-md px-3 py-3 text-base font-semibold transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
