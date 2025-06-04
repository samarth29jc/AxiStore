import React from 'react';

function AboutUsPage() {
  return (
    <div className="container-custom py-8">
      <br></br>
      <br></br>
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        AxiStore was founded with the vision of providing high-quality, modern clothing 
        that empowers individuals to express their unique style. We believe in the power 
        of fashion to inspire confidence and creativity.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Our curated collection features a blend of timeless classics and the latest trends, 
        carefully selected to ensure exceptional quality and comfort. We are committed to 
        sustainability and ethical practices, working with suppliers who share our values.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Thank you for choosing AxiStore. We hope you find something you love!
      </p>
      <div className="bg-white px-6 py-10 md:px-16 lg:px-32">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Customer Support</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-600">
        <div className="hover:text-black transition-colors duration-200">
          <h3 className="font-medium">Contact Us</h3>
          <p className="text-sm mt-1">Get in touch with our support team.</p>
        </div>

        <div className="hover:text-black transition-colors duration-200">
          <h3 className="font-medium">Shipping Policy</h3>
          <p className="text-sm mt-1">Learn about our shipping methods and timelines.</p>
        </div>

        <div className="hover:text-black transition-colors duration-200">
          <h3 className="font-medium">Returns & Exchanges</h3>
          <p className="text-sm mt-1">Understand how to return or exchange products.</p>
        </div>

        <div className="hover:text-black transition-colors duration-200">
          <h3 className="font-medium">FAQs</h3>
          <p className="text-sm mt-1">Find answers to frequently asked questions.</p>
        </div>

        <div className="hover:text-black transition-colors duration-200">
          <h3 className="font-medium">Size Guide</h3>
          <p className="text-sm mt-1">Use our guide to choose the right size for you.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUsPage; 