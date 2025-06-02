import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/common/ProductCard';

function HomePage() {
  // Get bestsellers
  const bestsellers = products.filter(product => product.isBestseller).slice(0, 4);
  
  // Get new arrivals
  const newArrivals = products.filter(product => product.isNew).slice(0, 4);

  return (
    <div className="pt-16"> {/* Offset for fixed header */}
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Fashion hero" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-white mb-4 animate-slide-up">
              Discover Your Style
            </h1>
            <p className="text-gray-200 text-xl mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Explore our curated collection of premium fashion for every occasion.
            </p>
            <div className="flex gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Link to="/products" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/products/men" className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Men's Collection"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Men's Collection</h3>
              </div>
            </Link>
            
            <Link to="/products/women" className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Women's Collection"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Women's Collection</h3>
              </div>
            </Link>
            
            <Link to="/products/accessories" className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Accessories"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">Accessories</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-baseline mb-8">
            <h2>Bestsellers</h2>
            <Link to="/products" className="text-primary-600 hover:text-primary-800 font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 bg-primary-950 text-white">
        <div className="container-custom flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h2 className="mb-4">Summer Collection 2025</h2>
            <p className="text-gray-300 text-lg mb-6">
              Refresh your wardrobe with our latest summer styles. Lightweight fabrics, 
              vibrant colors, and comfortable designs for the warmer days ahead.
            </p>
            <Link to="/products" className="btn-accent">
              Shop Collection
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Summer collection"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-baseline mb-8">
            <h2>New Arrivals</h2>
            <Link to="/products/new" className="text-primary-600 hover:text-primary-800 font-medium">
              View All New
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $50</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.5h-9a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and get 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="input-field flex-1"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;