const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Cafe interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Coffee brewing" 
                  className="w-64 h-64 object-cover rounded-lg shadow-xl border-4 border-white"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-800 mb-6"></div>
            
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Café Serenity began as a small passion project by two friends who shared a love for exceptional coffee and creating community spaces.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              We source our beans directly from sustainable farms around the world, ensuring fair compensation for farmers while bringing you the finest flavors. Each cup is carefully crafted by our trained baristas who are as passionate about coffee as we are.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Beyond coffee, we're committed to creating a welcoming space where people can connect, work, or simply enjoy a moment of tranquility in their busy day.
            </p>
            
            <div className="flex items-center space-x-6 mt-8">
              <div>
                <p className="text-4xl font-bold text-amber-800">12+</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-800">5</p>
                <p className="text-gray-600">Locations</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-800">15k+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;