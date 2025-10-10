export function Header() {
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
        <div className="space-x-8">
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
  )
}