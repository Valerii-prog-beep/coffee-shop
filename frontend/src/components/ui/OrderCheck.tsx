import { useCartStore } from '../../store/cartStore';
import { useEffect, useState } from 'react';

interface OrderCheckProps {
  onClose: () => void;
}

export function OrderCheck({ onClose }: OrderCheckProps) {
  const { cartItems, getTotalPrice, clearCart } = useCartStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Задержка для плавного появления
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  const handleConfirmOrder = () => {
    // Здесь будет логика отправки заказа на бэкенд
    alert('Order confirmed! Thank you for your purchase!');
    clearCart();
    onClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    // Ждем завершения анимации перед закрытием
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const orderNumber = `#${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const serviceFee = 1.50;
  const total = subtotal + tax + serviceFee;

  if (cartItems.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className={`bg-white rounded-lg max-w-md w-full p-6 transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold text-coffee-800 mb-2">Your cart is empty</h3>
            <p className="text-coffee-600 mb-6">Add some items to your cart before ordering.</p>
            <button
              onClick={handleClose}
              className="bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Overlay с анимацией */}
      <div 
        className={`fixed inset-0 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Модальное окно */}
      <div className={`bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b border-coffee-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-coffee-800">Order Check</h2>
              <p className="text-coffee-600 text-sm">Review your order before confirming</p>
            </div>
            <button 
              onClick={handleClose}
              className="text-coffee-500 hover:text-coffee-700 text-2xl p-2 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Order Info */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <span className="text-coffee-600">Order #:</span>
              <span className="font-semibold ml-2 text-coffee-800">{orderNumber}</span>
            </div>
            <div>
              <span className="text-coffee-600">Date:</span>
              <span className="font-semibold ml-2 text-coffee-800">{currentDate}</span>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-coffee-800 mb-4">Order Items</h3>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex justify-between items-center border-b border-coffee-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={item.product.imageUrl || '/images/default-coffee.jpg'} 
                      alt={item.product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-coffee-800">{item.product.name}</h4>
                      <p className="text-coffee-600 text-sm">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-coffee-800">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-coffee-600 text-sm">
                      ${item.product.price} × {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-coffee-50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-coffee-800 mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-coffee-600">Subtotal:</span>
                <span className="text-coffee-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-coffee-600">Tax (8%):</span>
                <span className="text-coffee-800">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-coffee-600">Service Fee:</span>
                <span className="text-coffee-800">${serviceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-coffee-200 pt-2 font-semibold text-coffee-800 text-base">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-coffee-800 mb-3">Order Details</h3>
            <div className="text-sm text-coffee-600 space-y-2">
              <p>• Estimated preparation time: 15-20 minutes</p>
              <p>• You will receive SMS notification when order is ready</p>
              <p>• Please have your order number ready for pickup</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
            >
              Continue Shopping
            </button>
            <button
              onClick={handleConfirmOrder}
              className="flex-1 bg-coffee-600 hover:bg-coffee-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}