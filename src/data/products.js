const products = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "tshirts",
    price: 24.99,
    discountPrice: 19.99,
    colors: ["Black", "White", "Navy", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "A versatile and comfortable cotton t-shirt perfect for everyday wear. Made from 100% premium cotton for breathability and softness.",
    details: [
      "100% premium cotton",
      "Crew neck",
      "Short sleeves",
      "Regular fit",
      "Machine washable"
    ],
    images: [
      "https://www.botnia.in/cdn/shop/files/sweatshirt_11decb92-8c64-4ac6-8105-472834c72015.png?v=1735550510&width=3000",
      "https://www.botnia.in/cdn/shop/files/sweatshirt_11decb92-8c64-4ac6-8105-472834c72015.png?v=1735550510&width=3000",
      "https://www.botnia.in/cdn/shop/files/sweatshirt_11decb92-8c64-4ac6-8105-472834c72015.png?v=1735550510&width=3000"
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    isNew: false,
    isBestseller: true
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "pants",
    price: 59.99,
    discountPrice: null,
    colors: ["Blue", "Black", "Gray"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Modern slim fit jeans with a sleek silhouette. Made with a touch of stretch for comfort while maintaining its shape.",
    details: [
      "98% cotton, 2% elastane",
      "Slim fit",
      "Five-pocket styling",
      "Button closure with zip fly",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/404168/pexels-photo-404168.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    category: "sweaters",
    price: 149.99,
    discountPrice: 119.99,
    colors: ["Camel", "Gray", "Black", "Burgundy"],
    sizes: ["S", "M", "L", "XL"],
    description: "Luxuriously soft cashmere sweater with ribbed details. Perfect for staying warm while looking elegant.",
    details: [
      "100% premium cashmere",
      "Crew neck",
      "Long sleeves",
      "Ribbed cuffs and hem",
      "Dry clean only"
    ],
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTaYnkptnMqocFS4MW3BKIMQdsaZJ8vE6utXKmX8SDlONA1M1SOZ6DY0gAzLEKhPGtVJEEaseehKL726MA9y3ZVW7quUK37HcCfwsFCD1qkNXdHObYK0nVjEA"
    ],
    rating: 4.9,
    reviewCount: 46,
    inStock: true,
    isNew: false,
    isBestseller: true
  },
  {
    id: 4,
    name: "Tailored Blazer",
    category: "jackets",
    price: 189.99,
    discountPrice: null,
    colors: ["Navy", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "A sophisticated blazer with a tailored fit, perfect for both formal occasions and smart casual looks.",
    details: [
      "78% polyester, 20% viscose, 2% elastane",
      "Tailored fit",
      "Two-button closure",
      "Three pockets",
      "Dry clean only"
    ],
    images: [
      "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983460/pexels-photo-2983460.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.7,
    reviewCount: 62,
    inStock: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 5,
    name: "Summer Dress",
    category: "dresses",
    price: 79.99,
    discountPrice: null,
    colors: ["Floral", "White", "Blue", "Red"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Light and airy summer dress with a flattering silhouette. Features a delicate floral pattern and adjustable straps.",
    details: [
      "100% cotton",
      "A-line silhouette",
      "V-neck",
      "Adjustable straps",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983459/pexels-photo-2983459.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983458/pexels-photo-2983458.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 6,
    name: "Leather Jacket",
    category: "jackets",
    price: 249.99,
    discountPrice: 199.99,
    colors: ["Black", "Brown"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic leather jacket with a modern twist. Made from premium leather for durability and style that improves with age.",
    details: [
      "100% genuine leather",
      "Quilted lining",
      "Asymmetric zip closure",
      "Multiple pockets",
      "Professional leather clean"
    ],
    images: [
 "https://i.pinimg.com/736x/74/33/4f/74334f4ef8d8f05a1b0fd0ecbf89b5b4.jpg",
      "https://i.pinimg.com/736x/74/33/4f/74334f4ef8d8f05a1b0fd0ecbf89b5b4.jpg",
      "https://i.pinimg.com/736x/74/33/4f/74334f4ef8d8f05a1b0fd0ecbf89b5b4.jpg"
    ],
    rating: 4.8,
    reviewCount: 32,
    inStock: true,
    isNew: false,
    isBestseller: true
  },
  {
    id: 7,
    name: "Hooded Sweatshirt",
    category: "hoodies",
    price: 54.99,
    discountPrice: null,
    colors: ["Gray", "Black", "Navy", "Green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable hooded sweatshirt with a kangaroo pocket. Perfect for layering or casual everyday wear.",
    details: [
      "80% cotton, 20% polyester",
      "Drawstring hood",
      "Kangaroo pocket",
      "Ribbed cuffs and hem",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/2983454/pexels-photo-2983454.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983453/pexels-photo-2983453.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983452/pexels-photo-2983452.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.6,
    reviewCount: 95,
    inStock: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 8,
    name: "Athletic Shorts",
    category: "shorts",
    price: 34.99,
    discountPrice: 29.99,
    colors: ["Black", "Gray", "Blue", "Red"],
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight and quick-drying athletic shorts with built-in liner. Ideal for workouts and casual wear.",
    details: [
      "92% polyester, 8% elastane",
      "Elastic waistband with drawcord",
      "Side pockets",
      "Built-in liner",
      "Machine washable"
    ],
    images: [
      "https://preview.redd.it/shorts-sweatpants-like-the-ones-arnold-is-wearing-v0-gq7oxtz3tlic1.jpeg?auto=webp&s=7265d7d63475122a819f1eb510a2abf62fa36e68",
      "https://images.pexels.com/photos/2983451/pexels-photo-2983451.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983450/pexels-photo-2983450.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.5,
    reviewCount: 68,
    inStock: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 9,
    name: "Linen Shirt",
    category: "shirts",
    price: 69.99,
    discountPrice: null,
    colors: ["White", "Blue", "Beige", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Breathable linen shirt, perfect for warm weather. Features a relaxed fit and classic collar.",
    details: [
      "100% linen",
      "Button-down front",
      "Classic collar",
      "Chest pocket",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/2983449/pexels-photo-2983449.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983448/pexels-photo-2983448.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2983447/pexels-photo-2983447.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.7,
    reviewCount: 52,
    inStock: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 10,
    name: "Wool Coat",
    category: "outerwear",
    price: 229.99,
    discountPrice: 189.99,
    colors: ["Camel", "Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "Elegant wool-blend coat for cold weather. Features a classic silhouette that never goes out of style.",
    details: [
      "70% wool, 30% polyester",
      "Button closure",
      "Notched lapel",
      "Side pockets",
      "Dry clean only"
    ],
    images: [
      "https://media.licdn.com/dms/image/v2/D4D03AQHoepjdA_IW9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685186073080?e=1754524800&v=beta&t=bPlgrt8DYJWeYH3QafI4wseP0B0zNNBOHXSB8CpAses",
      "https://media.licdn.com/dms/image/v2/D4D03AQHoepjdA_IW9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685186073080?e=1754524800&v=beta&t=bPlgrt8DYJWeYH3QafI4wseP0B0zNNBOHXSB8CpAses",
      "https://media.licdn.com/dms/image/v2/D4D03AQHoepjdA_IW9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685186073080?e=1754524800&v=beta&t=bPlgrt8DYJWeYH3QafI4wseP0B0zNNBOHXSB8CpAses"
    ],
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 11,
    name: "Graphic Print T-Shirt",
    category: "tshirts",
    price: 29.99,
    discountPrice: null,
    colors: ["White", "Black", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Trendy graphic print t-shirt with artistic design. Made from soft cotton for everyday comfort.",
    details: [
      "100% cotton",
      "Crew neck",
      "Short sleeves",
      "Regular fit",
      "Machine washable"
    ],
    images: [
      "https://www.botnia.in/cdn/shop/files/sweatshirt_11decb92-8c64-4ac6-8105-472834c72015.png?v=1735550510&width=3000",
      "https://www.botnia.in/cdn/shop/files/sweatshirt_11decb92-8c64-4ac6-8105-472834c72015.png?v=1735550510&width=3000",
      "https://www.botnia.in/cdn/shop/files/sweatshirt_11decb92-8c64-4ac6-8105-472834c72015.png?v=1735550510&width=3000"
    ],
    rating: 4.3,
    reviewCount: 42,
    inStock: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 12,
    name: "Cargo Pants",
    category: "pants",
    price: 64.99,
    discountPrice: null,
    colors: ["Khaki", "Olive", "Black", "Navy"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Versatile cargo pants with multiple pockets. Comfortable fit with durable construction for long-lasting wear.",
    details: [
      "98% cotton, 2% elastane",
      "Regular fit",
      "Multiple cargo pockets",
      "Button closure with zip fly",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4210851/pexels-photo-4210851.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4210870/pexels-photo-4210870.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.5,
    reviewCount: 56,
    inStock: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 13,
    name: "Premium Denim Jacket",
    category: "jackets",
    price: 129.99,
    discountPrice: 99.99,
    colors: ["Blue", "Black", "Light Wash"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic denim jacket with modern details. Perfect for layering in any season.",
    details: [
      "100% cotton denim",
      "Button closure",
      "Multiple pockets",
      "Adjustable cuffs",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311382/pexels-photo-6311382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
    ],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 14,
    name: "Casual Button-Up Shirt",
    category: "shirts",
    price: 49.99,
    discountPrice: 39.99,
    colors: ["White", "Blue", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Versatile button-up shirt perfect for both casual and semi-formal occasions.",
    details: [
      "100% cotton",
      "Button-down collar",
      "Chest pocket",
      "Regular fit",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311382/pexels-photo-6311382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
    ],
    rating: 4.4,
    reviewCount: 92,
    inStock: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 15,
    name: "Athletic Performance Shorts",
    category: "shorts",
    price: 39.99,
    discountPrice: 29.99,
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "High-performance athletic shorts designed for maximum comfort during workouts.",
    details: [
      "92% polyester, 8% spandex",
      "Quick-dry fabric",
      "Elastic waistband",
      "Side pockets",
      "Machine washable"
    ],
    images: [
      "https://preview.redd.it/shorts-sweatpants-like-the-ones-arnold-is-wearing-v0-gq7oxtz3tlic1.jpeg?auto=webp&s=7265d7d63475122a819f1eb510a2abf62fa36e68",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311382/pexels-photo-6311382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    isNew: true,
    isBestseller: true
  },
  {
    id: 16,
    name: "Premium Wool Sweater",
    category: "sweaters",
    price: 89.99,
    discountPrice: 69.99,
    colors: ["Cream", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "Luxurious wool sweater with a modern fit. Perfect for staying warm in style.",
    details: [
      "80% wool, 20% cashmere",
      "Crew neck",
      "Ribbed cuffs and hem",
      "Regular fit",
      "Dry clean only"
    ],
    images: [
      "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311382/pexels-photo-6311382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 17,
    name: "Designer Hoodie",
    category: "hoodies",
    price: 79.99,
    discountPrice: 59.99,
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium quality hoodie with modern design elements and comfortable fit.",
    details: [
      "80% cotton, 20% polyester",
      "Kangaroo pocket",
      "Drawstring hood",
      "Ribbed cuffs and hem",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311382/pexels-photo-6311382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
    ],
    rating: 4.6,
    reviewCount: 98,
    inStock: true,
    isNew: false,
    isBestseller: true
  },
  {
    id: 60,
    name: "Designer Handbag",
    category: "accessories",
    price: 299.99,
    discountPrice: 249.99,
    colors: ["Black", "Brown", "Beige"],
    sizes: ["One Size"],
    description: "Luxurious designer handbag with premium leather and gold-tone hardware.",
    details: [
      "Genuine leather",
      "Gold-tone hardware",
      "Adjustable strap",
      "Multiple compartments",
      "Professional clean only"
    ],
    images: [
      "https://www.timeinternational.co.id/wp-content/uploads/SYDNEY-SWEENEY-TB-ELLA-BIO.jpg",
      "https://www.timeinternational.co.id/wp-content/uploads/SYDNEY-SWEENEY-TB-ELLA-BIO-600x338.jpg",
      "https://www.timeinternational.co.id/wp-content/uploads/SYDNEY-SWEENEY-TB-ELLA-BIO-960x540.jpg"
    ],
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    isNew: false,
    isBestseller: true
  },
  {
    id: 61,
    name: "Vintage Denim Jacket",
    category: "jackets",
    price: 89.99,
    discountPrice: 69.99,
    colors: ["Light Wash", "Dark Wash"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic vintage-style denim jacket with distressed details. Perfect for casual layering.",
    details: [
      "100% cotton denim",
      "Button closure",
      "Multiple pockets",
      "Distressed finish",
      "Machine washable"
    ],
    images: [
      "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      "https://images.pexels.com/photos/6311382/pexels-photo-6311382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
    ],
    rating: 4.6,
    reviewCount: 78,
    inStock: true,
    isNew: true,
    isBestseller: false
  }
];

const categories = [
  { id: "tshirts", name: "T-Shirts", count: 8 },
  { id: "shirts", name: "Shirts", count: 6 },
  { id: "pants", name: "Pants", count: 7 },
  { id: "shorts", name: "Shorts", count: 5 },
  { id: "sweaters", name: "Sweaters", count: 6 },
  { id: "hoodies", name: "Hoodies", count: 4 },
  { id: "jackets", name: "Jackets", count: 8 },
  { id: "dresses", name: "Dresses", count: 6 },
  { id: "outerwear", name: "Outerwear", count: 5 },
  { id: "accessories", name: "Accessories", count: 5 }
];

export { products, categories };