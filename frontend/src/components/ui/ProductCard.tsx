import type { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { addToCart } = useCartStore();

  // Функция для получения пути к изображению продукта
  const getProductImage = (product: Product) => {
    const imageMap: Record<string, string> = {
      'Espresso': '/images/espresso.png',
      'Cappuccino': '/images/cappuccino.png',
      'Latte': '/images/latte.png',
      'Americano': '/images/americano.png',
      'Mocha': '/images/mocha.png',
      'Green Tea': '/images/green-tea.png',
      'Earl Grey': '/images/earl-grey.png',
      'Chai Latte': '/images/chai-latte.png',
      'Chocolate Cake': '/images/chocolate-cake.png',
      'Croissant': '/images/croissant.png',
      'Blueberry Muffin': '/images/blueberry-muffin.png',
      'Avocado Toast': '/images/avocado-toast.png',
      'Greek Yogurt Bowl': '/images/greek-yogurt-bowl.png'
    };
    
    return imageMap[product.name] || '/images/default-coffee.jpg';
  };

  // Функция для получения иконки категории
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'coffee': return '☕';
      case 'tea': return '🍵';
      case 'desserts': return '🍰';
      case 'breakfast': return '🥑';
      default: return '☕';
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    onAddToCart(); // Вызываем скролл после добавления
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Product Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-coffee-200 to-coffee-300 overflow-hidden">
        {/* Real Product Image */}
        <img 
          src={getProductImage(product)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            // If image fails to load, hide it and show the icon
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Category Icon (shown as fallback or under image) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-80">{getCategoryIcon(product.category.name)}</span>
        </div>
        
        {/* Featured Badge */}
        {product.isFeatured && (
          <div className="absolute top-3 right-3 bg-coffee-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            Featured
          </div>
        )}
        
        {/* Preparation Time */}
        {product.preparationTime && (
          <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            ⏱️ {product.preparationTime} min
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="p-6">
        {/* Name and Price */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-coffee-800 leading-tight">{product.name}</h3>
          <span className="text-lg font-bold text-coffee-600 whitespace-nowrap">${product.price}</span>
        </div>
        
        {/* Description */}
        <p className="text-coffee-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        {/* Category and Calories */}
        <div className="flex justify-between items-center mb-4">
          <span className="inline-flex items-center gap-1 bg-coffee-100 text-coffee-700 px-3 py-1 rounded-full text-xs font-medium">
            <span>{getCategoryIcon(product.category.name)}</span>
            {product.category.name}
          </span>
          {product.calories && (
            <span className="text-coffee-500 text-xs font-medium">{product.calories} cal</span>
          )}
        </div>

        {/* Ingredients (if available) */}
        {product.ingredients && (
          <div className="mb-4">
            <p className="text-coffee-500 text-xs line-clamp-1">
              🍃 {product.ingredients}
            </p>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.isAvailable}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            product.isAvailable
              ? 'bg-coffee-600 hover:bg-coffee-700 text-white shadow-md hover:shadow-lg active:scale-95'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.isAvailable ? (
            <>
              <span>🛒</span>
              Add to Cart
            </>
          ) : (
            'Out of Stock'
          )}
        </button>
      </div>
    </div>
  );
};