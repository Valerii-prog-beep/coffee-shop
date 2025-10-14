import { Header } from '../components/layout/Header';
import { Hero } from '../components/sections/Hero';
import { ProductCard } from '../components/ui/ProductCard';
import { Cart } from '../components/ui/Cart';
import { useProducts } from '../hooks/useProducts';
import { About } from '../components/sections/About';

export function MainPage() {
  const { products, categories, featuredProducts, loading, error } = useProducts();

  const handleScrollToCart = () => {
    const cartElement = document.getElementById('cart');
    if (cartElement) {
      cartElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleScrollToContacts = () => {
  const contactsElement = document.getElementById('contacts');
  if (contactsElement) {
    contactsElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

  const handleScrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-coffee-50 flex items-center justify-center">
        <div className="text-2xl text-coffee-700">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-coffee-50 flex items-center justify-center">
        <div className="text-2xl text-coffee-800">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-coffee-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto py-12 px-4">
        {/* Cart Section */}
        <section id="cart" className="mb-16">
          <Cart onBackToMenu={handleScrollToMenu} />
        </section>

        {/* Menu Section */}
        <section id="menu" className="mb-16">
          <h2 className="text-4xl font-bold text-center text-coffee-800 mb-12">
            Our Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={handleScrollToCart}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <About onScrollToContacts={handleScrollToContacts} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-coffee-800 mb-8">
            Contacts
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="text-center text-coffee-700 space-y-3">
              <p className="flex items-center justify-center gap-2">
                <span>📞</span> 8 (029) 123-4567
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📧</span> hello@coffeehouse.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📍</span> Novovilenskaya street 55, Minsk
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-coffee-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Coffee House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}