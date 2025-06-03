import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { products } from '../../data/products';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { id, name, price, discountPrice, images, isNew, isBestseller } = product;
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add the first size and color as default
    addToCart(product, 1, product.sizes[0], product.colors[0]);
  };
  
  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div 
      className="group card"
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden rounded-t-lg aspect-[4/5] bg-gray-100">
          {/* Product Image */}
          <img 
            src={images[0]} 
            alt={name}
            className="product-image w-full h-full object-cover"
          />
          
          {/* Quick Actions */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-5 flex items-end justify-center opacity-100 transition-opacity duration-300 pointer-events-none"
          >
            <div className="flex gap-2 mb-4 pointer-events-auto">
              <button
                onClick={handleAddToCart}
                className="bg-white text-gray-900 hover:bg-primary-600 hover:text-white rounded-full p-2 shadow-md transition-colors duration-200"
                aria-label="Add to cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
              <button
                onClick={handleToggleWishlist}
                className={`${
                  isInWishlist(id) 
                    ? 'bg-red-50 text-red-500' 
                    : 'bg-white text-gray-900 hover:bg-red-50 hover:text-red-500'
                } rounded-full p-2 shadow-md transition-colors duration-200`}
                aria-label="Add to wishlist"
              >
                {isInWishlist(id) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                New
              </span>
            )}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-base font-medium text-gray-800 mb-1">{name}</h3>
          <div className="flex items-center">
            {discountPrice ? (
              <>
                <span className="text-red-600 font-medium">${discountPrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through ml-2">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-gray-800 font-medium">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;