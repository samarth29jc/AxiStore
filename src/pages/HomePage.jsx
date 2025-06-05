import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/common/ProductCard';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

import image from '../assets/WhatsApp Image 2025-06-02 at 17.48.00_fc15359a.jpg';


function HomePage() {
  // Get bestsellers
  const bestsellers = products.filter(product => product.isBestseller).slice(0, 4);
  
  // Get new arrivals
  const newArrivals = products.filter(product => product.isNew).slice(0, 4);

  // Banner slider settings
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  // Banner data
  const banners = [
    {
      id: 1,
      video: "https://media.istockphoto.com/id/2159822155/video/casual-businessman-using-ai-search-engine-for-online-shopping.mp4?s=mp4-640x640-is&k=20&c=EY_KvUz8AD62JKjNxajSmW2EzDTVdCtsrJdl8oF_Z8k=",
      title: "Luxury Fashion Collection",
      description: "Experience elegance and sophistication with our premium collection",
      buttonText: "Explore Collection",
      buttonLink: "/products"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Summer Essentials",
      description: "Discover the perfect blend of style and comfort",
      buttonText: "Shop Now",
      buttonLink: "/products?sort=newest"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Exclusive Deals",
      description: "Limited time offers on premium fashion items",
      buttonText: "View Deals",
      buttonLink: "/products?filter=sale"
    }
  ];

  // Featured Categories
  const featuredCategories = [
    {
      id: 1,
      name: "Shirts",
      image: "https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=256 256w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=264 264w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=384 384w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=396 396w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=564 564w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=657 657w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=768 768w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=820 820w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=1260 1260w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=1536 1536w, https://image.hm.com/assets/hm/89/54/89545c7aee1f83b8e8b9174c0287cdf5068ddb2e.jpg?imwidth=2160 2160w",
      link: "/products/shirts"
    },
    {
      id: 2,
      name: "Jackets",
      image: "//www.bonkerscorner.com/cdn/shop/files/Bonkerscorner__Bugs__Funky__Varsity__Jacket_8.jpg?v=1734589450",
      link: "/products/jackets"
    },
    {
      id: 3,
      name: "Accessories",
      image: "https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      link: "/products/accessories"
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  return (
    <div className="pt-16"> {/* Offset for fixed header */}
      {/* Hero Banner with Slider */}
      <section className="relative">
        <Slider
          {...bannerSettings}
          className="banner-slider"
          beforeChange={(_, next) => setCurrentBanner(next)}
        >
          {banners.map((banner, idx) => (
            <div key={banner.id} className="relative h-screen">
              {banner.video ? (
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <video
                    className="absolute min-w-full min-h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={banner.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                </div>
              ) : (
                <div 
                  className="absolute inset-0 bg-cover bg-center banner-image"
                  style={{ backgroundImage: `url(${banner.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                </div>
              )}
              {/* Always render the content, but only show/animate the active one */}
              <div className={`absolute inset-0 flex items-center ${currentBanner === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'} transition-opacity duration-700`}>
                <div className="container-custom">
                  <div className="text-white max-w-xl pl-[75px]">
                    <motion.h1 
                      initial={false}
                      animate={currentBanner === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: currentBanner === idx ? 0.3 : 0, type: 'spring', stiffness: 100 }}
                      className="text-5xl font-bold mb-4"
                    >
                      {banner.title}
                    </motion.h1>
                    <motion.p 
                      initial={false}
                      animate={currentBanner === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: currentBanner === idx ? 0.5 : 0, type: 'spring', stiffness: 100 }}
                      className="text-xl mb-6 text-gray-200"
                    >
                      {banner.description}
                    </motion.p>
                    <motion.div
                      initial={false}
                      animate={currentBanner === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: currentBanner === idx ? 0.7 : 0, type: 'spring', stiffness: 100 }}
                    >
                      <motion.a 
                        href={banner.buttonLink}
                        className="btn-primary text-lg px-8 py-4 inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {banner.buttonText}
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10"
          >
            Shop by Category
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg h-[350px]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                    <a 
                      href={category.link}
                      className="inline-block text-white border-2 border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-sm"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Products
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $100</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30 days return policy</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">100% secure checkout</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container-custom text-center max-w-3xl mx-auto"
        >
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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="btn-primary"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;