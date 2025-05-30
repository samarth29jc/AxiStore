import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

function CartSidebar({ isOpen, onClose }) {
  const { cart, getCartTotal, clearCart } = useCart();
  
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Cart Content */}
      <div className="absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24\" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-300 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
              <Link 
                to="/products"
                className="btn-primary"
                onClick={onClose}
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4 px-4">
              {cart.map((item) => (
                <CartItem key={item.cartItemId} item={item} />
              ))}
              
              <div className="pt-4 border-t">
                <button
                  onClick={clearCart}
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="text-gray-800 font-medium">Subtotal</span>
              <span className="text-gray-800 font-bold">${getCartTotal().toFixed(2)}</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Shipping, taxes, and discounts calculated at checkout.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/cart"
                className="btn-secondary text-center"
                onClick={onClose}
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                className="btn-primary text-center"
                onClick={onClose}
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSidebar;