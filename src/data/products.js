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
    images: ["//levi.in/cdn/shop/files/A25040051_01_Elevated_360x.jpg?v=1736749029"
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
      "data:image/webp;base64,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"
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
      "data:image/webp;base64,UklGRuAcAABXRUJQVlA4INQcAADwdQCdASrYAOQAPkUejUUioaES2K2AKAREsrdvWAbrLE/6Dt2voeZ/t37R/03pNuefG/R+Gk6+P7f9g9Rv62e5b9I/6r3CP1q6TvmD/ar9x/df/1H7he6H+6+oP/mOo79CL9xfTo/cP4cv3g9LvCG+XH6fw18+fzCUocV9hn2f959r/934D/M3UI9ob4iAj9I/uv+z9TOdJ4l9gP9cP+VyEvJX3Bv51/a/+3/fPZp/9P9n6MPqj/0f6T4B/59/cP+32G/3V9lH9n//+YM22D9aLlP3LM7wtpv37hU4ANgjzDabyeeUR3nPjwFjM1E8/TEYvAlV3eKjFSEVg08t3nq+zrwQOYjQzOyoxTfeJrirWfYAD6HQTM3jWgx/L0Zulcfl7ZFgDvR+L3aa6QpIq9HrtS1u7Z6qwouF0YRmACl3onfB69ofrcuMxatURupIAJQtJc+/CFHWYceMXX/xKLrXteGvrjZcdbYRa/9XelI1+UGc5OZBwGa4mhAyo27usgprPdEWrwtkXheND5qyj52x6M8tvawKJj1I53jodjju+GpiSPi+DOM//86FNSnH3tOAiUSx2YYxesfuXsQZDR3blkLFRClVk16EhQINXPMZDPEePwPphrlyLa90ev/wkK3012mXeADGyVl0lRHcDqqJKcoq5X+SEEVgT4G0OydZ107jCF2devU70pbWkRrD6cV+s3jx7wE78HuUn7IxXtd1eQJWfWJERckz3qg4QKT5MKiTzbkrZcMl3lZIoOBS2qWnq2vTuZYqeI6mqbidLtrE0BAQqlm+3YW0vKoyOoFrPrULf4h4b+GpM+Gn9RDLrUsiKeUCWnGcpBT2ydl+z0fvVjVIpW7NTTtUAOpzM7ERt7B8Qu8arXuCAw+EUAFMxmNvdrNUhnwLncYUiAaznmepHNNAPx/IK6iPblHzHGU7j6OURaspdDN+RdQ4zhrTVMzqe3/BdeRne/VitYGte9p1y50uJV0pe1KP7Ohg9OVN5NGqTgMqXxsYEM63QLLqsP5xM4W5Nxz+GRtC3bpWHlB4suACqFlr5Gw0/ml9fFoQdMivLeJAWIG2uPoJ+xoTmZBYI240usNvfC71pMmM5Pej05/yPefKBwYHDkzl7VPMrDR0lpF5WvvVqnhxhfGp302DtzYi/hV5IxeMFI87tQPD4mNxI8Etc5fvaQSIdH63eFfJ2QNk1v5LHEhiRXgSwtn7HzltQ8TSEkQQe/cUTr3kT+07E0h1Dc2wNajTlnm8xOTw0MlSFcCAAP7mns/zIy/i5AiX/Hsuzdldu6yNVL0CkdxCi6w34tjD/xVuqiA5UBbjAnD+1Z6MnHn7QsBd4rzYSM2V+NvIdcal1HCsq2jW7941ZEVkulyxys8A4fjJZdJkRDFR2k5T5CeenrNJW2wsO85zY2jK8WA2mtaiWWHb4BXfPehsa84xz2BP5r4B9Mc/upuwvjJiMPx0UQuod/HB+HMa5FFtnoe/XQYPh0cZfLqt2XRRamrf89WJrQXBa2qhudmAlM8D934+H942Trq1pe4494sDk+mun/+GZvz6GKT83K3KxRzASDIoNaZuhi0oHNslsl+56KNA4KnSmJGtLEtAYoiRYWaqF8K6h3AnkFtaN0oCPuMBvzqNAbEaVg1mHXb9EFMwsDBttZUJ+UcmuZMb74z1JPzahLi8rLpmN+PI85N+JlhSvvHXOmmzR5JmCaGt0noczD8el9tmxeH555DUaINRPiiKGwC2qmHESxob7YkLEwfGnnGTzZCoBP1YxYU/qJIu3/7pxBWd3AbXrSMmu2xXYYD5Uq+BQIxSmidzLBMFLiX8HPs3bM5q2VuvN6KuonRBiDmdVdI08msWTxyjJAtplNOS4WlVYAJPcz8dcg/xvKGPUwZ9O9JwyNeCCwGOytdho6mSWIA7qaLqj9A0cZCIddjG1z7Kl9AFBtrcy+5O3P8cTpCpqE+vB/GG28PIk2r4whwa5I2rVVJgJ5CQNAGPTjmwDPKL+81j6ZEwYnAttmU9v1bsyPOFJdXvsdFTScxPfWFmxVoeFXqGVVF4sGrPjlaaPjY/MEyqHNEOLQ16OLUDX43k0Meodug12mZwEy8x2vwic5Kuwy7iiTQlLuA+koKgCmGz1eHeMeZF28Po+vM+Bm2ioeP3dyPPjmS+cmxuWCZApFnYeX33/S0IOsqymKs6U3bnyVMFBq2eTAze2TIfLGogPUk/U/BEPIGSFyRSHB03F5SXH+mA89JQMOYwlyrDF6J+Z+/pQHd6p8U2olQMTxR1KpqqSMt5O1Hzp7cJIm33FJK+9Ee9ZeOcEqhF9KBRUa3VoxGXnsnGgtyyMQ7XU7S+rI9pPhWwTE8w+WK0mXfeKmToUsAUbJZLsd8tT84kBPI+RICrrviWdR27HcuiBel2XOpcgxVWI5aTJf//pG+H1M+whiXytoY4kRcizWHydGXkc9t6jegqg+dqisx4NJjTTvHui9jQMriuvT/r+7T0vRYyFIt6JPoEXJhGzdlspTYXWP0Jnl1Xav9QzROP7pByxAd7YxMH9iZzU7u/3e95Hl8WLyUZjFpCtWiGjQO5TS1v9MgKVD5VDE3V+cvEN9FX00kT6+D8ldgG78idkVvu//6nRodZRH/3rj5rnCbXAHiiownrRo6mRtRP375EOIZuwtJt7h80AdXFeeQXUyoQd5t39sfnCIuNTNaZ58LACO0OoQGHCdis+k4kCx2CKYWC81Fx3TPO0ItafXRYdbH3Bu7tUj7+HZ8pgKqArs9OuInIldYn2WNXGjN/3b17O0fwrdl2GfryGEiWHyOcq3oN4JbVQ1QMZRvTogAjDC9+hfXNTFq5y9pbtAKiwCLuiq2z4C2TSKTBVDzhJmpJLNrxERVAe+aobMoUgdBHN/glCKxnoWQk+wFRF2G9+0S2xZdF6/HvxOcPPsbNEd48ejzGwcdTumZcjmUJ8YugZF9Adj9mw6PNTwna6UxHzLSUKVQotbvcXxYPoQnbVGT588RqpLaziXnpTMEddeUMYWiGtpRtPtds5ZiZ5/YuoxwIi1QWIItcI19YuyfcQ7Py9bjVugN+VnHOna16XA5J6l24yRybr9L/aPE3yVItVsyH0V9ABi0sG6B+CyXsdJXlZHgheloC9+7Fet/xQF9usBP440kPnm9Lg6e6f4FnfXrS2ocEOP4ikM3TTmz2OqyBR4p9vyQD4s85NaBtKA4c9o6Cqgwm7n5ZAfAZqChcMg3CmKiXQMU9HyZjRVQOA4LM6+uuXoHg0/5YfACAlEbFXJ88T/y1A/cn3wEx9Ou8yfkFFcbyvWfdY15rsb3lRNvnD5w6qNx4A5+6oXJqzKWQC3UTDjGlN1/pjnP/XsdrOQwbuPCDb5Kt/fYD3lo1dBooRS4zz87C1jFz5/BF7dmkmKrT6AFDbKAOT+yDfjEVb40y/jrJQmc2VYXuYDIR+MSLvlP0DrwUjI8yz08BdXBXsZdCFSOj3vq+wf/vuWs65E99bM/JNBUa5Ts8yXGXTvxYY79dbN4BLNlmBqmrmjlF0g4MS8X6g7I/cwIcRag0miy3oyQOjeLC7cho6gJRX0rxOOUjm8620uRkz2xbG38gMQOi6SVfmDsetFv3faul9HQNWr6RYKqCXYW6QYStkOVv/0Wo//ZwjwPdnO6MiAk9KQ8Mq5s7fQgztF5n78y98Pd2LN5xyihdhmi9o76rWfdqHD7kGKwKLAo/sk7B9d6Ifb5VFUGDUyHKSPkTEn486oSbyOAW2fz+DakyqerGYyObIu4FFSKdZjO78p1K2ll6/o1WQ6TahRsNeIw4IQ6wOIZqodTcGe5XnSq6FxzP6rHPXXk1DePeLktB6C7LA0P1LCKxLjND4HXY9U6Fjt7zo+B3CYfYUa7p1xm7g+eacV3mxjbHllr/M9I7ztrrcASo59xACIW//ywmx673xMyHjSmEnjxUtWKV0rv0tI4VAmbzlPxjFa7JWvX2slczftFROrZcrgrxw8y/7DzAFWsQkGnco7YeQIccGxBapDqCWN0xf9+qvsr07H7YCbNH+LE+3DJk+mZrffL+2iNJhkhomGWdEb7JxJc6xJllodrJuduiTkY0hzD0cvBu7Bu8f9sfU5ZTF/eHaE6cV534GQWVDGTp2lD/v13QLwXFrYAP5xhwUGvhfuKl9nLqICfEsG/PxKnfBagZw076jNxGLgxVTShYM+nxsXN5aBD+wzGLGLLM+/PLfMyKpnhcWognx+MI3lacEIwiMfaHlqVxUHk4BQTBf+FyQB1NfXoPB5rJvzdCGB5rm7R2CiT6xnvBSwdZqw+X3SdmyyqpP4Fk6BvX159dR+kGaJjXJREINSZp8t1tHgQEJjke5lRuyOZtJdJpNzx2f5q9YQ2gngGIF+SF0pcEhvl6EfaBBcAcHEll9pSQ5oB0azUEykc3K8D9loBm2jgcY+cKgMOZSwUPdOvrjTJIffvNc2T4ABSNpCvv1lC2CKDseDADIG/MqQk2fSyc70Sm6KZb6+6t5a4oz4GQXDScTgv15DUofdSJRIfQwLtFSlxkXTN8v7UA7+ow9l6AiVHvC0RWCcseCx2O7CiovN+skFulLAy9lzekkv2yoO9Xroax23OxGvWYQrhT2cKJe3P5t4KGAFVaH//p28u/MIuVQOqV35+V1TIZH+5T1vKxGwN/rHqCbgoeFbwMbK3PyZEP4wQgTAwfeIr1zZVdT4X6Br8c7MbvZ+T3BLyU0LxS//NZHZDDbF/WXvyzmyeLTg/NY2njDvP+s44NYHAzAleGOprh2AGLpV5/It5fpX7VfMXznqc8Ca0EIz/VN9w/PYHkQKuA5U6th+WozbVH4sRqMdttqOZXeinv5rVengVilcvD3FYwpoC+M/nmaX8kFMGlemH+RaY4tQFzLuetKngGMENuc93WRtHeuUVslrHkkDQzGcAsmvptVbltMr8V+38C6emYae9v+A8upOeCBTUd7p2joSask7kFwqSLfvuN44hZX1DdPnTmm7ZZuQnKAXGR1OUHhB2ojAJ9ynl65Oxv8USLasRa6ukKt5CKIrX7CDjUYeKGHyJx1Qb8xiRAO/vI1p+keunaZFLF2BzIXePpUh29+9D5SnCMrP4VeiZ7UDCbsvyCR2f1buA6aeZGaf8uta0BLxgOeZvixH2FBLcrgUib0kOqORR8misSoHV6xzSlthzOIx0t5PxH2oQQ0HdWowzCJ9RlV3XNYZygQjm6YO5Ubcca37auBg48ltFnnORB4U4kY6mHgfvLrDR8EdwkYoy6Gq8zI/UR8qM+vSD/k7IHx1X1+qqZ7OSaher+s73gS6vydxNrWaM9iLRcgB5JDg7gntVxP8x+2kXooHFr50RJiW88xIVwEmzLNmoJFvEjKpb60+MTT5KphZ4eKw3aqBBY+7Nf/A5KmCfrc3jko+Dgk9RhF45CBds9IPDdcPgcwJBSwbw9yD5ZEzEaBLlpEr7xPa2L0q1T8wn3Hw+IjWRREHlrdk5mNdcfoF/q4rSUV6axSfwYktYMNPIeuCOCS0S1LCYnZL02SSovt7+CeMSZDavCK/ZZwvwqPk5046la8x2Pjyf/n/k2wvZiymOOQ2PyjkXD60N1/GXp7ovh4LXOS5U0p0E2XORSwnwaESyPY/oi8249RN4f+A7UFawA9KZ0YDYka2PwVNDesa5JfYJrtg4akNVjD0LtHb+6k67Gq+J/lcGhhVF1Lc2q1qlSYsj3bhAweZwIubMuEjk1FW3IYp1QGzxo1DvO0N/LOekd/YWC8xJNrA9g/3if5c3wyNkGS5AU1n7xA0o7QeK3DE6hM4y0E9xNijcN6++RVYKQ1bFpgta95E+1pECj3EFOftYqX/Hm81DJSG0TzC87L//a9l87y0b0NhjrvTzclFOwA9/eDVl4jJ2VV4xN+gQ1EDaLX4LeFRQCq3fKPgBKxKgiz4kjWSUfdTtMevFqwVo2sHaLR0M3vhOBRXD++BnMzZZzckYBGBKI5hNC87JjZfZrD+QyTVpQpkUmE9s2ja3Cdx1/Xw4fYtYcriC0fAaoGOyR3XEJINDo8N69HjFOPcAh7067D46T8ODYyJR/9zd2LMBAkfgFQwF+PPSYDNvrdJ/VufTuVIT438p6dxF/faepoM9rF2pr/uyLcdS/3c46JcRuLs2+CCKMi6BG5siWlzuMXJHrSPqtfB4ztm3F0bpzgO6wttC8loP2oET5sEZByzAUJ+judGoV5/TD7/SHy7YOEjpsfrsyWnbS3eJ3ocIhx1Y9/Cabm/atTrz+ymkJLvuY5G33pTbYFiNSDOLiDvzKvsz0pgAGECXP+6UE3QthTUKul9EjAm5ZyTOk7VJFK2GpPDHKZ/wTOhlmuOJa6FpdahEUIsDvRDDhtCOdbqo9iYf4VkjwAl3ZBCAgcOyoVtqVHstXrvMlVXuInZzBMJWi0S1nNC6ILatSotwAB4VBc91mFjSuge+P6yCQ5uekOBtf1Bv5/JfjTtqMm7fpCuPLQ5F6VU0ALYfT+KXqy6zpsBlYysNi3CHRXtiFxI2Ntzv8Zc+yzjSU3hGU6zHyVFxSS2tutqfJL4tgSr+RvAfpF1M+clrG9/O10c2iKRlpHhR6/Bv6i33/sdMkl1JHipJmCFFVskehzliJA0J1Ua0FoDqcBLS0H8LqF1s/0Na2MspOk4fHAzD/8FfgySadiuWLlJGtATdAA61516J09CvDn6yYePtS7NsJ/oeemJ2uRKTLuD9chIJyXOeaoYue37yU/uTzB8FZdzpP7HfOZI8RKFSdQah9JqB+8mfMdFL8QEaxMNJPgw5LyLaxbMXNLepQgCr7Mmu9BMYs17+6ow0VRaEJXxgQ/as65ZF73cw5hM79vp5QMOlsAZeKSSUjGDvfAUyT1H26yCrjK9DP2HYT0U0XLtpbd7WVbjnoCl2K0GM04B8MLqhkUIq/N5dJsAvoBRhYdj9i5No2YBNumMDWskL1MEFzbZ/gakBz6mdDYP/KJKhft66w79Yaf7ECi8AoMPxEXzv3Xwy/jOqZ/ZVbWwY7O8eij3LscdcQS3tqOJUzZGhdqThXpbbzRzbjEB/G21MSb6Blqw1SnXt9wrfV/jXBS0YX6ODjpuOpj1TLdRd9WcThPsFKkPngycMaBHXapKx2Rh5OL0/IQCprkRBKSJs+DGX7ICCO9X0i2/PTMGLnnLFn0FpSC9rwHHFTTqClaOjnkBLXAZO6zxYCsSpXezy5dm+um8mrClsiOZN2rSgr2rjqqwvL8aVPVeujduPm/O+i3vX9Ypa5J5l1pld/FmftDlrLYLrH5n3IlH5eZT/lldiNrYN0e9L6xgdKu8VYzXw+KqlxBFbB1jBadGd2B7PqUtgaemaJbDDqwEx1I8V5IKIi3Oml//fQLRmp1VGrXkZaWm3/j6zSrIF/5Z+pmxPTextFvgHATJPSBySc9t2scC3tt8kNM5ivmNeCLrIK/xxsADr6ZhSgLncoanW/j4p2VjnlsYG1Fl97IbriSlzrV7/9vXilQFyJdxX8VF0vhT+iG9r8KY+sfrTxSsIc2hnIgVp9FmpjQF44w32CMFsKK/b2Zb5GDtZwSuJUCXxrPfEjX01tD1mVxDwfuhLmLnehCRKbd4ntbENZoXBp+6xWh7ZPHJ/PH+lMhzs+/D1XUh/JKPjHRYp/lD6jQNo5MXa+oxlqM+bcxXgpTscfj6W1734FkU2lLK4c7TUhxkEAWtyVuqXxNpyw1AlKEVEAZVYANEmNx8UbQkN41vQDWEmoP4+QyoWT3Df9/+AF3fURpcMLnYwrAZGY9oUwWY5tE4TvnWDQE8smocHfGfhKby4Z+rz4yFxT0Jijx6YGE+ozs9eU0hZzvIHuGu3BOWEPMCuRn14OAUw4qY3vLKZdn3n+0I100krPswPo2qN7iwA9ZcU9NJwyfn47pYFJMn5JZUEjati9zv6kJyFtbtBrOkrp6uALDTRXEQ+4PL2Q2ueMK0f1RJq/SGYFtjwy0klcmrLA5vIp3A1Us8VoukNs01PDSwOhM2LfkYBlaGnThn01vtby1F2svD3CgijjsqkHGzooSZMNLcW66GIaaKHdp4QT00EPZChdLNv5XZkK1trdlGNe+NA6bkyO/G2/84pGzZ9wZhzWMRIUibRpYffzJs/cLww8v72ve/SpTdiS77T7+r89/xM3gH+mu8mad97P75aYpepE2AYZ6cbjILiTtRjBi55emazrkLw2YDRYtfyB3c8HzG7Si2/vGd5lU/T+sjv/SZ51Ex8JkUPdijqZuHLYvYD/Jj0XMhAsHO8Q7w8XrRA8ITlJPDf8W2x+C0NUPPZfLXtmkcD7zMOVwxc4FrU9asfzkenHcwXlCtKyRJ61ruC0NsfB1rlIku+Y6iDXVSLevS3nxYuDTpcyp5mmXxq8BYIJF+idSIYiqAqsV5/TBMYdrkINgjpQo5KM9P0SVnfR7jJr0trTJScm8Q44hYklLgjn2AuDNECushLL/AyNGtPk2WNHRlg0IIRXa4zgdlDzLW3JrmefadlX3afeXBdKvVV0g/BulzWJmQN06ct3bzvHfy9Oc+AZs4Nq0lHb9vZVLA0suwTa/Udtg4xNgBCgLXArvZTJmv/kdmNgxnwX3UynqQoc4l0akoBN+0FiMD4/5X2R7wgzz+rc5eRFyy1KZ2M+dYgmcI+Djg+Q1NSYwFZGWqY8dAv/JP2pXRk3piAQ0ArCTmArCI1MoAArf8oMpRL8cSmc0QBeYBle4CTuaOjN5SXIIN6vWKlL9Qd18hZ1+21cUCxGtkNofmBD6B/Mo/VXfbgGYkT72tF4eeYGpXQZ4shovtjwU+aMB9EZ42+Z8KWIecYd4Cx82tHaOW+6JOnyVMnbOUkIqHsCtJM4qSJwZd5Q1e8HGBa0vxDeQ5UiKDaQr1DwEYjqQZV8ckgVj90TOefwpDIwgIIvlSEHCLB2UQgDKBqqPzaLdTin0i8ZwPFJOOGxRF+4BKBWW2KwO1PReSdQbhg/w2h89Mn4/oQVWzwz8HUKlD6HXSfyI5SQZ2ypkd7umV35JXs6fBi2AkhIQMx9c8swztdF3FOchtcNWoENei2eR9GClh+vVpRHJgonavnXNGp2PHGWLiUtDQMzkktVcnPfycsJPXgkYcLy37S/U+xX59B26y7KpM9CVq0lte6HhB/fcBPdnnPnFp0XxSTZtk4SKKM5Oa/7rVo/576c/qFtaZcfLzBSaOdm2FbQ5buy4j+ufDUe8o7ZPz0y1BfBAWg8E5u17SJ1rTWC366IvlyfcoRn4j4ynr4G20lujEddxm5a7FUOuU8CIuUwuZTS4uVBY1iSPcvOBkmSpfK35WeXyEirnKDO1DDepipSc0Lxk1ndXuN0nZgFBHqz1yxGLsRwbdCZTCqpRprYAvVgf2XZuGotB4YcazTwnC+QPldHlOAhX3qSVkfwGxO0iwDx4R3Odr02r9p1OfMZvV80p7Z2WL3j56q9W35vzXQMn/P9tzNGOP2UORl9fPk4587Ss5noKim93WS20ANjKmjDr6Sjj5AAeT/9wMmPt4whH9lEsb7+Zdrb5iZtmg5bpSb9iuXTViAxayTLV0zUDD3FBncSz5+IStbnydjmSw5DWSQz4rUUn16VODxqedpgZoLMckCNVqsZb/ZF4D9oUaqtbWTl43GgGjQDcmkC3Ia7ukn4ij5QRD2T8aHHOcwAMeQsrMAFR1a83OwyFlZfAGuBQEdFODTACyJrChxefs7tUELmNnZlAgJKNgEni0R+pB93IbIANNC+RTM692ubwm8bSM7+UI5Fggha8Jh+J1Be4AUToZyl7THiVxCjKGJgESqxIq7wbd/DFmtyDDRYnm8ZT3cuDaw5IorTBqFFqOAAAAA="
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
      "data:image/jpeg;base64,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"
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
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo7bRTh8hNRHdUFe4DBcTyzSTXL1BUu-jgQOmUF8i-BdCebXN0KVOuk8lijKLVYaBi-sNrD8PhMpBVa5ppivye6qAxViJRtKcqEISLKnOIfIzKN3fdYOMMdw"
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
      "data:image/jpeg;base64,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"
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
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtJx4D6wSequVOE5nZfie-Lc54iipV5JIQSr8FI1eVwC15dG2FcsmHbQ3-5VixaY_QZnCm_duTKLnbsaI0SCnYi4eLOOODw-O7MuzGb1o"
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
    id:18,
    name: "Classic Denim Jacket",
    category: "jackets",
    price: 89.99,
    discountPrice: 69.99,
    colors: ["blue", "black"],
    sizes: ["S", "M", "L", "XL"],
    description: "A timeless denim jacket perfect for layering.",
    details: "Made from premium cotton denim. Machine washable.",
    images: ["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo7bRTh8hNRHdUFe4DBcTyzSTXL1BUu-jgQOmUF8i-BdCebXN0KVOuk8lijKLVYaBi-sNrD8PhMpBVa5ppivye6qAxViJRtKcqEISLKnOIfIzKN3fdYOMMdw"],
    rating: 4.5,
    reviewCount: 240,
    inStock: true,
    isNew: true,
    isBestseller: true,
  },
  {
    id:19,
    name: "Slim Fit Chinos",
    category: "pants",
    price: 59.99,
    discountPrice: 39.99,
    colors: ["khaki", "navy", "black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Tailored chinos for everyday elegance.",
    details: ["Stretchable cotton blend. Mid-rise waist."],
    images: ["data:image/jpeg;base64,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"],
    rating: 4.2,
    reviewCount: 180,
    inStock: true,
    isNew: false,
    isBestseller: false,
  },
  {
    id:20,
    name: "Floral Summer Dress",
    category: "dresses",
    price: 79.99,
    discountPrice: 59.99,
    colors: ["red", "white"],
    sizes: ["XS", "S", "M", "L"],
    description: "Lightweight dress with a playful floral print.",
    details: "V-neck, sleeveless design with flowy fabric.",
    images: ["https://images.meesho.com/images/products/538596629/ur9gi_1200.jpg"],
    rating: 4.8,
    reviewCount: 322,
    inStock: true,
    isNew: true,
    isBestseller: true,
  },
  {id :21,
    name: "Graphic Hoodie",
    category: "hoodies",
    price: 64.99,
    discountPrice: 49.99,
    colors: ["white", "gray", "black"],
    sizes: ["M", "L", "XL"],
    description: "Bold prints meet cozy comfort in this hoodie.",
    details: ["Brushed fleece interior. Adjustable drawstring hood."],
    images: ["data:image/webp;base64,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"],
    rating: 4.4,
    reviewCount: 210,
    inStock: true,
    isNew: false,
    isBestseller: true,
  },
  {id :22,
    name: "Leather Chelsea Boots",
    category: "footwear",
    price: 129.99,
    discountPrice: 99.99,
    colors: ["brown", "black"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Classic leather Chelsea boots with elastic sides.",
    details: ["Premium leather. Durable rubber sole."],
    images: ["data:image/webp;base64,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"],
    rating: 4.7,
    reviewCount: 157,
    inStock: true,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 23,
    name: "Striped Crop Top",
    category: "tops",
    price: 34.99,
    discountPrice: 24.99,
    colors: ["pink", "blue", "black"],
    sizes: ["XS", "S", "M"],
    description: "Trendy cropped top with colorful stripes.",
    details: ["Cotton blend with stretch. Crew neck design."],
    images: ["data:image/jpeg;base64,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"],
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    isNew: true,
    isBestseller: false,
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
      "data:image/jpeg;base64,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"
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