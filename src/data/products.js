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
      "https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/10513817/pexels-photo-10513817.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6626967/pexels-photo-6626967.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6626963/pexels-photo-6626963.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/6311381/pexels-photo-6311381.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6311379/pexels-photo-6311379.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6311604/pexels-photo-6311604.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/6765028/pexels-photo-6765028.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6765025/pexels-photo-6765025.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6764950/pexels-photo-6764950.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/4066296/pexels-photo-4066296.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5717684/pexels-photo-5717684.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5717656/pexels-photo-5717656.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/4498285/pexels-photo-4498285.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6311386/pexels-photo-6311386.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6311471/pexels-photo-6311471.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      "https://images.pexels.com/photos/6766391/pexels-photo-6766391.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6766267/pexels-photo-6766267.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6766269/pexels-photo-6766269.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    isNew: false,
    isBestseller: true
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
      "https://images.pexels.com/photos/5384424/pexels-photo-5384424.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6311574/pexels-photo-6311574.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6311151/pexels-photo-6311151.jpeg?auto=compress&cs=tinysrgb&w=800"
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
  }
];

const categories = [
  { id: "tshirts", name: "T-Shirts", count: 2 },
  { id: "shirts", name: "Shirts", count: 1 },
  { id: "pants", name: "Pants", count: 2 },
  { id: "shorts", name: "Shorts", count: 1 },
  { id: "sweaters", name: "Sweaters", count: 1 },
  { id: "hoodies", name: "Hoodies", count: 1 },
  { id: "jackets", name: "Jackets", count: 2 },
  { id: "dresses", name: "Dresses", count: 1 },
  { id: "outerwear", name: "Outerwear", count: 1 }
];

export { products, categories };