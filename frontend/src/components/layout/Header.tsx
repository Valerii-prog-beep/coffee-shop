import  {useCartStore}  from '../store/cartStore';

export function Header() {
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-coffee-800 text-white p-4 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-center">
        <div className="space-x-8 flex items-center">
          <button 
            onClick={scrollToTop}
            className="hover:text-coffee-300 transition-colors text-lg font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => handleScrollTo('menu')}
            className="hover:text-coffee-300 transition-colors text-lg font-medium"
          >
            Menu
          </button>
          <button 
            onClick={() => handleScrollTo('cart')}
            className="hover:text-coffee-300 transition-colors text-lg font-medium relative"
          >
            Cart
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-4 bg-coffee-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
          <button 
            onClick={() => handleScrollTo('about')}
            className="hover:text-coffee-300 transition-colors text-lg font-medium"
          >
            About
          </button>
          <button 
            onClick={() => handleScrollTo('contact')}
            className="hover:text-coffee-300 transition-colors text-lg font-medium"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}