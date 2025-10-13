import { useCart } from '../../hooks/useCart';

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-2xl font-bold text-coffee-800 mb-2">Your cart is empty</h3>
        <p className="text-coffee-600">Add some delicious items from our menu!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-coffee-800">Your Order</h3>
          <button
            onClick={clearCart}
            className="text-coffee-500 hover:text-coffee-700 text-sm"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-4">
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
                  className="w-8 h-8 rounded-full bg-coffee-200 text-coffee-700 flex items-center justify-center hover:bg-coffee-300"
                >
                  -
                </button>
                <span className="font-semibold w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-coffee-200 text-coffee-700 flex items-center justify-center hover:bg-coffee-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-coffee-200">
          <div className="flex justify-between items-center text-lg font-bold text-coffee-800">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-coffee-600 hover:bg-coffee-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}