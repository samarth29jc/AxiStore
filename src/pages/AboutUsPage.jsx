import React from 'react';
import aboutUsImage from '../assets/WhatsApp Image 2025-06-02 at 17.48.00_fc15359a.jpg';

function AboutUsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom text-center">
        <h1 className="text-3xl font-bold mb-6">About AxiStore</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Welcome to AxiStore! This e-commerce store is currently under testing.
          It has been specifically developed for training purposes, aimed at nurturing
          the skills of the upcoming most talented employees of Limbo Solution.
          It serves as a practical project to provide hands-on experience in building
          a modern web application.
        </p>
        <img 
          src={aboutUsImage}
          alt="AxiStore Team or Office"
          className="mt-8 mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default AboutUsPage; 