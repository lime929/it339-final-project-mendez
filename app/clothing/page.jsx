import ClothingCard from "../components/ClothingCard";
import clothingArray from "@/clothing.json";

export const metadata = {
  title: "All Clothing | White Rabbit Co.",
  description: "Browse our full collection of gothic dresses, blouses, accessories, and dark alternative apparel.",
};

export default function CatalogPage() {
  return (
        <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-[#0e0e0e] mb-8 ">All Clothing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* iterates through each item using json file's data and ClothingCard's structure */}
        {clothingArray.map((item) => (
          <ClothingCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  )
}
