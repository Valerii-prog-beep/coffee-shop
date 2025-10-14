import { useCartStore } from '../../store/cartStore';
import { useState } from 'react';
import { OrderCheck } from './OrderCheck';

interface CartProps {
  onBackToMenu: () => void;
}

export function Cart({ onBackToMenu }: CartProps) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const [isOrderCheckOpen, setIsOrderCheckOpen] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-2xl font-bold text-coffee-800 mb-2">Your cart is empty</h3>
        <p className="text-coffee-600 mb-8">Add some delicious items from our menu!</p>
        <button
          onClick={onBackToMenu}
          className="flex items-center gap-2 text-coffee-600 hover:text-coffee-800 font-semibold mx-auto bg-coffee-100 hover:bg-coffee-200 px-6 py-3 rounded-lg transition-colors"
        >
          ← Back to Menu
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-coffee-800">Your Order</h3>
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 text-sm font-semibold"
            >
              Clear All
            </button>
          </div>

          {/* Order Items */}
          <div className="space-y-4 mb-6">
            {cartItems.map(item => (
              <div key={item.product.id} className="flex items-center justify-between border-b border-coffee-200 pb-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.product.imageUrl || '/images/default-coffee.jpg'} 
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-coffee-800">{item.product.name}</h4>
                    <p className="text-coffee-600 text-sm">${item.product.price}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-coffee-200 text-coffee-700 flex items-center justify-center hover:bg-coffee-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="font-semibold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-coffee-200 text-coffee-700 flex items-center justify-center hover:bg-coffee-300 transition-colors"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-700 ml-4 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Order Button */}
          <div className="pt-6 border-t border-coffee-200">
            <div className="flex justify-between items-center text-xl font-bold text-coffee-800 mb-6">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            
            {/* Order Now Button */}
            <button 
              onClick={() => setIsOrderCheckOpen(true)}
              className="w-full bg-coffee-600 hover:bg-coffee-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors text-lg shadow-md hover:shadow-lg mb-6"
            >
              Order Now
            </button>

            {/* Back to Menu Section */}
            <div className="text-center">
              {/* Pulsing Arrow */}
              <div className="animate-bounce mb-4">
                <svg 
                  className="w-8 h-8 text-coffee-500 mx-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              
              {/* Back to Menu Button */}
              <button
                onClick={onBackToMenu}
                className="flex items-center justify-center gap-2 text-coffee-600 hover:text-coffee-800 font-semibold bg-coffee-100 hover:bg-coffee-200 px-6 py-3 rounded-lg transition-colors w-full max-w-xs mx-auto"
              >
                ← Back to Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Check Modal */}
      {isOrderCheckOpen && (
        <OrderCheck onClose={() => setIsOrderCheckOpen(false)} />
      )}
    </>
  );
}