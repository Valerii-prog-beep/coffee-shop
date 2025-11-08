import { useCartStore } from '../../store/cartStore';

interface HeaderProps {
  onCartClick?: () => void;
}

export function Header({ }: HeaderProps) {
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

  return (
    <header className="bg-coffee-50 shadow-sm border-b border-coffee-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {/* Логотип */}
            <div className="flex items-center">
              <img 
                src="/images/coffee-logo.png" 
                alt="Coffee Shop" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'text-2xl font-bold text-coffee-700';
                  fallback.textContent = 'Coffee Shop';
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
              />
            </div>
            
            {/* Навигация */}
            <nav className="flex space-x-6">
              <button 
                onClick={() => handleScrollTo('menu')}
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-coffee-100"
              >
                Menu
              </button>
              <button 
                onClick={() => handleScrollTo('about')}
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-coffee-100"
              >
                About
              </button>
              <button 
                onClick={() => handleScrollTo('contacts')}
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-coffee-100"
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Корзина */}
          <div className="relative">
            <button 
              onClick={() => handleScrollTo('cart')}
              className="flex items-center space-x-2 text-coffee-700 hover:text-coffee-900 transition-colors p-3 rounded-lg hover:bg-coffee-100"
            >
              <span className="text-xl">🛒</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-coffee-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}