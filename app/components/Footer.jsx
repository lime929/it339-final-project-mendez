export default function Footer() {
  return (
    <footer className="bg-[#0f0e0e]/95 backdrop-blur-md border-t border-[#541212]/50 shadow-2xl mt-16 pt-8 pb-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Left: Copyright */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-medium text-[#eeeeee]">
            © {new Date().getFullYear()}{' '}
            <span className="font-black text-white bg-clip-text text-transparent">
              White Rabbit Co.
            </span>
          </p>
          <p className="text-xs text-[#ff5382]/80 mt-2 font-mono tracking-wider">
            Made with Next.js & Tailwind • IT 339
          </p>
        </div>

        {/* Right: Links */}
        <nav className="flex flex-wrap gap-6 justify-center lg:justify-end">
        
            <a 
            href="/clothing" className="group relative text-sm font-semibold text-[#E8D7FF] px-4 py-2 rounded-lg bg-[#6A4C7A] hover:bg-[#5A3F6A] border border-[#4B3A55]/50  hover:text-[#2F1A19] transition-all duration-300 hover:shadow-md hover:shadow-[#6B201B]/20">
            <span className="relative z-10">All Clothing</span>
            <span className="absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
            <a 
            href="/clothing/styles" className="group relative text-sm font-semibold text-[#E8D7FF] px-4 py-2 rounded-lg bg-[#6A4C7A] hover:bg-[#5A3F6A] border border-[#4B3A55]/50  hover:text-[#2F1A19] transition-all duration-300 hover:shadow-md hover:shadow-[#6B201B]/20">
            <span className="relative z-10">Our Styles</span>
            <span className="absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
