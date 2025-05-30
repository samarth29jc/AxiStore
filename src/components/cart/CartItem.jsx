import { useCart } from '../../contexts/CartContext';

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();
  const price = item.discountPrice || item.price;
  
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(item.cartItemId, newQuantity);
  };

  return (
    <div className="flex border-b border-gray-200 pb-4">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
            <p className="mt-1 text-xs text-gray-500">
              {item.color} / {item.size}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-800">${(price * item.quantity).toFixed(2)}</p>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <label htmlFor={`quantity-${item.cartItemId}`} className="sr-only">Quantity</label>
            <select
              id={`quantity-${item.cartItemId}`}
              value={item.quantity}
              onChange={handleQuantityChange}
              className="rounded-md border border-gray-300 text-base w-16"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="button"
            onClick={() => removeFromCart(item.cartItemId)}
            className="text-sm font-medium text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;