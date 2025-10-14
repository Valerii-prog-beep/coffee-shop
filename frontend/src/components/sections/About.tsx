// components/sections/About.tsx
interface AboutProps {
  onScrollToContacts: () => void;
}

export function About({ onScrollToContacts }: AboutProps) {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-coffee-800 mb-4">About Our Coffee House</h2>
          <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
            Where passion for coffee meets craftsmanship and community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
          <div>
            <h3 className="text-2xl font-bold text-coffee-800 mb-6">Our Story</h3>
            <div className="space-y-4 text-coffee-700">
              <p>
                Founded in 2015, Coffee House began as a small dream in the heart of the city. 
                What started as a humble corner shop has grown into a beloved community hub 
                where coffee lovers gather to enjoy exceptional brews and create lasting memories.
              </p>
              <p>
                Our journey began when our founder, Sarah Johnson, returned from a trip to 
                coffee farms in Ethiopia and Colombia with a mission: to bring the world's 
                finest coffee beans to our local community while supporting sustainable 
                farming practices.
              </p>
              <p>
                Today, we continue that mission by sourcing only the highest quality, 
                ethically-grown beans and roasting them to perfection in our own facility.
              </p>
            </div>
          </div>

          {/* Image or Stats */}
          <div className="bg-coffee-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-coffee-600">8+</div>
                <div className="text-coffee-700">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coffee-600">50+</div>
                <div className="text-coffee-700">Coffee Varieties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coffee-600">10k+</div>
                <div className="text-coffee-700">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coffee-600">5</div>
                <div className="text-coffee-700">Local Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-coffee-800 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="text-xl font-semibold text-coffee-800 mb-3">Sustainability</h4>
              <p className="text-coffee-700">
                We partner with farms that practice ethical sourcing and environmental 
                stewardship. All our packaging is 100% compostable.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-xl font-semibold text-coffee-800 mb-3">Quality</h4>
              <p className="text-coffee-700">
                Every bean is carefully selected and roasted in small batches to ensure 
                maximum freshness and flavor complexity.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold text-coffee-800 mb-3">Community</h4>
              <p className="text-coffee-700">
                We're more than a coffee shop - we're a gathering place that supports 
                local artists, musicians, and community events.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-coffee-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-coffee-800 mb-8">Our Coffee Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-coffee-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold text-coffee-800 mb-2">Sourcing</h4>
              <p className="text-sm text-coffee-700">
                Direct trade with sustainable farms worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coffee-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold text-coffee-800 mb-2">Roasting</h4>
              <p className="text-sm text-coffee-700">
                Small-batch roasting for optimal flavor profiles
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coffee-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold text-coffee-800 mb-2">Brewing</h4>
              <p className="text-sm text-coffee-700">
                Precision brewing methods for perfect extraction
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coffee-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h4 className="font-semibold text-coffee-800 mb-2">Serving</h4>
              <p className="text-sm text-coffee-700">
                Handcrafted beverages served with care and expertise
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-coffee-800 mb-8">Meet Our Team</h3>
          <p className="text-coffee-700 max-w-2xl mx-auto mb-8">
            Our passionate baristas and coffee experts are dedicated to creating 
            exceptional experiences for every customer. Each team member undergoes 
            extensive training to master the art of coffee preparation.
          </p>
          <button 
            onClick={onScrollToContacts}
            className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Visit Us Today
          </button>
        </div>
      </div>
    </section>
  );
}