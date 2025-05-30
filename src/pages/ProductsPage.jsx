import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/common/ProductCard';

function ProductsPage() {
  const { category } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: category || 'all',
    priceRange: [0, 300],
    sortBy: 'default',
    colors: [],
    sizes: []
  });
  const [allColors, setAllColors] = useState([]);
  const [allSizes, setAllSizes] = useState([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // Extract all available colors and sizes from products
  useEffect(() => {
    const colors = new Set();
    const sizes = new Set();
    
    products.forEach(product => {
      product.colors.forEach(color => colors.add(color));
      product.sizes.forEach(size => sizes.add(size));
    });
    
    setAllColors(Array.from(colors));
    setAllSizes(Array.from(sizes));
  }, []);

  // Update filters when category param changes
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      category: category || 'all'
    }));
  }, [category]);

  // Filter products based on current filters and search query
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filter by price range
    result = result.filter(
      product => {
        const price = product.discountPrice || product.price;
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      }
    );
    
    // Filter by colors
    if (filters.colors.length > 0) {
      result = result.filter(
        product => product.colors.some(color => filters.colors.includes(color))
      );
    }
    
    // Filter by sizes
    if (filters.sizes.length > 0) {
      result = result.filter(
        product => product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }
    
    // Sort products
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        result.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        });
        break;
      case 'newest':
        // For demo purposes, we'll just use product ID as a proxy for "newest"
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Default sorting logic (by bestseller, then by name)
        result.sort((a, b) => {
          if (a.isBestseller === b.isBestseller) {
            return a.name.localeCompare(b.name);
          }
          return a.isBestseller ? -1 : 1;
        });
    }
    
    setFilteredProducts(result);
  }, [filters, searchQuery, category]);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      if (filterType === 'colors' || filterType === 'sizes') {
        // Toggle selection for array filters
        const currentValues = prev[filterType];
        return {
          ...prev,
          [filterType]: currentValues.includes(value)
            ? currentValues.filter(item => item !== value)
            : [...currentValues, value]
        };
      }
      
      return {
        ...prev,
        [filterType]: value
      };
    });
  };

  return (
    <div className="pt-24 pb-16"> {/* Offset for fixed header */}
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {searchQuery 
              ? `Search Results for "${searchQuery}"` 
              : category 
                ? `${categories.find(c => c.id === category)?.name || 'Products'}`
                : 'All Products'
            }
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        {/* Mobile Filters Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 bg-white text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            Filter & Sort
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            {renderFilters()}
          </div>

          {/* Filters Modal - Mobile */}
          <div
            className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
              isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:hidden`}
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileFiltersOpen(false)}
            ></div>
            
            {/* Filters Content */}
            <div className="absolute top-0 left-0 w-full max-w-xs h-full bg-white shadow-xl flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                {renderFilters()}
              </div>
              
              <div className="p-4 border-t">
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full btn-primary"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Dropdown - Desktop */}
            <div className="hidden lg:flex justify-end mb-6">
              <div className="relative">
                <label htmlFor="sort-by" className="mr-2">Sort by:</label>
                <select
                  id="sort-by"
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-300 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search term.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function renderFilters() {
    return (
      <div className="space-y-6">
        {/* Categories Filter */}
        <div>
          <h3 className="text-lg font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="category-all"
                type="radio"
                checked={filters.category === 'all'}
                onChange={() => handleFilterChange('category', 'all')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="category-all" className="ml-2 text-gray-700">
                All Products
              </label>
            </div>
            {categories.map(cat => (
              <div key={cat.id} className="flex items-center">
                <input
                  id={`category-${cat.id}`}
                  type="radio"
                  checked={filters.category === cat.id}
                  onChange={() => handleFilterChange('category', cat.id)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor={`category-${cat.id}`} className="ml-2 text-gray-700">
                  {cat.name} ({cat.count})
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Range Filter */}
        <div>
          <h3 className="text-lg font-medium mb-3">Price Range</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
            <div className="flex space-x-4">
              <select
                value={filters.priceRange[0]}
                onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                className="input-field text-sm"
              >
                <option value="0">$0</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="150">$150</option>
                <option value="200">$200</option>
              </select>
              <span className="self-center">to</span>
              <select
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                className="input-field text-sm"
              >
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="150">$150</option>
                <option value="200">$200</option>
                <option value="300">$300+</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Colors Filter */}
        <div>
          <h3 className="text-lg font-medium mb-3">Colors</h3>
          <div className="space-y-2">
            {allColors.map(color => (
              <div key={color} className="flex items-center">
                <input
                  id={`color-${color}`}
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={() => handleFilterChange('colors', color)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor={`color-${color}`} className="ml-2 text-gray-700">
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sizes Filter */}
        <div>
          <h3 className="text-lg font-medium mb-3">Sizes</h3>
          <div className="space-y-2">
            {allSizes.map(size => (
              <div key={size} className="flex items-center">
                <input
                  id={`size-${size}`}
                  type="checkbox"
                  checked={filters.sizes.includes(size)}
                  onChange={() => handleFilterChange('sizes', size)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor={`size-${size}`} className="ml-2 text-gray-700">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sort By - Mobile Only */}
        <div className="lg:hidden">
          <h3 className="text-lg font-medium mb-3">Sort By</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="sort-default"
                type="radio"
                checked={filters.sortBy === 'default'}
                onChange={() => handleFilterChange('sortBy', 'default')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="sort-default" className="ml-2 text-gray-700">
                Featured
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="sort-price-asc"
                type="radio"
                checked={filters.sortBy === 'price-asc'}
                onChange={() => handleFilterChange('sortBy', 'price-asc')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="sort-price-asc" className="ml-2 text-gray-700">
                Price: Low to High
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="sort-price-desc"
                type="radio"
                checked={filters.sortBy === 'price-desc'}
                onChange={() => handleFilterChange('sortBy', 'price-desc')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="sort-price-desc" className="ml-2 text-gray-700">
                Price: High to Low
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="sort-newest"
                type="radio"
                checked={filters.sortBy === 'newest'}
                onChange={() => handleFilterChange('sortBy', 'newest')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="sort-newest" className="ml-2 text-gray-700">
                Newest
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsPage;