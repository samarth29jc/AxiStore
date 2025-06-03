import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/common/ProductCard';
import { motion } from 'framer-motion';

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
        result.sort((a, b) => b.id - a.id);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
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
      if ((filterType === 'colors' || filterType === 'sizes') && Array.isArray(value)) {
        return {
          ...prev,
          [filterType]: value
        };
      }
  
      if (filterType === 'colors' || filterType === 'sizes') {
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

        {/* Filters Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-wrap gap-4">
            {/* Category Dropdown */}
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <div className="relative">
                <select
                  id="category-filter"
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name} ({cat.count})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Color Filter */}
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="color-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Color
              </label>
              <div className="relative">
                <select
                  id="color-filter"
                  value={filters.colors[0] || ''}
                  onChange={(e) => handleFilterChange('colors', e.target.value ? [e.target.value] : [])}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Colors</option>
                  {allColors.map(color => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Size Filter */}
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="size-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <div className="relative">
                <select
                  id="size-filter"
                  value={filters.sizes[0] || ''}
                  onChange={(e) => handleFilterChange('sizes', e.target.value ? [e.target.value] : [])}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Sizes</option>
                  {allSizes.map(size => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <div className="relative">
                <select
                  id="sort-by"
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Top Rated</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="300"
              step="10"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white rounded-lg shadow-sm p-6">
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
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;