import Image from 'next/image';
import BannerImage from '@/assets/images/banner.jpg';


export default function Hero() {
  return (
     
      <div className="relative w-full h-[550px]">
        <Image
          src={BannerImage}
          alt="6 women dressed in witch costumes in a forest"
          width={0}
          height={0}                    
          className="w-full h-full object-cover"
          priority
        />


        <div className="absolute inset-0 bg-[#0f0e0e]/40"></div>
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center text-center px-4">
  
          <p className="text-lg text-[#eeeeee]/90 max-w-2xl mb-8 drop-shadow-lg">
            Find your own style in our new collection of gothic clothing, inspired by the enchanting allure of forest fairies.
          </p>
            <div className="bg-[#121514]/80 px-5 py-3 text-bold rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 tracking-tight text-[#fffbf0]">Forest Fairies</h1>
          </div>
      <a href="/clothing" className="text-lg font-bold text-white/90 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all duration-300 drop-shadow-lg mt-3"> Clothing Catalog
      </a>

        </div>
      </div>
  );
}