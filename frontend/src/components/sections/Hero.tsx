export function Hero() {
  const handleScrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      className="relative min-h-screen py-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/coffee-shop.png')" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-coffee-50 mb-6">
          Welcome to Coffee House
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the perfect blend of tradition and innovation in every cup. 
          Crafted with passion, served with love.
        </p>
        <button
          onClick={handleScrollToMenu}
          className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Explore Our Menu
        </button>
        
        {/* Декоративные элементы */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-coffee-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-coffee-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-coffee-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </section>
  );
}