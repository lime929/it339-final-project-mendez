import BlogCard from "../components/BlogCard";
import blogArray from "@/blog.json";

export const metadata = {
  title: "Blog | White Rabbit Co.",
  description: "Dark fashion tips, gothic style guides, and alternative clothing inspiration from White Rabbit Co.",
};

export default function BlogPage() {
  return (
    <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto"> 
      <h1 className="text-4xl font-bold mb-6 text-center">White Rabbit Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* iterates through each article using json file's data and BlogCard's structure */}
        {blogArray.map((item) => (
          <BlogCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
