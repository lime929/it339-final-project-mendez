export default function Footer() {
  return (
    <footer className="bg-[#0f0e0e] border-t border-[#333] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-gray-200">
          
          {/* Copyright */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="font-semibold">
              © {new Date().getFullYear()}{' '}
              <span className="font-black text-white">White Rabbit Co.</span>
            </p>
            <p className="text-xs text-[#ff5483] mt-1 font-mono tracking-wider">
              Made with Next.js & Tailwind • IT 339
            </p>
          </div>

          {/* Right links */}
          <nav className="flex items-center gap-6 order-1 md:order-2">
            <a
              href="/clothing"
              className="text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-200"
            >
              All Clothing
            </a>
            <a
              href="/clothing/styles"
              className="text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-200"
            >
              Our Styles
            </a>
            <a
              href="/clothing/about"
              className="text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-200"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-gray-200 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-200"
            >
              Blog
            </a>
            
          </nav>
        </div>
      </div>
    </footer>
  );
}
