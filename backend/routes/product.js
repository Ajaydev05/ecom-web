const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.json([
    // CLOTHING
    { _id: 1, name: "Casual T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", rating: 4.3, reviews: 128 },
    { _id: 2, name: "Denim Jacket", price: 1599, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f", rating: 4.6, reviews: 210 },
    { _id: 3, name: "Hoodie", price: 1299, image: "https://images.unsplash.com/photo-1542060748-10c28b62716e", rating: 4.5, reviews: 175 },
    { _id: 4, name: "Formal Shirt", price: 999, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10", rating: 4.4, reviews: 98 },

    // BOOKS
    { _id: 5, name: "DevOps Handbook", price: 899, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f", rating: 4.8, reviews: 540 },
    { _id: 6, name: "Clean Code", price: 799, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765", rating: 4.7, reviews: 620 },
    { _id: 7, name: "System Design", price: 999, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794", rating: 4.6, reviews: 410 },

    // ELECTRONICS
    { _id: 8, name: "Wireless Headphones", price: 2499, image: "https://images.unsplash.com/photo-1518443895471-1e4c5c1b8a0c", rating: 4.4, reviews: 980 },
    { _id: 9, name: "Smart Watch", price: 3499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", rating: 4.5, reviews: 870 },
    { _id: 10, name: "Bluetooth Speaker", price: 1999, image: "https://images.unsplash.com/photo-1512446816042-444d6412673a", rating: 4.3, reviews: 760 },

    // ACCESSORIES
    { _id: 11, name: "Backpack", price: 1199, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", rating: 4.4, reviews: 340 },
    { _id: 12, name: "Cap", price: 399, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f", rating: 4.2, reviews: 300 }
  ]);
});

module.exports = router;
