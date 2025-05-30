import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Local Artist",
    content: "This café has become my second home. The atmosphere is perfect for creativity, and their hazelnut latte is simply divine. The staff remembers my name and order every time!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    content: "I've had meetings and done work from this café for years. The Wi-Fi is reliable, the coffee is exceptional, and the ambient noise is just right. Perfect for productivity!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    content: "As someone who visits cafés professionally, I can say with confidence that this place stands out. Their pastries are made fresh daily, and the coffee beans are roasted to perfection.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;