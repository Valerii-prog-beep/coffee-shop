import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { ProductCard } from './components/ui/ProductCard'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products, categories, featuredProducts, loading, error } = useProducts()

  if (loading) {
    return (
      <div className="min-h-screen bg-coffee-50 flex items-center justify-center">
        <div className="text-2xl text-coffee-700">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-coffee-50 flex items-center justify-center">
        <div className="text-2xl text-coffee-800">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-coffee-50">
      <Header />
      <Hero />
      <main className="container mx-auto py-12 px-4">
        {/* Menu Section */}
        <section id="menu" className="mb-16">
          <h2 className="text-4xl font-bold text-center text-coffee-800 mb-12">
            Our Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Кнопка заказа */}
          <div className="text-center">
            <button className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg">
              Order Now
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-coffee-800 mb-6">
            About Our Coffee House
          </h2>
          <p className="text-coffee-700 text-lg text-center max-w-2xl mx-auto">
            We are passionate about coffee and dedicated to bringing you the finest brews 
            from around the world. Every cup tells a story of quality and craftsmanship.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-coffee-800 mb-8">
            Visit Us
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="text-center text-coffee-700 space-y-3">
              <p className="flex items-center justify-center gap-2">
                <span>📞</span> +1 (555) 123-4567
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📧</span> hello@coffeehouse.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📍</span> 123 Coffee Street, Brew City
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-coffee-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Coffee House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App