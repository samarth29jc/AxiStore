import React from 'react';

function AboutUsPage() {
  return (
    <div className="container-custom py-8">
      <br></br>
      <br></br>
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12 text-gray-800">
      {/* About Us */}
      <section>
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed">
          At <strong>AxiStore</strong>, we believe that fashion is more than just clothing—it's a way to express yourself. 
          We offer a curated collection of trendy and timeless pieces for every personality and occasion. 
          Our goal is to provide quality products with seamless customer experience.
        </p>
      </section>

      {/* Shipping Policy */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Shipping Policy</h2>
        <p className="text-lg leading-relaxed mb-2">
          We offer free standard shipping on all domestic orders over ₹999. Orders are typically processed within 1–2 business days.
        </p>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Standard Shipping: 4–7 business days</li>
          <li>Express Shipping: 2–3 business days (charges apply)</li>
          <li>International Shipping: 7–14 business days (charges vary by location)</li>
        </ul>
      </section>

      {/* Returns & Exchanges */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Returns & Exchanges</h2>
        <p className="text-lg leading-relaxed">
          We want you to love what you ordered! If you're not satisfied, you may return or exchange your item within 15 days of delivery.
        </p>
        <ul className="list-disc list-inside space-y-1 text-lg mt-2">
          <li>Items must be unused and in original packaging</li>
          <li>Sale items are not eligible for return</li>
          <li>Customer pays return shipping unless the item is defective</li>
        </ul>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-3xl font-bold mb-4">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-xl">Q: How do I track my order?</h4>
            <p className="text-lg">A: Once your order is shipped, you'll receive a confirmation email with a tracking number.</p>
          </div>
          <div>
            <h4 className="font-semibold text-xl">Q: Can I cancel or modify my order?</h4>
            <p className="text-lg">A: You can cancel or modify your order within 12 hours of placing it by contacting our support team.</p>
          </div>
          <div>
            <h4 className="font-semibold text-xl">Q: Do you offer gift packaging?</h4>
            <p className="text-lg">A: Yes! You can select gift packaging at checkout for a small additional charge.</p>
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Size Guide</h2>
        <p className="text-lg mb-4">Refer to the chart below to find your perfect fit. Sizes may vary slightly by style.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-300 text-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Size</th>
                <th className="border px-4 py-2">Bust (in)</th>
                <th className="border px-4 py-2">Waist (in)</th>
                <th className="border px-4 py-2">Hips (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">XS</td>
                <td className="border px-4 py-2">31–32</td>
                <td className="border px-4 py-2">24–25</td>
                <td className="border px-4 py-2">33–34</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">S</td>
                <td className="border px-4 py-2">33–34</td>
                <td className="border px-4 py-2">26–27</td>
                <td className="border px-4 py-2">35–36</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">M</td>
                <td className="border px-4 py-2">35–36</td>
                <td className="border px-4 py-2">28–29</td>
                <td className="border px-4 py-2">37–38</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">L</td>
                <td className="border px-4 py-2">37–39</td>
                <td className="border px-4 py-2">30–32</td>
                <td className="border px-4 py-2">39–41</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">XL</td>
                <td className="border px-4 py-2">40–42</td>
                <td className="border px-4 py-2">33–35</td>
                <td className="border px-4 py-2">42–44</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>


    </div>
  );
}

export default AboutUsPage; 