import ClothingCard from "../components/ClothingCard";
import clothingArray from "@/clothing.json";

export default function Preview() {
  return (
      <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-[#0e0e0e] mb-8 ">Explore our Clothing</h1>
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9">
       {clothingArray.slice(-3).map((item) => (
            <ClothingCard key={item._id} item={item} />
        ))}

      </div>
    </div>
    </div>
  )
}
