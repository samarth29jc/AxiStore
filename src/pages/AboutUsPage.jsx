import React from 'react';
import { Link } from 'react-router-dom';

function AboutUsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="container-custom max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        {/* Video Section */}
        <div className="w-full md:w-1/2 h-96 md:h-[600px] overflow-hidden rounded-lg">
          {/* Replace with your video URL */}
          <video 
            className="w-full h-full object-cover"
            src="https://framerusercontent.com/assets/sRXQsZpCuTpukMUfotGcRUuvg.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false} // Optional: hide controls
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h1 className="text-5xl font-bold leading-tight">hi. this was<br/>Axistore.</h1>
          <p className="text-lg leading-relaxed">
            We were passionate about bringing you modern, high-quality fashion.
            Thank you for being a part of our journey. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              to="/testimony" 
              className="btn bg-black text-white hover:bg-gray-800"
            >
              Customer Service
            </Link>
            <Link 
              to="/products" 
              className="btn bg-white border border-black text-black hover:bg-gray-100"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage; 