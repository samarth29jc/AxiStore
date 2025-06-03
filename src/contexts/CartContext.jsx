import { createContext, useState, useContext, useEffect } from 'react';
import { useNotification } from './NotificationContext';

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getCartCount: () => 0,
  isCartOpen: false,
  toggleCart: () => {}
});

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { showNotification } = useNotification();

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, selectedSize, selectedColor) => {
    if (!product || !selectedSize || !selectedColor) {
      showNotification('Please select size and color', 'error');
      return;
    }

    setCart(prevCart => {
      const cartItemId = `${product.id}-${selectedSize}-${selectedColor}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      showNotification(`Added ${product.name} to cart`, 'success');
      return [
        ...prevCart,
        {
          ...product,
          quantity,
          size: selectedSize,
          color: selectedColor,
          cartItemId
        }
      ];
    });
  };

  const removeFromCart = (cartItemId) => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.cartItemId === cartItemId);
      if (item) {
        showNotification(`Removed ${item.name} from cart`, 'success');
      }
      return prevCart.filter(item => item.cartItemId !== cartItemId);
    });
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    showNotification('Cart cleared', 'success');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.discountPrice || item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isCartOpen,
    toggleCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};