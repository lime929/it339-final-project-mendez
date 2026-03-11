import Image from "next/image";

export default function ItemPage({ params }) {
   const { id } = params;

  const item = clothingArray.find(m => m._id === id);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        <button 
          onClick={() => router.replace('/clothing')}
          className="group inline-flex items-center gap-2 mb-12 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 px-6 py-3 rounded-lg font-bold text-base border border-zinc-700 hover:border-zinc-500 hover:shadow-lg transition-all duration-300"
        >
          Back to Catalog
        </button>

        <div className="grid gap-8 lg:grid-cols-2 items-start lg:gap-12">
          
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-zinc-800 shadow-xl">
            <Image
              src={`/images/${item.images[0]}`} 
              alt={item.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <div className="space-y-6">
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {item.name}
            </h1>

            <div className="text-3xl font-bold text-white mb-6">
              ${item.price}
              <span className="text-xl text-zinc-400 ml-4">{item.rating}</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-400 uppercase tracking-wide font-semibold">Type</span>
                <span className="font-bold text-zinc-200">{item.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 uppercase tracking-wide font-semibold">Fabric</span>
                <span className="font-bold text-zinc-200">{item.fabric}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-zinc-400 mb-2">Size</label>
                <select className="w-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 focus:border-zinc-500 focus:outline-none rounded-lg px-4 py-3 text-base font-semibold text-white transition-colors">
                  {item.sizes?.map((size, i) => (
                    <option key={i}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-zinc-400 mb-2">Color</label>
                <div className="flex gap-2">
                  {item.colors?.map((color, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 rounded-lg border-2 border-zinc-700 hover:border-white focus:border-white focus:outline-none hover:scale-105 transition-all"
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full bg-black hover:bg-zinc-900 border-2 border-zinc-700 hover:border-zinc-500 text-white font-bold text-lg py-4 px-6 rounded-xl uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
              Add to Cart
            </button>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
              {item.keywords?.map((keyword) => (
                <span key={keyword} className="px-3 py-1 bg-zinc-800/50 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 rounded-md transition-colors cursor-pointer">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <h3 className="text-2xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">
            Description
          </h3>
          <p className="text-base leading-relaxed text-zinc-300 max-w-3xl">
            {item.description}
          </p>
        </div>
      </div>
    </main>
  );
}
