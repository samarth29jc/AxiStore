import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length >= 2) {
      // Filter products based on search term
      const results = products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results.slice(0, 5)); // Limit to 5 results
    } else {
      setSearchResults([]);
    }
  };

  const goToProduct = (id) => {
    setSearchTerm('');
    setSearchResults([]);
    navigate(`/product/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length >= 2) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 absolute left-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        {searchTerm && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSearchResults([]);
            }}
            className="absolute right-3 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-10 overflow-hidden">
            <ul>
              {searchResults.map(product => (
                <li key={product.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => goToProduct(product.id)}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-50"
                  >
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{product.name}</p>
                      <p className="text-xs text-gray-500">${product.discountPrice || product.price}</p>
                    </div>
                  </button>
                </li>
              ))}
              <li className="px-4 py-2 bg-gray-50">
                <button 
                  type="submit"
                  className="text-primary-600 text-sm font-medium hover:text-primary-800"
                >
                  View all results
                </button>
              </li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar;