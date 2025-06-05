import React, { useRef, useEffect } from 'react';

function TestimonyPage() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Placeholder for future Three.js setup
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-primary-950">
            we are AxiStore<br />We are what our customer believe,
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            few people whom life we got the opportunity to contribute to
          </p>
        </div>
      </section>

      {/* Audio Player + Placeholder for Three.js */}
      <section className="relative w-full ">
        <div id="threejs-container" ref={mountRef} className="absolute inset-0"></div>

        <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <audio controls className="w-full">
            <source
              src="https://framerusercontent.com/assets/s6Kcvm0lGpVdIimLMjrCJjPgd28.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          <p className="mt-2 text-gray-600 text-lg text-center">listen while reading</p>
        </div>
      </section>

      {/* Customer Service Sections */}
      <section className="bg-white text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* Shipping Policy */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary-700">Shipping Policy</h2>
            <p className="text-lg leading-relaxed mb-2">
              We offer free standard shipping on all domestic orders over ₹999. Orders are typically processed within 1–2 business days.
            </p>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Standard Shipping: 4–7 business days</li>
              <li>Express Shipping: 2–3 business days (charges apply)</li>
              <li>International Shipping: 7–14 business days (charges vary by location)</li>
            </ul>
          </div>

          {/* Returns & Exchanges */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary-700">Returns & Exchanges</h2>
            <p className="text-lg leading-relaxed">
              We want you to love what you ordered! If you're not satisfied, you may return or exchange your item within 15 days of delivery.
            </p>
            <ul className="list-disc list-inside space-y-1 text-lg mt-2">
              <li>Items must be unused and in original packaging</li>
              <li>Sale items are not eligible for return</li>
              <li>Customer pays return shipping unless the item is defective</li>
            </ul>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary-700">FAQs</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-xl text-gray-900">Q: How do I track my order?</h4>
                <p className="text-lg">A: Once your order is shipped, you'll receive a confirmation email with a tracking number.</p>
              </div>
              <div>
                <h4 className="font-semibold text-xl text-gray-900">Q: Can I cancel or modify my order?</h4>
                <p className="text-lg">A: You can cancel or modify your order within 12 hours of placing it by contacting our support team.</p>
              </div>
              <div>
                <h4 className="font-semibold text-xl text-gray-900">Q: Do you offer gift packaging?</h4>
                <p className="text-lg">A: Yes! You can select gift packaging at checkout for a small additional charge.</p>
              </div>
            </div>
          </div>

          {/* Size Guide */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary-700">Size Guide</h2>
            <p className="text-lg mb-4">Refer to the chart below to find your perfect fit. Sizes may vary slightly by style.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border border-gray-300 text-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Size</th>
                    <th className="border border-gray-300 px-4 py-2">Bust (in)</th>
                    <th className="border border-gray-300 px-4 py-2">Waist (in)</th>
                    <th className="border border-gray-300 px-4 py-2">Hips (in)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">XS</td>
                    <td className="border border-gray-300 px-4 py-2">31–32</td>
                    <td className="border border-gray-300 px-4 py-2">24–25</td>
                    <td className="border border-gray-300 px-4 py-2">33–34</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">S</td>
                    <td className="border border-gray-300 px-4 py-2">33–34</td>
                    <td className="border border-gray-300 px-4 py-2">26–27</td>
                    <td className="border border-gray-300 px-4 py-2">35–36</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">M</td>
                    <td className="border border-gray-300 px-4 py-2">35–36</td>
                    <td className="border border-gray-300 px-4 py-2">28–29</td>
                    <td className="border border-gray-300 px-4 py-2">37–38</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">L</td>
                    <td className="border border-gray-300 px-4 py-2">37–39</td>
                    <td className="border border-gray-300 px-4 py-2">30–32</td>
                    <td className="border border-gray-300 px-4 py-2">39–41</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">XL</td>
                    <td className="border border-gray-300 px-4 py-2">40–42</td>
                    <td className="border border-gray-300 px-4 py-2">33–35</td>
                    <td className="border border-gray-300 px-4 py-2">42–44</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonyPage;
