import { Button } from "@/components/ui/button";

const featuredItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our house specialty with vanilla, cinnamon and a hint of caramel",
    price: "$4.95",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "Sourdough bread topped with avocado, cherry tomatoes, and microgreens",
    price: "$8.50",
    image: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Blueberry Scone",
    description: "Freshly baked scone with organic blueberries and lemon glaze",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1586195831800-24f14c992cea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedItems = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Items</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most loved menu items, crafted with care using only the finest ingredients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-semibold text-amber-800">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline" className="w-full border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-amber-800 hover:bg-amber-900 px-8 py-3">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;