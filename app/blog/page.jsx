import BlogCard from "../components/BlogCard";
import blogArray from "@/blog.json";
import BannerImage from "@/assets/images/banner5.jpg";
import Image from "next/image";

export const metadata = {
  title: "Blog | White Rabbit Co.",
  description:
    "Dark fashion tips, gothic style guides, and alternative clothing inspiration from White Rabbit Co.",
};

export default function BlogPage() {
  return (
    <>
{/* title & banner */}
 <div className="relative w-full h-[350px]">
        <Image
          src={BannerImage}
          alt="Dark city with full moon"
          width={0}
          height={0}                    
          className="w-full h-full object-cover"
          priority
        />

        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center text-center px-4">
            <div className="px-4 py-2 text-bold rounded-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 pr-6 tracking-tight text-[#fffbf0]">White Rabbit Blog</h1>
           
          </div>
          <div className="w-fit max-w-full mt-4 px-4 pt-0 pb-0">
           <p className="text-md font-medium tracking-wide text-[#fffbf0] max-w-2xl mb-0 drop-shadow-lg">
            Read our latest articles on gothic fashion, alternative style, and dark clothing inspiration.
          </p>
          </div>
        </div>
      </div>

{/* blog cards */}
    <div className="relative flex min-h-[330px] w-full flex-col justify-between overflow-hidden bg-[#FAFAFA] md:min-h-[400px]">
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {blogArray.map((item) => (
          <BlogCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  </div>

    </>
);
}